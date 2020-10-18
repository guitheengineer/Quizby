import React from 'react';

type Props = {
  value: number;
  valueLabel?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  fontSize?: number;
};

const Donut = ({
  value = 0,
  valueLabel,
  size = 187,
  strokeWidth = 10,
  fontSize = 16,
  className,
}: Props) => {
  const halfSize = size * 0.5;
  const radius = halfSize - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (value * circumference) / 100;
  const strokeDasharray = `${strokeval} ${circumference}`;

  const trackstyle = { strokeWidth };
  const indicatorstyle = {
    strokeWidth,
    strokeDasharray,
  };
  const rotateVal = `rotate(-90 ${halfSize},${halfSize})`;

  return (
    <>
      <svg width={size} height={size} className={`Done__donut ${className}`}>
        <circle
          r={radius}
          cx={halfSize}
          cy={halfSize}
          transform={rotateVal}
          style={trackstyle}
          className="Donut__track"
        />
        <circle
          r={radius}
          cx={halfSize}
          cy={halfSize}
          transform={rotateVal}
          style={indicatorstyle}
          className="Donut__indicator"
          strokeLinecap="round"
        />
      </svg>
      <div className="Donut__text">
        <div className="Donut__text-container">
          <span
            style={{ fontSize: `${fontSize}px` }}
            className="Donut__text-value"
          >
            {value}
          </span>
          <span
            style={{ fontSize: `${(fontSize * 23) / 100}px` }}
            className="Donut__percentage"
          >
            %
          </span>
        </div>
        <p className="Donut__label">{valueLabel}</p>
      </div>
    </>
  );
};

export default Donut;
