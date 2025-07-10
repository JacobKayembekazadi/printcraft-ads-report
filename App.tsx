
import React from 'react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import KeyMetricCard from './components/KeyMetricCard';
import RecommendationCard from './components/RecommendationCard';
import TopAdsTable from './components/TopAdsTable';
import SpendVsResultsChart from './components/SpendVsResultsChart';
import CpcOverTimeChart from './components/CpcOverTimeChart';
import Footer from './components/Footer';

import { CAMPAIGN_DATA } from './constants';

const App: React.FC = () => {
    const bestPerformer = CAMPAIGN_DATA.reduce((prev, current) => (prev.cpc < current.cpc) ? prev : current);
    const mostExpensive = CAMPAIGN_DATA.reduce((prev, current) => (prev.cpc > current.cpc) ? prev : current);
    const topThreeAds = [...CAMPAIGN_DATA].sort((a, b) => a.cpc - b.cpc).slice(0, 3);

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <Header />

            <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <SectionCard title="1. Executive Summary">
                        <p className="text-gray-700">This report provides an in-depth analysis of the advertising performance metrics for PrintCraft DTF campaigns. It assesses each campaign and ad set's performance in terms of reach, impressions, link clicks, cost per result, and overall efficiency. The findings herein are intended to support strategic optimization decisions for future advertising spend and drive improved return on investment.</p>
                    </SectionCard>
                    
                    <SectionCard title="2. Campaign Overview">
                        <p className="text-gray-700 mb-4">Each row in the provided data represents a unique advertisement run on Instagram with key metrics. The primary columns analyzed include:</p>
                        <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
                            <li>Campaign Name</li>
                            <li>Ad Set Name</li>
                            <li>Delivery Status</li>
                            <li>Reach & Impressions</li>
                            <li>Frequency</li>
                            <li>Result Type (Link Clicks)</li>
                            <li>Results (Quantity)</li>
                            <li>Amount Spent (USD)</li>
                            <li>Cost per Result (CPC)</li>
                            <li>Start & End Dates</li>
                        </ul>
                    </SectionCard>

                    <section id="kpi">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Key Performance Metrics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <KeyMetricCard 
                                variant="success"
                                title="🏆 Best Performing Campaign (by Cost per Result)"
                                campaignName={bestPerformer.name}
                                reach={9231} // Mock data as in original HTML
                                results={bestPerformer.results}
                                spend={bestPerformer.spend}
                                cpc={bestPerformer.cpc}
                            />
                            <KeyMetricCard 
                                variant="danger"
                                title="💸 Most Expensive Campaign (by Cost per Result)"
                                campaignName={mostExpensive.name}
                                reach={16394} // Mock data as in original HTML
                                results={mostExpensive.results}
                                spend={mostExpensive.spend}
                                cpc={mostExpensive.cpc}
                            />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Highest Engagement (by Clicks per 1,000 Impressions)</h3>
                            <p className="text-gray-700">High-performing ads demonstrated Click-Through Rate (CTR) estimates exceeding <span className="font-bold text-indigo-600">5%</span>. This is significantly above the industry average for Instagram feed ads, indicating highly resonant creative and copy.</p>
                        </div>
                    </section>
                    
                    <section id="visuals">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Visual Report</h2>
                        <SectionCard title="Spend vs. Results Bar Chart">
                           <SpendVsResultsChart data={CAMPAIGN_DATA} />
                        </SectionCard>
                        <div className="mt-8">
                            <SectionCard title="CPC Over Time Trend Line">
                                <CpcOverTimeChart data={CAMPAIGN_DATA} />
                            </SectionCard>
                        </div>
                         <div className="mt-8">
                            <SectionCard title="Top 3 Ads Snapshot">
                                <TopAdsTable ads={topThreeAds} />
                            </SectionCard>
                        </div>
                    </section>
                    
                    <SectionCard title="5. Conclusion">
                         <p className="text-gray-700">Your campaign is yielding valuable data. With strategic reallocations, improved creative iterations, and layered retargeting, your results can scale profitably. The best ads are performing extremely well and offer a clear roadmap for what works: <span className="font-semibold">simple, visually clear creatives with a direct call-to-action.</span> Continued focus on these winning elements will be key to future success.</p>
                    </SectionCard>

                </div>

                <aside className="lg:col-span-1">
                    <div className="sticky top-8 space-y-6">
                        <RecommendationCard title="Frequency Analysis">
                            <p className="text-gray-700 mb-3">Frequencies ranged from <span className="font-semibold text-indigo-600">1.27 to 1.39</span>. This is a healthy range indicating low audience saturation and minimal ad fatigue.</p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded">
                                <p className="font-bold">Suggestion:</p>
                                <p className="text-sm">Optimize creatives before frequency surpasses the <span className="font-bold">1.8</span> threshold to maintain campaign efficiency.</p>
                            </div>
                        </RecommendationCard>
                        
                        <RecommendationCard title="Budget Efficiency & Scaling">
                           <p className="text-gray-700 mb-3">The top ROI campaign achieved a <span className="font-semibold text-green-600">186% better cost efficiency</span> than the least efficient one.</p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded">
                                <p className="font-bold">Recommendation:</p>
                                <p className="text-sm">Increase budget allocation to high-performing ad creatives and audiences. A/B test new visuals based on the structure of the $0.21 CPC ad.</p>
                            </div>
                        </RecommendationCard>

                        <RecommendationCard title="Optimization Recommendations">
                            <ul className="space-y-3 text-gray-700">
                                <li><strong className="text-red-600">Turn off underperformers:</strong> Pause campaigns &gt; $0.45 CPC.</li>
                                <li><strong className="text-green-600">Double down:</strong> Increase budget on campaigns &lt; $0.25 CPC.</li>
                                <li><strong>Creative Iteration:</strong> Repurpose top creatives into Stories/Reels.</li>
                                <li><strong>Retargeting Layer:</strong> Add follow-up ads for users who clicked but did not convert.</li>
                                <li><strong>Ad Copy Framework:</strong> Apply PAS (Problem-Agitate-Solve) model + emojis + clear CTA.</li>
                            </ul>
                        </RecommendationCard>
                        
                        <RecommendationCard title="Next Steps">
                            <ul className="space-y-3 text-gray-700 list-decimal list-inside">
                                <li>Identify top 3 converting landing pages and match them with top-performing ads.</li>
                                <li>Map out funnel stages: Cold &gt; Engagement &gt; Retargeting.</li>
                                <li>Install Meta Pixel if not already installed to track deeper conversions.</li>
                                <li>Build Lookalike Audiences from 95% video viewers and link clickers.</li>
                            </ul>
                        </RecommendationCard>
                    </div>
                </aside>
            </main>
            
            <Footer />
        </div>
    );
};

export default App;
