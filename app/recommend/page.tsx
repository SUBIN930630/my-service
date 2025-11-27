"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Product = {
  id: string;
  bank: string;
  rate: string;
  limit: string;
  monthly: string;
};

export default function RecommendPage() {
  const router = useRouter();
  const [extracted, setExtracted] = useState<any | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("extractedInfo");
      if (raw) setExtracted(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  const products: Product[] = [
    {
      id: "p1",
      bank: "국민은행",
      rate: "3.5%",
      limit: "최대 1.2억",
      monthly: "약 420,000원",
    },
    {
      id: "p2",
      bank: "신한은행",
      rate: "3.8%",
      limit: "최대 1.0억",
      monthly: "약 450,000원",
    },
    {
      id: "p3",
      bank: "우리은행",
      rate: "4.0%",
      limit: "최대 9,000만원",
      monthly: "약 480,000원",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#0f1113] text-white">
      <header className="border-b border-white/5 bg-[#111315] px-5 py-4">
        <div className="mx-auto flex w-full max-w-md items-center gap-3 text-sm font-semibold text-white/80">
          <button
            type="button"
            onClick={() => router.push("/extract")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#181a1e] text-white/80"
            aria-label="뒤로 가기"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="text-base text-white">AI 추천 결과</span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-md px-5 pt-4">
        <div className="text-sm font-semibold text-white">고객님의 대출을 위해 데이터를 조회했어요</div>
      </div>

      <main className="flex flex-1 items-start px-5 py-6 pb-20">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-4 rounded-lg border border-white/6 bg-[#181a1e] p-4 text-sm">
            {extracted ? (
              <div className="mt-2 text-sm text-white">
                <div>직업: {extracted.occupation}</div>
                <div>소득: {extracted.incomeRange}</div>
                <div>신용: {extracted.creditScore}</div>
                <div>목적: {extracted.loanPurpose}</div>
              </div>
            ) : (
              <div className="mt-2 text-sm text-white/50">추출된 정보가 없습니다.</div>
            )}
          </div>

          <div className="mt-6 mb-4">
            <div className="text-base font-semibold text-white">추천 상품</div>
            <div className="mt-2 text-sm text-white/60">고객님께 맞는 상품 <span className="text-[#3B82F6] font-semibold">3개</span>를 추천드려요</div>
          </div>

          <div className="flex flex-col gap-3">
            {products.map((p, idx) => {
              const isBest = idx === 0;
              return (
                <div
                  key={p.id}
                  className={`rounded-lg p-4 ${isBest ? "border-2 border-[#5f8fff] bg-[#0b1220] shadow-[0_10px_30px_rgba(95,143,255,0.12)]" : "border border-white/6 bg-[#0f1113]"}`}
                >
                  {isBest && (
                    <div className="mb-2 w-full flex justify-start">
                      <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">추천</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-white">{p.bank} - 전세자금 대출</h4>
                        <span className="text-xs text-white/60">{p.rate}</span>
                      </div>
                      <p className="mt-1 text-xs text-white/50">한도: {p.limit}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">{p.monthly}</div>
                      <button
                        onClick={() => router.push(`/product/${p.id}`)}
                        className={`mt-2 rounded bg-[#3B82F6] px-3 py-1 text-xs font-semibold text-white`}
                      >
                        신청하기
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
