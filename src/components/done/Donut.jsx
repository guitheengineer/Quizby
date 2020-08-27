import React from 'react';
import PropTypes from 'prop-types';

const Donut = ({ value, valueLabel, size, strokeWidth }) => {
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
    <svg width={size} height={size} className="Done__donut">
      <circle
        r={radius}
        cx={halfSize}
        cy={halfSize}
        transform={rotateVal}
        style={trackstyle}
        className="Done__donut--track"
      />
      <circle
        r={radius}
        cx={halfSize}
        cy={halfSize}
        transform={rotateVal}
        style={indicatorstyle}
        className="Done__donut--indicator"
        strokeLinecap="round"
      />
      <text
        className="Done__text"
        x={halfSize + 3}
        y={halfSize + 22}
        style={{ textAnchor: 'middle' }}
      >
        <tspan className="Done__text--value">{value}</tspan>
        <tspan className="Done__text--percentage">%</tspan>
        <tspan className="Done__text--label" x={halfSize - 3} y={halfSize + 45}>
          {valueLabel}
        </tspan>
      </text>
    </svg>
  );
}

Donut.propTypes = {
  value: PropTypes.number, // value the chart should show
  valueLabel: PropTypes.string, // label for the chart
  size: PropTypes.number, // diameter of chart
  strokeWidth: PropTypes.number, // width of chart line
};

Donut.defaultProps = {
  value: 0,
  valueLabel: '',
  size: 187,
  strokeWidth: 10,
};


export default Donut;