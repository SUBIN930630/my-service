'use client';

import React from 'react';
import { KPICard } from './components/KPICard';
import { ApplicationTrendChart } from './components/LineChart';
import { MonthlyRevenueChart } from './components/BarChart';
import { CACChart } from './components/BarChart2';
import {
  kpiData,
  trendChartData,
  monthlyRevenueData,
  REVENUE_TARGET,
  cacData,
  AVERAGE_CAC,
  formatNumber,
  formatCurrency
} from './data/mockData';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* 페이지 제목 */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">대시보드</h1>
        <p className="text-gray-600">
          {new Date().toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
          })}
        </p>
      </div>

      {/* 1행: 핵심 비즈니스 지표 (4개 카드) */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">핵심 비즈니스 지표</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            icon={kpiData.dau.icon}
            title="일일 활성 사용자 (DAU)"
            value={formatNumber(kpiData.dau.today)}
            change={kpiData.dau.change}
            isPercentage={true}
            secondaryInfo={`주간 평균: ${formatNumber(kpiData.dau.weekAvg)}명`}
          />
          <KPICard
            icon={kpiData.aiConversion.icon}
            title="AI 상담 전환율"
            value={kpiData.aiConversion.today}
            target={kpiData.aiConversion.target}
            isPercentage={true}
            secondaryInfo={`주간 평균: ${kpiData.aiConversion.weekAvg}%`}
            status={
              kpiData.aiConversion.today >= kpiData.aiConversion.target
                ? 'success'
                : 'warning'
            }
          />
          <KPICard
            icon={kpiData.dailyApplications.icon}
            title="일일 신청 건수"
            value={formatNumber(kpiData.dailyApplications.today)}
            change={kpiData.dailyApplications.change}
            isPercentage={true}
            secondaryInfo={`월간: ${formatNumber(kpiData.dailyApplications.monthly)}건`}
          />
          <KPICard
            icon={kpiData.nps.icon}
            title="고객 만족도 (NPS)"
            value={kpiData.nps.current}
            target={kpiData.nps.target}
            change={kpiData.nps.change}
            secondaryInfo={`목표: ${kpiData.nps.target}점`}
            status={kpiData.nps.current >= kpiData.nps.target ? 'success' : 'warning'}
          />
        </div>
      </div>

      {/* 2행: 재정 지표 (3개 카드) */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">재정 지표</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <KPICard
            icon={kpiData.dailyFeeRevenue.icon}
            title="일일 수수료 매출"
            value={formatCurrency(kpiData.dailyFeeRevenue.today)}
            secondaryInfo={`월간: ${formatCurrency(kpiData.dailyFeeRevenue.monthly)}`}
          />
          <KPICard
            icon={kpiData.loanApprovalRate.icon}
            title="대출 승인율"
            value={kpiData.loanApprovalRate.today}
            isPercentage={true}
            secondaryInfo={`주간: ${kpiData.loanApprovalRate.weekAvg}% | 월간: ${kpiData.loanApprovalRate.monthlyAvg}%`}
            status="success"
          />
          <KPICard
            icon={kpiData.avgLoanAmount.icon}
            title="평균 대출액"
            value={formatCurrency(kpiData.avgLoanAmount.today)}
            change={Math.round((kpiData.avgLoanAmount.change / kpiData.avgLoanAmount.today) * 100)}
            isPercentage={true}
            secondaryInfo={`주간 평균: ${formatCurrency(kpiData.avgLoanAmount.weekAvg)}`}
          />
        </div>
      </div>

      {/* 3행: 사용자 경험 지표 (3개 카드) */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">사용자 경험 지표</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <KPICard
            icon={kpiData.aiConsultationTime.icon}
            title="AI 상담 평균 시간"
            value={kpiData.aiConsultationTime.average}
            secondaryInfo={`목표: ${kpiData.aiConsultationTime.target}`}
          />
          <KPICard
            icon={kpiData.bounceRate.icon}
            title="페이지 이탈률"
            value={kpiData.bounceRate.total}
            isPercentage={true}
            isNegativeGood={true}
            secondaryInfo={`초기: ${kpiData.bounceRate.initial}% | 로딩: ${kpiData.bounceRate.loading}%`}
            status={kpiData.bounceRate.total <= 20 ? 'success' : 'warning'}
          />
          <KPICard
            icon={kpiData.delinquencyRate.icon}
            title="연체율"
            value={kpiData.delinquencyRate.overdue30}
            isPercentage={true}
            isNegativeGood={true}
            secondaryInfo={`60일 이상: ${kpiData.delinquencyRate.overdue60}%`}
            status={kpiData.delinquencyRate.overdue30 <= kpiData.delinquencyRate.target ? 'success' : 'danger'}
          />
        </div>
      </div>

      {/* 메인 차트 영역 */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">차트 분석</h2>

        {/* 3개 차트 - 반응형 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 신청/승인 트렌드 */}
          <ApplicationTrendChart data={trendChartData} />

          {/* 채널별 CAC */}
          <CACChart data={cacData} average={AVERAGE_CAC} />
        </div>

        {/* 월별 매출 추이 - 풀 너비 */}
        <MonthlyRevenueChart data={monthlyRevenueData} target={REVENUE_TARGET} />
      </div>

      {/* 하단 요약 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="bg-white rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-2">최종 업데이트</p>
          <p className="text-lg font-semibold text-gray-900">
            {new Date().toLocaleTimeString('ko-KR')}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-2">월간 수익</p>
          <p className="text-lg font-semibold text-blue-600">
            {formatCurrency(kpiData.dailyFeeRevenue.monthly)}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-2">활성 고객</p>
          <p className="text-lg font-semibold text-green-600">
            {formatNumber(kpiData.dau.today)}명
          </p>
        </div>
      </div>
    </div>
  );
}
