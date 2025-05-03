import React from 'react';
import styled from 'styled-components';

const RadarDetectorsStyles = styled.div`
    max-width: 890px;
    padding: 15px;
    margin: 40px auto;
    border-radius: 20px;
    background-color: #f3f3f3;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);

    .avoid {
        background-color: rgb(46, 64, 140);
        color: white;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 20px;
    }

    .avoid h1 {
        font-size: 28px;
        font-weight: bold;
        margin: 0;
    }

    .content-wrapper {
        padding: 20px;
    }

    .content-wrapper > div {
        margin-bottom: 20px;
        display: flex;
        align-items: flex-start;
    }

    .icon {
        color: green;
        margin-right: 15px;
    }

    .title {
        font-size: 20px;
        margin: 0;
    }

    .content {
        font-size: 20px;
        color: #333;
        margin-left: 10px;
    }

    @media (max-width: 768px) {
        .avoid h1 {
            font-size: 24px;
        }

        .title {
            font-size: 18px;
        }

        .content {
            font-size: 14px;
        }

        .content-wrapper > div {
            flex-direction: column;
            align-items: flex-start;
        }

        .icon {
            margin-right: 10px;
        }

        .title {
            font-size: 17px;
            text-align: left;
        }

        .content {
            font-size: 14px;
            text-align: left;
        }

        .content-wrapper {
            padding: 10px;
        }
    }
`

const RadarDetectors = () => {
    return (
        <RadarDetectorsStyles>
            <div className='avoid'>
                <h1>Radar Detectors Can Help With:</h1>
            </div>
            <div className='content-wrapper'>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex items-center justify-center'>
                        <p className='icon'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            stroke="currentColor" 
                            class="size-7">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </p>
                        <p className='title'>Avoiding Speeding Tickets</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex items-center justify-center'>
                        <p className='icon'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            stroke="currentColor" 
                            class="size-7">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </p>
                        <p className='title'>Preventing Insurance Premium Increases</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex items-center justify-center'>
                        <p className='icon'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            stroke="currentColor" 
                            class="size-7">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </p>
                        <p className='title'>Fuel Efficiency</p>
                    </div>
                </div>
            </div>
        </RadarDetectorsStyles>
    );
};

export default RadarDetectors;