
import React from 'react';

interface KeyMetricCardProps {
    variant: 'success' | 'danger';
    title: string;
    campaignName: string;
    reach: number;
    results: number;
    spend: number;
    cpc: number;
}

const KeyMetricCard: React.FC<KeyMetricCardProps> = ({ variant, title, campaignName, reach, results, spend, cpc }) => {
    const baseClasses = {
        bg: variant === 'success' ? 'bg-green-50' : 'bg-red-50',
        border: variant === 'success' ? 'border-green-200' : 'border-red-200',
        titleText: variant === 'success' ? 'text-green-800' : 'text-red-800',
        text: variant === 'success' ? 'text-green-700' : 'text-red-700',
        cpcText: variant === 'success' ? 'text-green-800' : 'text-red-800',
        boldCpcText: variant === 'success' ? 'text-green-800' : 'text-red-800',
    };

    return (
        <div className={`${baseClasses.bg} border ${baseClasses.border} p-6 rounded-lg`}>
            <h3 className={`text-lg font-semibold ${baseClasses.titleText} mb-3`}>{title}</h3>
            <p className={`text-sm ${baseClasses.text} font-medium`}>"{campaignName}"</p>
            <div className="mt-4 space-y-2 text-gray-700">
                <p><strong>Reach:</strong> <span className="font-mono">{reach.toLocaleString()}</span></p>
                <p><strong>Results:</strong> <span className="font-mono">{results.toLocaleString()} link clicks</span></p>
                <p><strong>Amount Spent:</strong> <span className="font-mono">${spend.toFixed(2)}</span></p>
                <div className={`mt-3 pt-3 border-t ${baseClasses.border}`}>
                    <p className={baseClasses.cpcText}><strong>Cost per Result:</strong> <span className={`text-2xl font-bold ${baseClasses.boldCpcText}`}>${cpc.toFixed(2)}</span></p>
                </div>
            </div>
        </div>
    );
};

export default KeyMetricCard;
