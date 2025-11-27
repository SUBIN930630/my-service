import React from "react";

type Props = {
  params: { id: string };
};

const productData: Record<string, any> = {
  p1: {
    bank: "국민은행",
    name: "신혼 전세 맞춤 대출A",
    rate: "3.5%",
    limit: "최0 1.2억",
    monthly: "약 420,000원",
    desc: "신혼부부 우대 금리 적용 가능한 전세자금 대출입니다.",
  },
  p2: {
    bank: "신한은행",
    name: "안정형 전세 대출B",
    rate: "3.8%",
    limit: "최대 1.0억",
    monthly: "약 450,000원",
    desc: "고정금리 옵션으로 월 상환 부담을 예측하기 쉽습니다.",
  },
  p3: {
    bank: "우리은행",
    name: "빠른 심사 전세 대출C",
    rate: "4.0%",
    limit: "최대 9,000만원",
    monthly: "약 480,000원",
    desc: "간편서류 제출로 빠른 대출 실행이 가능합니다.",
  },
};

export default function ProductPage({ params }: Props) {
  const id = params.id;
  const p = productData[id] || {
    bank: "-",
    name: "알 수 없는 상품",
    rate: "-",
    limit: "-",
    monthly: "-",
    desc: "선택한 상품 정보를 불러올 수 없습니다.",
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0f1113] text-white">
      <header className="border-b border-white/5 bg-[#111315] px-5 py-4">
        <div className="mx-auto flex w-full max-w-md items-center gap-3 text-sm font-semibold text-white/80">
          <span className="text-base text-white">상품 상세</span>
        </div>
      </header>

      <main className="flex flex-1 items-start px-5 py-6 pb-20">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-lg border border-white/6 bg-[#181a1e] p-4">
            <h3 className="text-lg font-semibold text-white">{p.name}</h3>
            <div className="mt-2 text-sm text-white/60">제공: {p.bank}</div>
            <div className="mt-3 text-sm text-white">금리: {p.rate}</div>
            <div className="mt-1 text-sm text-white">한도: {p.limit}</div>
            <div className="mt-1 text-sm text-white">월 상환: {p.monthly}</div>
            <p className="mt-3 text-sm text-white/50">{p.desc}</p>

            <div className="mt-6 flex gap-2">
              <a
                href="#"
                className="flex-1 rounded bg-[#5f8fff] px-4 py-2 text-sm font-semibold text-white"
              >
                신청 계속하기
              </a>
              <a href="#" className="rounded bg-[#2b2f34] px-4 py-2 text-sm text-white/80">
                문의하기
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
