
import React from 'react';

interface RecommendationCardProps {
    title: string;
    children: React.ReactNode;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        {children}
    </div>
);

export default RecommendationCard;
