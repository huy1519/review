import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const itemMeet = [
    {
        image: "https://trustedconsumerreview.com/assets/images/person1.jpg",
        name: "Sylvia Fletcher",
        description:
            "Since she got her masters in Journalism from Rutgers University, Sylvia has gotten 10 years of experience in interior design journalism. She has worked for several magazines related to home decor and has a keen eye for both design and quality of product. She’s been with us for 2 years reviewing everything from furniture to garden tools to fashion products."
    },
    {
        image: "https://trustedconsumerreview.com/assets/images/person2.jpg",
        name: "Mark Flack",
        description:
            "Mark Flack is a certified tech genius. He’s worked in startups, for different tech blogs and was only 12 years old when he assembled his first computer. As our society grows more and more digital, we’re lucky to have an expert like Mark on our team."
    },
    {
        image: "https://trustedconsumerreview.com/assets/images/person3.jpg",
        name: "Daniel Hunt",
        description:
            "Daniel comes from a medical background having. He has a passion for health tech &amp; innovation. He follows all the latest trends where Silicon Valley meets Healthcare. Growing up in California he likes to go surfing whenever the waves are firing!"
    },
    {
        image: "https://trustedconsumerreview.com/assets/images/person4.jpg",
        name: "Jennifer Ladd",
        description:
            "Jennifer is a chef by trade, and also a dietitian. Being an expert in everything food &amp; fitness, we rely on Jennifer to make sure our lunch boxes at the office are as healthy as they can be. She grew up in New Jersey but has since relocated to Boulder, Colorado as she loves the mountains &amp; nature."
    },
]

const SliceStyles = styled.div`
    max-width: 1072px;
    padding: 15px;
    margin: 40px auto;
    border-radius: 20px;
    overflow: hidden;
    @media (max-width: 768px) {
            margin: 10px auto;
            padding: 5px;
        }
    .item-contain{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        @media (max-width: 768px) {
                gap: 8px;
            }
    }
    h1{
        @media (max-width: 768px) {
                font-size: 26px;
            }
    }
    .item-meet{
        width: 555px;
        height: 700px;
        justify-items: center;
        text-align: center;
        padding: 15px 0 40px;
        background-color: #fff;
        border-radius: 30px;
        margin-bottom: 30px;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
        @media (max-width: 768px) {
                height: 780px;
                margin-bottom: 15px;
            }
        img{
            max-width: 200px;
            border-radius: 0 30px 0 30px;
            margin: 30px 0;
            @media (max-width: 768px) {
                max-width: 250px;
                padding: 10px;
                margin: 10px 5px;
            }
        }
        h3{
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 30px;
            position: relative;
            margin-top: 15px;
            text-transform: uppercase;
            @media (max-width: 768px) {
                margin: 10px 5px;
            }
        }
        p{
            font-size: 20px;
            font-weight: 400;
            margin: 0 20px;
            padding: 10px;
            color: black;
            @media (max-width: 768px) {
                font-size: 18px;
                padding: 5px;
                margin: 0 10px;
            }
        }
    }
    
    .arrow-button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        padding: 10px;
        border: none;
        background: none;
        width: 55px;
        height: 55px;
        border-radius: 100%;
        background-color: #015fdb;
        color: #fff;
        @media (max-width: 768px) {
            width: 40px;
            height: 40px;
            font-size: 15px;
        }
    }
`;

const Slice = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setVisibleIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % itemMeet.length);
    };
    
    const handlePrev = () => {
        setVisibleIndex((prevIndex) => (prevIndex - (isMobile ? 1 : 2) + itemMeet.length) % itemMeet.length);
    };

    const visibleItems = itemMeet.slice(visibleIndex, visibleIndex + (isMobile ? 1 : 2));

    return (
        <SliceStyles>
            <div className='w-[125px] h-[7px] bg-black mb-5'></div>
            <h1 className='contact-content'>Meet Our Experts</h1>
            <div className='item-contain'>
                <button onClick={handlePrev} className='arrow-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                {visibleItems.map((expert, index) => (
                    <div key={index} className="item-meet">
                        <img src={expert.image} alt={expert.name} />
                        <h3>{expert.name}</h3>
                        <div className="w-[80px] h-[5px] bg-gray-300 mb-5"></div>
                        <p>{expert.description}</p>
                    </div>
                ))}
                <button onClick={handleNext} className='arrow-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </SliceStyles>
    );
};

export default Slice;
