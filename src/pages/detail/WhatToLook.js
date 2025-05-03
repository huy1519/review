import React from 'react';
import styled from 'styled-components';

const WhatToLookStyles = styled.div`
    max-width: 890px;
    padding: 15px;
    margin: 40px auto;
    border-radius: 20px;
    background-color: #f3f3f3;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);

    .avoid {
        background-color: rgb(89, 179, 119);;
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
        font-weight: bold;
        margin: 0;
        background: yellow;
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
            font-size: 17px;
        }

        .content-wrapper > div {
            flex-direction: column;
            align-items: flex-start;
        }

        .icon {
            margin-right: 10px;
        }

        .title {
            font-size: 18px;
            text-align: left;
        }

        .content {
            font-size: 17px;
            text-align: left;
        }

        .content-wrapper {
            padding: 10px;
        }
    }
`

const WhatToLook = () => {
    return (
        <WhatToLookStyles>
            <div className='avoid'>
                <h1>What To Look For In A Radar Detector:</h1>
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
                        <p className='title'>Sensitivity and Range</p>
                    </div>
                    <div>
                        <p className='content'>
                            A good radar detector should have high sensitivity to detect radar signals from a greater distance. This provides drivers with ample warning time to adjust their speed. The range is crucial for detecting speed traps well before reaching them.
                        </p>
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
                        <p className='title'>False Alert Filtering</p>
                    </div>
                    <div>
                        <p className='content'>
                            Advanced filtering capabilities are essential to differentiate between actual police radar and other sources of similar frequencies, such as automatic doors or adaptive cruise controls in other vehicles. This reduces unnecessary distractions and false alarms.
                        </p>
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
                        <p className='title'>GPS Capabilities</p>
                    </div>
                    <div>
                        <p className='content'>
                            GPS integration allows the radar detector to store the locations of fixed speed cameras and red light cameras. It also helps in adjusting sensitivity based on geographic location and can automatically mute alerts in low-speed areas, further reducing false alarms.
                        </p>
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
                        <p className='title'>Connectivity Features</p>
                    </div>
                    <div>
                        <p className='content'>
                            Look for models that offer connectivity options like WiFi or Bluetooth. These features allow the device to connect to community-sharing apps for real-time alerts on speed traps, police presence, and other road hazards reported by other users.
                        </p>
                    </div>
                </div>
            </div>
        </WhatToLookStyles>
    );
};

export default WhatToLook;