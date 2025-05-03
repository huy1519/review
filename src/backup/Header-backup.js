import React from 'react';
import styled from 'styled-components';
const menuLink = [
    {
        url: "/#",
        title: "Who We Are?"
    },
    {
        url: "/#",
        title: "Get In Touch"
    },
    {
        url: "/#",
        title: "Terms Of Use"
    },
    {
        url: "/#",
        title: "Privacy Policy"
    }
];

const HeaderStyles = styled.header`
    border-bottom:  1px solid #f3f3f3;
    padding: 15px;
    .logo{
        display: block;
        border: 3px solid black;
        border-radius: 8px;
    }
     .menu-item{
        display: block;
        line-height: 60px;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        padding: 0 5px;
        color: black;
     }
`;


const Header = () => {
    return (
        <HeaderStyles>
            <div className='container flex items-center justify-between'>
                <div className='header-main'>
                    <a href='/'>
                        <img
                            src='https://trustedconsumerreview.com/assets/images/logo-main.png'
                            alt=''
                            className='logo'
                        />
                    </a>
                </div>
                <div className='header-right'>
                    <ul className='flex items-center gap-x-5'>
                        {menuLink.map(item => (
                          <li className='menu-item' key={item.title}>
                            <a href={item.url} className='menu-link'>
                                {item.title}
                            </a>
                          </li>  
                        ))}
                    </ul>
                </div>
            </div>
        </HeaderStyles>
    );
};

export default Header;