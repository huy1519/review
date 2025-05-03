import React from 'react';
import styled from 'styled-components';

const WhatToAvoidStyles = styled.div`
    max-width: 890px;
    padding: 15px;
    margin: 40px auto;
    border-radius: 20px;
    background-color: #f3f3f3;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);

    .avoid {
        background-color: rgb(235, 87, 87);
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
        color: red;
        margin-right: 15px;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
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
`;

const WhatToAvoid = () => {
    return (
        <WhatToAvoidStyles>
            <div className='avoid'>
                <h1>What To Avoid</h1>
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
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>
                        <p className='title'>Outdated Technology</p>
                    </div>
                    <div>
                        <p className='content'>
                            Avoid radar detectors that lack modern features such as GPS integration, digital signal processing (DSP), or connectivity options like WiFi or Bluetooth. These features significantly enhance the functionality and accuracy of radar detectors, helping to minimize false alerts and improve the user experience.
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
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>
                        <p className='title'>Illegal Models</p>
                    </div>
                    <div>
                        <p className='content'>
                            Before purchasing, customers should verify the legality of radar detectors in their specific state or country. Some regions have restrictions or outright bans on the use of these devices. Buying a radar detector that is illegal in your area can lead to fines or confiscation of the device.
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
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>
                        <p className='title'>Lack of Brand Reputation or Reviews</p>
                    </div>
                    <div>
                        <p className='content'>
                            It's essential to choose a radar detector from a reputable brand known for quality and reliability. Avoid brands that have poor or no reviews, as these may indicate inferior quality or less effective performance. Good customer reviews can provide insights into the real-world effectiveness and reliability of the product.
                        </p>
                    </div>
                </div>
            </div>
        </WhatToAvoidStyles>
    );
};

export default WhatToAvoid;
