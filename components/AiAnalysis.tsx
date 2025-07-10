import React, { useState, useCallback } from 'react';
import { getAiAnalysis } from '../services/geminiService';
import { SparklesIcon, PaperAirplaneIcon } from './Icons';

const AiAnalysis: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [analysisResult, setAnalysisResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateAnalysis = useCallback(async () => {
        if (!prompt.trim()) {
            setError('Please enter a question for the AI.');
            return;
        }
        setIsLoading(true);
        setError('');
        setAnalysisResult('');

        const result = await getAiAnalysis(prompt);

        if (result.startsWith('An error occurred')) {
            setError(result);
        } else {
            setAnalysisResult(result);
        }
        setIsLoading(false);
    }, [prompt]);

    return (
        <section id="ai-analysis">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <SparklesIcon className="w-6 h-6 mr-3 text-indigo-500" />
                5. AI-Powered Analysis
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Ask Gemini for a Deeper Analysis</h3>
                <p className="text-sm text-gray-500 mb-4">Get instant insights by asking a question about the campaign data.</p>
                
                <div className="space-y-4">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., Which campaign should we scale and why? or What kind of new ad creatives should we test?"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        rows={3}
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleGenerateAnalysis}
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                            </>
                        ) : (
                            <>
                                <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                                Generate Analysis
                            </>
                        )}
                    </button>
                </div>
                
                {error && <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-200 rounded-md">{error}</div>}
                
                {analysisResult && (
                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <h4 className="font-semibold text-gray-800 mb-2">Analysis Result:</h4>
                        <div
                            className="prose prose-sm max-w-none"
                            style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                            dangerouslySetInnerHTML={{
                                __html: analysisResult
                                    .replace(/```(html|javascript|bash|json)?\n?/g, '<pre class="bg-gray-800 text-white p-4 my-2 rounded-md overflow-x-auto"><code>')
                                    .replace(/```/g, '</code></pre>')
                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                            }}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default AiAnalysis;
