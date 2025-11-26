"use client";

import { useState } from "react";
import {
  Home as HomeIcon,
  Gift,
  Boxes,
  MoreHorizontal,
  Search,
  ArrowLeft,
} from "lucide-react";

const quickQuestions = [
  "결혼 준비 중이고 전세자금 1억 필요해요",
  "프리랜서인데 신용이 낮아요",
  "나에게 맞는 대출 추천해줘",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionSelect = (question: string) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#111315] text-white">
      <header className="border-b border-white/5 bg-[#111315] px-5 py-4">
        <div className="mx-auto flex w-full max-w-md items-center gap-3 text-sm font-semibold text-white/80">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#181a1e] text-white/80"
            aria-label="뒤로 가기"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="text-base text-white">AI 검색</span>
        </div>
      </header>

      <main className="flex flex-1 items-end bg-[#0f1113] px-5 pb-4">
        <div className="mx-auto flex w-full max-w-md flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => handleQuestionSelect(question)}
                className="rounded-full border border-[#7fb2ff] bg-[#5f8fff] px-4 py-2 text-xs font-semibold text-white shadow-[0_6px_16px_rgba(95,143,255,0.35)] transition hover:bg-[#6c99ff]"
              >
                {question}
              </button>
            ))}
          </div>
          {selectedQuestion && (
            <p className="text-xs text-white/50">선택한 질문: “{selectedQuestion}”</p>
          )}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#181a1e] px-4 py-3 text-sm text-white/70">
            <Search className="h-4 w-4 text-white/60" />
            <span>AI가 찾은 최적의 대출을 검색해보세요</span>
          </div>
          <p className="text-xs text-white/40">
            버튼을 누르거나 직접 질문을 입력해 더 정확한 추천을 받아보세요.
          </p>
        </div>
      </main>

      <nav className="sticky bottom-0 border-t border-white/5 bg-[#0b0c0f]">
        <div className="mx-auto flex w-full max-w-md items-center justify-between px-6 py-4 text-xs text-white/60">
          {[
            { key: "home", label: "홈", icon: HomeIcon },
            { key: "benefit", label: "혜택", icon: Gift, dot: true },
            { key: "product", label: "상품", icon: Boxes },
            { key: "all", label: "전체", icon: MoreHorizontal, dot: true },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveTab(item.key)}
                className={`relative flex flex-col items-center gap-1 ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                <span className="relative">
                  <Icon
                    className={`h-5 w-5 ${isActive ? "text-white" : "text-white/50"}`}
                  />
                  {item.dot && (
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-rose-500" />
                  )}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
