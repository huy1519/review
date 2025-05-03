import React from 'react';
import styled from 'styled-components';

const TitleStyles = styled.div`
    max-width: 890px;
    padding: 15px;
    margin: 40px auto;
    border-radius: 20px;
    background-color: #f3f3f3;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    h1{
            text-align: center;
            font-size: 40px;
            font-weight: bolder;
            margin-bottom: 10px;
            @media (max-width: 768px) {
                font-size: 24px;
            }
        }

    .content {
        font-size: 20px;
        color: #333;
        padding: 10px;
        text-shadow: transparent 0px 0px 0px;
        text-align: center;
        margin-bottom: 10px;
        @media (max-width: 768px) {
                font-size: 16x;
                padding: 0;
            }
    }

    .top-1 {
        display: flex;
        align-items: center;
        width: 100%;
        @media (max-width: 768px) {
            display: none;
        }
    }

    .hover {
        border: 1px solid #4368e0;;
        border-radius: 4px;
        width: 33%;
        padding: 10px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: rgb(46, 64, 140);
        cursor: pointer;
    }

    .hover-1 {
        border: none;
        border-radius: 4px;
        width: 33%;
        padding: 10px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: white;
        background-color: rgb(46, 64, 140);
        cursor: pointer;
    }

    .img-main {
        margin: 10px 0px 20px;
        justify-items: center;
        width: 100%;
        height: auto;
    }

    .img-1 {
        width: 600px;
        height: auto;
    }

    .content-1 {
        font-size: 18px;
        color: #333;
        padding: 5px 10px ;
        text-shadow: transparent 0px 0px 0px;
        margin-bottom: 5px;
        @media (max-width: 768px) {
                font-size: 16px;
                padding: 0;
            }
    }

    .title-2 {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row; /* Đặt mặc định theo chiều ngang */
        padding: 10px;

        @media (max-width: 768px) {
            flex-direction: column; /* Khi màn hình nhỏ, hiển thị theo chiều dọc */
            align-items: center; /* Canh giữa các phần tử theo chiều ngang */
        }

        p {
            font-size: 28px;
            color: rgb(11, 36, 99);
            font-weight: bolder;
            margin-left: 10px;
            @media (max-width: 768px) {
                margin-left: 0; /* Loại bỏ margin-left khi hiển thị dọc */
            }
        }

        img {
            width: 237px;
            height: 244px;
            margin-left: 40px;
            margin-right: 20px;

            @media (max-width: 768px) {
                margin-left: 0;
                margin-right: 0;
                margin-top: 10px; /* Thêm một chút margin trên cho hình ảnh khi theo chiều dọc */
            }
        }
    }
`

const Title = () => {
    return (
        <TitleStyles>
            <div className='main'>
                <h1>The Top 5 Radar Detectors in 2025</h1>
                <p className='content'>
                    What's the best radar detector? With dozens on the market, choosing one that lives up to its promises can be daunting. The Gear Team experts pick the best you can buy.
                </p>
                <div className='top-1'>
                    <p className='hover'>Intro</p>
                    <p className='hover-1'>Top 5</p>
                    <p className='hover'>Benefits</p>
                </div>
                <div className='img-main'>
                    <img
                        src='	https://img.funnelish.com/4072/327928/1714633750-radar-detectors-1620340303.jpg'
                        alt=''
                        className='img-1'
                    />
                </div>
                <p className='content-1'>
                    Radar detectors have come a long way since the days of the original Fuzzbuster. Now, in 2025, law enforcement has stepped up its speed-detecting tech—but so have the good folks who manufacture radar detectors.
                </p>
                <p className='content-1'>
                    Radar detectors can save you from costly speeding tickets and higher auto insurance rates by alerting you to the existence of different police radar and laser signals. But today's radar detectors do far more than pick up signals from speed guns. They're GPS- and WiFi-enabled, to pinpoint locations and record more accurate data. They frequently incorporate sensors that identify the locations of red-light cameras. Some even do double duty as dash cams. But which one is right for you?
                </p>
                <div className='title-2'>
                    <div>
                        <p>How do Radar Detectors work?</p>
                        <div className='content-1'>
                            Modern radar detectors utilize a combination of radio frequency detection, WiFi, and GPS technologies to enhance their effectiveness. By detecting radio waves from police radar guns, these devices alert drivers to nearby speed enforcement.
                        </div>
                    </div>
                    <img
                        src='https://img.funnelish.com/4072/327928/1714634015-square-1454520824-radardetector.jpg'
                        alt=''
                    />
                </div>
            </div>
        </TitleStyles>
    );
};

export default Title;