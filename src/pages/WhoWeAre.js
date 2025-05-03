import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const WhoWeAreStyles = styled.div`
`;

const WhoWeAre = () => {
    return (
        <WhoWeAreStyles>
            <Header></Header>
            <div className='max-w-[1140px] p-4 mx-auto mt-5 mb-10'>
                <h1 className='contact-content'>Who We Are?</h1>
                <p className='contact-detail'>
                    At Trusted Consumer Review, we take immense pride in introducing our exceptional team of experts—because without them, we wouldn’t have become a trusted leader in the review industry.
                </p>
                <p className='contact-detail'>
                    Our team is made up of seasoned professionals who bring years of experience and unmatched knowledge to the table, ensuring their recommendations are both insightful and reliable.
                </p>
                <p className='contact-detail'>
                    While we stand by our meticulous testing processes and thorough product evaluations, the real credit goes to our team. Their expertise spans diverse fields such as carpentry, technology, health and fitness, sound engineering, fashion, market analysis, and electronics.
                </p>
                <p className='contact-detail'>
                    With their in-depth understanding, they provide comprehensive insights into the latest products on the market, highlighting both the advantages and drawbacks so you can make confident, informed choices as a consumer.
                </p>
                <img
                    src='https://trustedconsumerreview.com/assets/images/trusted1.jpg'
                    alt=''
                    className='p-3'
                />
            </div>
            <Footer></Footer>
        </WhoWeAreStyles>
    );
};

export default WhoWeAre;