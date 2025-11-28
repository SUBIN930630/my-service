import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface LineChartComponentProps {
  data: Array<{ date: string; applications: number; approvals: number }>;
  title?: string;
}

export const ApplicationTrendChart: React.FC<LineChartComponentProps> = ({
  data,
  title = '일일 신청/승인 트렌드'
}) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="text-sm font-semibold text-gray-700">{payload[0].payload.date}</p>
          <p className="text-sm text-blue-600">
            신청: {payload[0].payload.applications}건
          </p>
          <p className="text-sm text-green-600">
            승인: {payload[0].payload.approvals}건
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
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="date" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
            formatter={(value) => {
              if (value === 'applications') return '신청';
              if (value === 'approvals') return '승인';
              return value;
            }}
          />
          <Line
            type="monotone"
            dataKey="applications"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6', r: 4 }}
            activeDot={{ r: 6 }}
            name="신청"
          />
          <Line
            type="monotone"
            dataKey="approvals"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ fill: '#10B981', r: 4 }}
            activeDot={{ r: 6 }}
            name="승인"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
