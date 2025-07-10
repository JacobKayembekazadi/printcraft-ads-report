
import React from 'react';
import { CampaignData } from '../types';

interface TopAdsTableProps {
    ads: CampaignData[];
}

const TopAdsTable: React.FC<TopAdsTableProps> = ({ ads }) => {
    const getCpcColor = (cpc: number) => {
        if (cpc <= 0.25) return 'text-green-600';
        if (cpc <= 0.40) return 'text-yellow-600';
        return 'text-red-600';
    };
    
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Results</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spend</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPC</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {ads.map((ad, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ad.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ad.results}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ad.spend.toFixed(2)}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${getCpcColor(ad.cpc)}`}>${ad.cpc.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopAdsTable;
