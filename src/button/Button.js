import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    cursor: pointer;
    padding: 20px;
    line-height: 1;
    color: white;
    background-color: blue;
    border-radius: 8px;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    border: 2px solid blue;
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
        background-color: white;
        color: blue;  
    }
    &:disabled{
        opacity: 0.5;
        pointer-events: none;
    }
    
`

const Button = ({type = "button", onClick = () => {}, ...props}) => {
    return (
        <ButtonStyles type={type} onClick={onClick} {...props}>
            Submit
        </ButtonStyles>
    );
};

export default Button;