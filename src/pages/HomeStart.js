import React from 'react';
import styled from 'styled-components';

const HomeStartStyles = styled.div`
    max-width: 1072px;
    padding: 15px;
    margin: 40px auto;
    border-radius: 20px;
    background-color: #f3f3f3;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);

    .contact-content {
        font-size: 32px;
        padding: 0;
        margin: 0 0 10px;
        @media (max-width: 768px) {
            font-size: 21px;
            font-weight: 700;
        }
    }

    .info-item {
        font-size: 23px;
        text-align: center;
        margin-bottom: 6px;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }

    .content-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-top: 30px;
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
        }
    }

    .image {
        width: 438px;
        height: 291px;
        border-radius: 8px;

        @media (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }

    .text-content {
        font-size: 18px;
        color: black;
        margin-bottom: 4px;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
`

const HomeStart = () => {
    return (
        <HomeStartStyles>
            <h1 className='contact-content'>Real Reviews, By Real Experts</h1>
            <h5 className='mb-6 info-item'>
                The internet is filled with bad reviews, which leads to an erosion of trust. We started Trusted Consumer Review in order to form a 
                <span className='font-bold'> Single Point of Truth that consumers who shop online can trust.</span>
            </h5>
            <div className='content-wrapper'>
                <img
                    src='https://images.pexels.com/photos/7654188/pexels-photo-7654188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className='image'
                />
                <div>
                    <p className='text-content'>
                        Trusted Consumer Review is developed for consumers by consumers, with the purpose of bringing a clear and trustworthy orientation of the market. So that we can secure our health, finance and expectations.
                    </p>
                    <p className='text-content'>
                        Our vision is to chart the market so that the people can make rational and safe decisions and give the power back to the consumers. This is made possible thanks to our talented team of testers with in-depth knowledge in their respective field so that every product is tested with relevant competence.
                    </p>
                </div>
            </div>
        </HomeStartStyles>
    );
};

export default HomeStart;