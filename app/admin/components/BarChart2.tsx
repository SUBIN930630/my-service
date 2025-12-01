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
  ResponsiveContainer
} from 'recharts';

interface CACChartProps {
  data: Array<{ channel: string; cost: number }>;
  average: number;
  title?: string;
}

export const CACChart: React.FC<CACChartProps> = ({
  data,
  average,
  title = '채널별 고객 획득 비용 (CAC)'
}) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="text-sm font-semibold text-gray-700">{payload[0].payload.channel}</p>
          <p className="text-sm text-blue-600">
            비용: {payload[0].payload.cost.toLocaleString()}원
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
          <XAxis dataKey="channel" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <ReferenceLine
            y={average}
            stroke="#6B7280"
            strokeDasharray="5 5"
            label={{ value: `평균: ${average.toLocaleString()}원`, position: 'top', fill: '#6B7280', fontSize: 12 }}
          />
          <Bar
            dataKey="cost"
            name="CAC"
            fill="#3B82F6"
            radius={[8, 8, 0, 0]}
            label={{
              position: 'top' as const,
              fill: '#374151',
              fontSize: 12
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
