"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ExtractPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate extraction progress
    let t = 0;
    const id = setInterval(() => {
      t += Math.floor(Math.random() * 15) + 8;
      setProgress((p) => Math.min(100, p + t / 10));
    }, 400);

    // After ~3s finish and navigate to recommendation
    const finish = setTimeout(() => {
      clearInterval(id);

      const extracted = {
        occupation: "직장인",
        incomeRange: "연 3,000만원~5,000만원",
        creditScore: "좋음 (700+)",
        loanPurpose: "전세자금",
        requestedAmount: "1억",
      };

      try {
        sessionStorage.setItem("extractedInfo", JSON.stringify(extracted));
      } catch (e) {
        // ignore
      }

      router.push("/recommend");
    }, 3000 + Math.random() * 800);

    return () => {
      clearInterval(id);
      clearTimeout(finish);
    };
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0f1113] text-white">
      <header className="border-b border-white/5 bg-[#111315] px-5 py-4">
        <div className="mx-auto flex w-full max-w-md items-center gap-3 text-sm font-semibold text-white/80">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#181a1e] text-white/80"
            aria-label="뒤로 가기"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="text-base text-white">AI 검색</span>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-5 pb-20">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-lg border border-white/6 bg-[#181a1e] p-6 text-sm">
            <div className="mb-3 text-sm text-white">
              <div className="font-semibold">최적 대출 상품을 찾는 중이에요</div>
              <div className="mt-1 text-xs text-white/50">금융 데이터를 안전하게 분석하고 있어요</div>
            </div>

            <div className="mb-4 flex items-center justify-center">
              {/* Simple SVG animation: bouncing coins */}
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
                  </filter>
                </defs>
                <g filter="url(#shadow)">
                  <circle cx="40" cy="36" r="10" fill="#FFD166">
                    <animate attributeName="cy" values="36;22;36" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="36" r="10" fill="#06D6A0">
                    <animate attributeName="cy" values="36;12;36" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="160" cy="36" r="10" fill="#118AB2">
                    <animate attributeName="cy" values="36;26;36" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
            </div>

            <div className="text-xs text-white/50">
              추출 항목: 직업 분류, 예상 소득, 신용점수, 대출 목적
            </div>
            <div className="mt-3 text-xs text-white/60">데이터는 로컬에서 안전하게 분석됩니다. 잠시만 기다려주세요.</div>
            <div className="mt-4 text-xs text-white/50">진행률: {Math.min(100, Math.round(progress))}%</div>
          </div>
        </div>
      </main>
    </div>
  );
}
