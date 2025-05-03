import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContactStyles = styled.div`
    max-width: 1072px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 40px;
    background-color: #015fdb;
    border-radius: 20px;
    color: white;
    margin-bottom: 40px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    h1{
        font-size: 44px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    p{
        font-size: 22px;
        margin-bottom: 20px;
    }
    .button {
        display: block;
        width: 360px;
        margin: 30px auto 0;
        font-size: 22px;
        color: white;
        border:  3px solid #fff;
        border-radius: 10px;
        padding: 15px 10px;
        &:hover {
            background-color: #fff;
            color: #015fdb;
        }
    }
    @media (max-width: 768px) {
        padding: 20px;
        h1 {
            font-size: 28px;
            margin-bottom: 15px;
        }

        p {
            font-size: 18px;
            margin-bottom: 15px;
        }

        .button {
            width: 100%;
            font-size: 18px;
            padding: 12px;
        }
    }
`

const HomeContact = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact");
    }
    return (
        <HomeContactStyles>
            <h1>WANT US TO REVIEW SOMETHING?</h1>
            <p>
                Trusted Consumer Review is nothing without our community. Every day we get hundreds of emails sent to us with requests to review certain products. This feedback is the lifeblood of our website. Would you like more information about any product available online? Would you like us to write a review on anything from laptops to gardenhoses? Just wanna ask questions about a specific product? Send us a message!
            </p>
            <button className='button' onClick={handleClick}>
                Contact Us Here
            </button>
        </HomeContactStyles>
    );
};

export default HomeContact;