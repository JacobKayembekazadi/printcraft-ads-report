
import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
    const [reportDate, setReportDate] = useState('');

    useEffect(() => {
        setReportDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

    return (
        <footer className="mt-12 text-center text-gray-500 text-sm">
            <p>Report generated on {reportDate}.</p>
            <p>This report is prepared for review and iteration. Contact us to export as a Google Sheet or for AI-generated creative suggestions.</p>
        </footer>
    );
};

export default Footer;
