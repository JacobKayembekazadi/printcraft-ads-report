
import React from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { CampaignData } from '../types';

interface CpcOverTimeChartProps {
    data: CampaignData[];
}

const CpcOverTimeChart: React.FC<CpcOverTimeChartProps> = ({ data }) => {
    return (
        <div className="w-full h-96">
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['auto', 'auto']} label={{ value: 'Cost per Result ($)', angle: -90, position: 'insideLeft' }}/>
                    <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                    <Legend />
                    <Line type="monotone" dataKey="cpc" name="Cost per Result (USD)" stroke="#8B5CF6" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CpcOverTimeChart;
