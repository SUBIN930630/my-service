import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface MonthlyRevenueChartProps {
  data: Array<{ month: string; revenue: number }>;
  target: number;
  title?: string;
}

export const MonthlyRevenueChart: React.FC<MonthlyRevenueChartProps> = ({
  data,
  target,
  title = '월별 매출 추이'
}) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="text-sm font-semibold text-gray-700">{payload[0].payload.month}</p>
          <p className="text-sm text-blue-600">
            매출: {payload[0].payload.revenue.toLocaleString()}만원
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="month" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <ReferenceLine
            y={target}
            stroke="#EF4444"
            strokeDasharray="5 5"
            label={{ value: `목표: ${target.toLocaleString()}만원`, position: 'top', fill: '#EF4444', fontSize: 12 }}
          />
          <Bar dataKey="revenue" name="매출" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.revenue >= target ? '#3B82F6' : '#93C5FD'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
