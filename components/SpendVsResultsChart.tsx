
import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { CampaignData } from '../types';

interface SpendVsResultsChartProps {
    data: CampaignData[];
}

const SpendVsResultsChart: React.FC<SpendVsResultsChartProps> = ({ data }) => {
    return (
        <div className="w-full h-96">
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="left" orientation="left" stroke="#3B82F6" label={{ value: 'Amount Spent ($)', angle: -90, position: 'insideLeft', fill: '#3B82F6' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#16A34A" label={{ value: 'Link Clicks', angle: 90, position: 'insideRight', fill: '#16A34A' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="spend" name="Amount Spent (USD)" fill="#3B82F6" />
                    <Bar yAxisId="right" dataKey="results" name="Link Clicks" fill="#16A34A" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SpendVsResultsChart;
