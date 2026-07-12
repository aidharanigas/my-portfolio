"use client";
import React, { useState } from "react";
import trickyData from "@/lib/tricky.json";
import basicQaData from "@/lib/basicQa.json";
import interviewData from "@/lib/interview.json";
import technicalData from "@/lib/technical.json";

interface QAItem {
  id?: string | number;
  key?: string;
  question: string;
  answer: string | { [key: string]: string };
  follow_up?: string;
  note?: string;
  wrong_example?: string;
  correct_example?: string;
  bad_example?: string;
  example?: string;
}

type TabType = "basic" | "interview" | "tricky" | "technical";

const QA = () => {
  const [activeTab, setActiveTab] = useState<TabType>("basic");
  const renderAnswer = (answer: string | { [key: string]: string }) => {
    if (typeof answer === "string") {
      return <p className="text-gray-300 leading-relaxed">{answer}</p>;
    }
    return (
      <div className="space-y-2">
        {Object.entries(answer).map(([key, value]) => (
          <div key={key} className="flex gap-2">
            <span className="font-semibold text-emerald-400 capitalize">
              {key.replace(/_/g, " ")}:
            </span>
            <span className="text-gray-300">{value}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderQACard = (item: QAItem, key: string, index: number) => {
    return (
      <div
        key={key}
        className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
      >
        <div className="flex gap-4 mb-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
          </span>
          <h3 className="text-lg font-semibold text-emerald-400">
            {item.question}
          </h3>
        </div>
        <div className="pl-12 space-y-3">
          {renderAnswer(item.answer)}
          {item.follow_up && (
            <div className="mt-3 p-3 bg-emerald-500/10 border-l-4 border-emerald-500 rounded">
              <p className="text-sm text-emerald-300">
                <span className="font-semibold">Follow-up: </span>
                {item.follow_up}
              </p>
            </div>
          )}
          {item.note && (
            <div className="mt-3 p-3 bg-blue-500/10 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-blue-300">
                <span className="font-semibold">Note: </span>
                {item.note}
              </p>
            </div>
          )}
          {item.wrong_example && (
            <div className="mt-3 p-3 bg-red-500/10 border-l-4 border-red-500 rounded">
              <p className="text-sm text-red-300">
                <span className="font-semibold">❌ Wrong: </span>
                <code className="bg-black/30 px-2 py-1 rounded">
                  {item.wrong_example}
                </code>
              </p>
            </div>
          )}
          {item.correct_example && (
            <div className="mt-3 p-3 bg-green-500/10 border-l-4 border-green-500 rounded">
              <p className="text-sm text-green-300">
                <span className="font-semibold">✓ Correct: </span>
                <code className="bg-black/30 px-2 py-1 rounded">
                  {item.correct_example}
                </code>
              </p>
            </div>
          )}
          {item.bad_example && (
            <div className="mt-3 p-3 bg-red-500/10 border-l-4 border-red-500 rounded">
              <p className="text-sm text-red-300">
                <span className="font-semibold">❌ Bad Example: </span>
                <code className="bg-black/30 px-2 py-1 rounded">
                  {item.bad_example}
                </code>
              </p>
            </div>
          )}
          {item.example && (
            <div className="mt-3 p-3 bg-purple-500/10 border-l-4 border-purple-500 rounded">
              <p className="text-sm text-purple-300">
                <span className="font-semibold">Example: </span>
                <code className="bg-black/30 px-2 py-1 rounded text-xs">
                  {item.example}
                </code>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSection = (
    title: string,
    description: string,
    data: QAItem[] | Record<string, QAItem>,
    sectionKey: string
  ) => {
    const items = Array.isArray(data)
      ? data
      : Object.entries(data).map(([key, value]) => ({
          key,
          ...(value as QAItem),
        }));

    return (
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3">
            {title}
          </h2>
          <p className="text-gray-400 text-lg">{description}</p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item: QAItem, index: number) => {
            const key = `${sectionKey}-${item.id || item.key || index}`;
            return renderQACard(item, key, index);
          })}
        </div>
      </section>
    );
  };

  return (
    <div
      id="qa"
      className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black py-20 px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Interview Q&A Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive collection of interview questions and answers across
            different categories
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => setActiveTab("basic")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "basic"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            🎯 Basic
          </button>
          <button
            onClick={() => setActiveTab("interview")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "interview"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            💼 Interview
          </button>
          <button
            onClick={() => setActiveTab("tricky")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "tricky"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            🧠 Tricky
          </button>
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "technical"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            💻 Technical
          </button>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === "basic" &&
            renderSection(
              "🎯 Basic Interview Questions",
              "Essential questions about yourself, your role, and career goals",
              basicQaData,
              "basic"
            )}

          {activeTab === "interview" &&
            renderSection(
              "💼 Interview Questions",
              "Common technical and behavioral interview questions",
              interviewData,
              "interview"
            )}

          {activeTab === "tricky" &&
            renderSection(
              "🧠 Tricky React Questions",
              "Advanced React concepts and common pitfalls",
              trickyData,
              "tricky"
            )}

          {activeTab === "technical" && (
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  💻 Technical Questions
                </h2>
                <p className="text-gray-400 text-lg">
                  In-depth technical questions organized by technology stack
                </p>
                <div className="mt-4 h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              </div>

              <div className="space-y-12">
                {/* Frontend React/Next.js */}
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Frontend - React & Next.js
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalData.frontend_react_nextjs.map(
                      (item: QAItem, index: number) =>
                        renderQACard(item, `tech-frontend-${item.id}`, index)
                    )}
                  </div>
                </div>

                {/* JavaScript */}
                <div>
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    JavaScript Fundamentals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalData.javascript.map((item: QAItem, index: number) =>
                      renderQACard(item, `tech-js-${item.id}`, index)
                    )}
                  </div>
                </div>

                {/* Backend Node.js */}
                <div>
                  <h3 className="text-2xl font-semibold text-green-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Backend - Node.js
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalData.backend_nodejs.map(
                      (item: QAItem, index: number) =>
                        renderQACard(item, `tech-backend-${item.id}`, index)
                    )}
                  </div>
                </div>

                {/* Database */}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Database
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalData.database.map((item: QAItem, index: number) =>
                      renderQACard(item, `tech-db-${item.id}`, index)
                    )}
                  </div>
                </div>

                {/* WebSockets */}
                <div>
                  <h3 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Real-time & WebSockets
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalData.realtime_websockets.map(
                      (item: QAItem, index: number) =>
                        renderQACard(item, `tech-ws-${item.id}`, index)
                    )}
                  </div>
                </div>

                {/* Behavioral Technical */}
                <div>
                  <h3 className="text-2xl font-semibold text-pink-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Behavioral & Technical Approach
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalData.behavioral_technical.map(
                      (item: QAItem, index: number) =>
                        renderQACard(item, `tech-behavioral-${item.id}`, index)
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default QA;
