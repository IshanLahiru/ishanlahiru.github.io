import React, { ReactNode } from 'react';

interface ToolTipWrapperProps {
    children: ReactNode;
    tooltipText: string;
    direction?: 'top' | 'bottom' | 'left' | 'right';
}

const ToolTipWrapper: React.FC<ToolTipWrapperProps> = ({
    children,
    tooltipText,
    direction = 'top'
}) => {
    const tooltipClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    };

    return (
        <div className="relative group inline-block">
            {children}
            <span
                className={`absolute px-2 py-1 text-xs text-white bg-gray-800 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tooltipClasses[direction]
                    }`}>
                {tooltipText}
            </span>
        </div>
    );
};

export default ToolTipWrapper;
