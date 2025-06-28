import React, { ReactNode, useState } from 'react';

interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
            tabIndex={0}
            style={{ pointerEvents: 'auto' }}
        >
            {children}
            {visible && (
                <span className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 px-3 py-2 rounded-lg bg-black/80 text-white text-xs font-semibold shadow-lg whitespace-nowrap animate-fade-up">
                    {content}
                </span>
            )}
        </span>
    );
};

export default Tooltip; 