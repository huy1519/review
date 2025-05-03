import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: fixed;
  top: 220px;
  right: 30px;
  width: 370px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  background: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  z-index: 99;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = styled.div`
  background-color: #2c3e94;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  font-size: 24px;
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

const ProgressCircle = styled.svg`
  width: 120px;  // Tăng kích thước vòng tròn
  height: 120px;  // Tăng kích thước vòng tròn
  margin-right: 12px;
`;

const ReadingTime = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  
  .icon {
    width: 20px;  // Kích thước của icon
    height: 20px;  // Kích thước của icon
    margin-right: 8px;
    color: green;
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    margin-left: 5px;
    text-decoration: underline;
  }
`;



const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 50;  // Bán kính là 50px
  const stroke = 10;  // Đổi độ dày viền thành 10px
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <CardWrapper>
      <Header>What You Will Learn:</Header>
      <ProgressWrapper>
        <ProgressCircle width="100" height="100">
          <circle
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="50"
            cy="50"
          />
          <circle
            stroke="#8c8cec"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx="50"
            cy="50"
            transform="rotate(-90 50 50)"  // Giữ góc bắt đầu từ 12h
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fontSize="20"  // Cập nhật fontSize cho phù hợp với kích thước mới
            fill="#333"
            fontWeight={500}
          >
            {Math.round(scrollProgress)}%
          </text>
        </ProgressCircle>
        <ReadingTime>
          Estimated Reading Time:<br />
          <Bold>5 Minutes</Bold>
        </ReadingTime>
      </ProgressWrapper>
      <IconWrapper>
        <p className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </p>
        <p className="title">The benefits of a high quality radar detector</p>
      </IconWrapper>
      <IconWrapper>
        <p className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </p>
        <p className="title">What to look for in a radar detector</p>
      </IconWrapper>
      <IconWrapper>
        <p className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </p>
        <p className="title">The top 5 radar detectors</p>
      </IconWrapper>
      
    </CardWrapper>
  );
};


export default ProgressBar;
