import React, { ReactNode, CSSProperties } from 'react';

interface ToolTipWrapperProps {
  children: ReactNode;
  tooltipText: string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  tooltipWidth?: string | number;
}

const ToolTipWrapper: React.FC<ToolTipWrapperProps> = ({
  children,
  tooltipText,
  direction = 'top',
  tooltipWidth = 'auto'
}) => {
  const tooltipClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div className="group relative inline-block">
      {children}
      <span
        className={`absolute rounded bg-gray-800 px-2 py-1 text-start text-xs text-white opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100 ${tooltipClasses[direction]}`}
        style={{ width: tooltipWidth }}
      >
        {tooltipText}
      </span>
    </div>
  );
};

export default ToolTipWrapper;
