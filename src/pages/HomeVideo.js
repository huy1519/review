import React from 'react';
import styled from 'styled-components';

const HomeVideoStyles = styled.div`
    width: 100%;
    background-color: #015fdb;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    .info-1 {
        max-width: 1072px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 40px;
        color: white;
        position: relative;
        padding: 0 15px;
    }
    .video{
        width: 850px;
        height: 480px;
        @media (max-width: 768px) {
            max-width: 850px;
            width: 100%;
            height: auto;
        }
    }
    p{
        color: white;
        font-size: 20px;
        margin-bottom: 15px;
        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        .absolute {
            display: none;
        }
    }
    .img-2{
        display: block;
        height: auto;
        max-width: 100%;
        margin-right: 1.25rem;
        margin-left: auto;
        margin-right: 30px;
        @media (max-width: 768px) {
            display: none;
        }
    }
`

const HomeVideo = () => {
    return (
        <HomeVideoStyles>
            <div className='info-1'>
                <div className='w-[125px] h-[7px] bg-white mb-5'></div>
                <h1 className='text-white contact-content'>How We Review Products</h1>
                <div className='flex items-center justify-center mb-10'>
                    <img
                        src='https://trustedconsumerreview.com/assets/images/arrow-left.png'
                        alt=''
                        className='absolute block top-[120px] left-0'
                    />
                    <video
                        className="video"
                        controls
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src="/video/Sime Darby Berhad Corporate Video 2023.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <img
                        src='https://trustedconsumerreview.com/assets/images/arrow-right.png'
                        alt=''
                        className='absolute block top-[370px] right-0'
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <img
                        src='https://trustedconsumerreview.com/assets/images/pen.png'
                        alt=''
                        className='img-2'
                    />
                    <div className='mb-8'>
                        <p>
                            We are proud of our method of testing that includes thorough inspection and stress testing all aspects. We make sure that the products we reveal here meet our testers high expectations on safety, value, delivery process, longevity, service and not least the overall feel of the product.
                        </p>
                        <p>
                            Meaning that we only provide reviews on products that meet our standard.
                        </p>
                        <p>
                            Since the online market offers an infinite array of products, spanning from duds, to the most excellent quality. It’s hard to know how to judge their claims.
                        </p>
                        <p>
                            Our seal of approval works as a filter that only presents the top tier alternatives. In order to guarantee the quality of our reviews, we follow a systematic method for each test.
                        </p>
                        <p>
                            Our testing and filtering system first controles the overall safety and investigates any possible risks. Then we continue testing the quality and user experience against the price and finally compare these results against competitors. Resulting in true value for money that is reasonable for any budget.
                        </p>
                        <p>
                            Because this is built by consumers, for consumers, therefore the people, we provide consumers with tools and information to become informed consumers who will have the power to steer the market.
                        </p>
                        <p>
                            Therefore we also research each product to see what the general opinion is and how the respective company and manufacturer behaves and operates.
                        </p>
                        <p>
                            We have assembled a competent and passionate team that has many years of experience in their respective fields. We all strive to find the best products on the market to give the consumers an advantage on the market. So when you choose something on this site, you can rest assured that we share your interest to browse freely among products that offer safe and true value.
                        </p>
                    </div>
                </div>
            </div>
        </HomeVideoStyles>
    );
};

export default HomeVideo;