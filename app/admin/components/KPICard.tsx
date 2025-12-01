import React from 'react';

interface TrendProps {
  value: number | string;
  change?: number;
  target?: number;
  isPercentage?: boolean;
  isNegativeGood?: boolean; // 감소가 좋은 경우 (예: 이탈률, 연체율)
}

const Trend: React.FC<TrendProps> = ({
  value,
  change,
  target,
  isPercentage = false,
  isNegativeGood = false
}) => {
  const isPositive = typeof change === 'number' && change >= 0;
  const trendColor = isNegativeGood
    ? isPositive ? 'text-red-500' : 'text-green-600'
    : isPositive ? 'text-green-600' : 'text-red-500';

  const trendIcon = isPositive ? '↑' : '↓';

  return (
    <div className="text-right">
      <div className="text-3xl font-bold text-blue-600 mb-2">
        {value}{isPercentage ? '%' : ''}
      </div>
      {change !== undefined && (
        <div className={`text-sm font-semibold ${trendColor} mb-1`}>
          {trendIcon} {Math.abs(change)}{isPercentage ? '%' : ''}
        </div>
      )}
      {target !== undefined && (
        <div className="text-xs text-gray-600">
          목표: {target}{isPercentage ? '%' : ''}
        </div>
      )}
    </div>
  );
};

interface KPICardProps {
  icon: string;
  title: string;
  value: number | string;
  subtitle?: string;
  change?: number;
  target?: number;
  secondaryInfo?: string;
  isPercentage?: boolean;
  isNegativeGood?: boolean;
  status?: 'normal' | 'success' | 'warning' | 'danger';
}

export const KPICard: React.FC<KPICardProps> = ({
  icon,
  title,
  value,
  subtitle,
  change,
  target,
  secondaryInfo,
  isPercentage = false,
  isNegativeGood = false,
  status = 'normal'
}) => {
  let bgColor = 'bg-white';
  if (status === 'success') bgColor = 'bg-green-50';
  else if (status === 'warning') bgColor = 'bg-yellow-50';
  else if (status === 'danger') bgColor = 'bg-red-50';

  return (
    <div className={`${bgColor} rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="text-3xl mb-2">{icon}</div>
          <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        </div>
      </div>

      <Trend
        value={value}
        change={change}
        target={target}
        isPercentage={isPercentage}
        isNegativeGood={isNegativeGood}
      />

      {subtitle && <p className="text-xs text-gray-600 mt-3">{subtitle}</p>}
      {secondaryInfo && (
        <p className="text-xs text-gray-700 font-medium mt-2">{secondaryInfo}</p>
      )}
    </div>
  );
};
