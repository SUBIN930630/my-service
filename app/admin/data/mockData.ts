// Mock 데이터

export const kpiData = {
  // 1행: 핵심 비즈니스 지표
  dau: {
    today: 1245,
    change: 12,
    weekAvg: 1089,
    icon: '👥'
  },
  aiConversion: {
    today: 34,
    target: 40,
    weekAvg: 31,
    icon: '🎯'
  },
  dailyApplications: {
    today: 156,
    change: 8,
    monthly: 4567,
    icon: '📝'
  },
  nps: {
    current: 52,
    target: 60,
    change: 5,
    icon: '⭐'
  },

  // 2행: 재정 지표
  dailyFeeRevenue: {
    today: 12450000, // 1,245만원
    monthly: 374560000, // 37,456만원
    ytd: 4125670000, // 412,567만원
    icon: '💰'
  },
  loanApprovalRate: {
    today: 76,
    weekAvg: 74,
    monthlyAvg: 72,
    icon: '✅'
  },
  avgLoanAmount: {
    today: 95000000, // 9,500만원
    weekAvg: 92000000, // 9,200만원
    change: 3000000, // 300만원
    icon: '💵'
  },

  // 3행: 사용자 경험 지표
  aiConsultationTime: {
    average: '8분 23초',
    target: '15분 이상',
    change: '+1분 12초',
    icon: '⏱️'
  },
  bounceRate: {
    total: 20,
    initial: 25,
    loading: 8,
    icon: '📊'
  },
  delinquencyRate: {
    overdue30: 2.1,
    overdue60: 0.8,
    target: 1.5,
    icon: '⚠️'
  }
};

// 일일 신청/승인 트렌드 데이터
export const trendChartData = [
  { date: '11/20', applications: 145, approvals: 110 },
  { date: '11/21', applications: 152, approvals: 118 },
  { date: '11/22', applications: 148, approvals: 115 },
  { date: '11/23', applications: 165, approvals: 128 },
  { date: '11/24', applications: 158, approvals: 122 },
  { date: '11/25', applications: 170, approvals: 135 },
  { date: '11/26', applications: 162, approvals: 126 },
  { date: '11/27', applications: 156, approvals: 120 }
];

// 월별 매출 추이 데이터
export const monthlyRevenueData = [
  { month: '1월', revenue: 38500 },
  { month: '2월', revenue: 42300 },
  { month: '3월', revenue: 45600 },
  { month: '4월', revenue: 41200 },
  { month: '5월', revenue: 48900 },
  { month: '6월', revenue: 52100 },
  { month: '7월', revenue: 49800 },
  { month: '8월', revenue: 51600 },
  { month: '9월', revenue: 47300 },
  { month: '10월', revenue: 53200 },
  { month: '11월', revenue: 37456 } // 현재 달
];

export const REVENUE_TARGET = 50000; // 목표: 50,000만원

// 채널별 고객 획득 비용 (CAC) 데이터
export const cacData = [
  { channel: '광고', cost: 20000 },
  { channel: '추천', cost: 5000 },
  { channel: '검색', cost: 12000 }
];

export const AVERAGE_CAC = 15000; // 평균: 15,000원

// 포맷팅 유틸
export const formatNumber = (num: number): string => {
  return num.toLocaleString('ko-KR');
};

export const formatCurrency = (num: number): string => {
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(1)}만원`;
  }
  return formatNumber(num) + '원';
};

export const formatPercent = (num: number): string => {
  return `${num}%`;
};
