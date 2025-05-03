import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    cursor: pointer;
    padding: 15px;
    line-height: 1;
    color: white;
    background-color: rgb(235, 87, 87);
    border-radius: 30px;
    font-weight: 600;
    font-size: 22px;
    width: 300px;
    border: 2px solid rgb(235, 87, 87);
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
        background-color: white;
        color: rgb(235, 87, 87);  
    }
    &:disabled{
        opacity: 0.5;
        pointer-events: none;
    }
`;

const ButtonPrice = ({ type = "button", link = "", ...props }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank"); // Mở trang web trong tab mới
        }
    };

    return (
        <ButtonStyles type={type} onClick={handleClick} {...props}>
            CHECK BEST PRICE »
        </ButtonStyles>
    );
};

export default ButtonPrice;
