import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScoreCircleWrapper = styled.div`
  position: relative;
  width: 100px;  // Adjust width
  height: 100px;  // Adjust height
`;

const Svg = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const ScoreText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 16px;  // Adjust font size for 100x100 size
  color: #222;
  @media (max-width: 768px) {
    font-size: 14px;  // Smaller font size for smaller screens
  }
`;

const AnimatedCircle = styled.circle`
  transition: stroke-dashoffset 1s ease-out;
`;

const ScoreCircle = ({ score }) => {
  const radius = 45;  // Adjust radius to fit within 100x100
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const finalOffset = circumference - (score / 10) * circumference;
    const timeout = setTimeout(() => {
      setOffset(finalOffset);
    }, 200); // delay animation a bit for smoother feel

    return () => clearTimeout(timeout);
  }, [score, circumference]);

  return (
    <ScoreCircleWrapper>
      <Svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#eee"
          strokeWidth="10"  // Adjust stroke width to match the smaller size
          fill="none"
        />
        <AnimatedCircle
          cx="50"
          cy="50"
          r={radius}
          stroke="#6ddc3f"
          strokeWidth="10"  // Adjust stroke width to match the smaller size
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </Svg>
      <ScoreText>{score}/10</ScoreText>
    </ScoreCircleWrapper>
  );
};

export default ScoreCircle;
