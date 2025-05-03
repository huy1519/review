import React, { useState } from 'react';
import styled from 'styled-components';

const menuLink = [
    { url: "/terms-of-service", title: "Terms Of Service" },
    { url: "/privacy-policy", title: "Privacy Policy" },
    { url: "/contact", title: "Contact Us" },
];

const HeaderStyles = styled.header`
    border-bottom: 1px solid #f3f3f3;
    padding: 15px;
    position: relative;
    background-color: rgb(11, 36, 99);
    .logo {
        display: block;
        width: 200px;
        height: 50px;
        margin-bottom: 10px;
        @media (max-width: 768px) {
            display: block;
            border: none;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            padding: 0;
            width: 150px;
            height: 42px;
        }
    }

    .menu-item {
        display: block;
        line-height: 60px;
        text-decoration: none;
        font-size: 20px;
        font-weight: 400;
        padding: 0 5px;
        color: white;
    }

    .header-right {
        @media (max-width: 768px) {
            display: none;
        }
    }

    /* Thêm padding-bottom để đẩy nội dung xuống khi dropdown mở */
    padding-bottom: ${({ isDropdownOpen }) => (isDropdownOpen ? '200px' : '0')};

    .dropdown-container {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        z-index: 10;
        background-color: rgb(11, 36, 99);
    }

    .dropdown-menu {
        display: none;
        .menu-item {
            padding: 15px;
            @media (max-width: 768px) {
                font-size: 18px;
                padding: 5px 20px;
                color: white;
                background-color: rgb(11, 36, 99);
            }
        }
    }

    .dropdown-button {
        display: none;
        font-size: 24px;
        cursor: pointer;
        font-weight: 500;
        color: white;
        @media (max-width: 768px) {
            display: block;
        }
    }

    .dropdown-open {
        display: block;
    }
`;

const HeaderDeatil = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <HeaderStyles isDropdownOpen={isDropdownOpen}>
            <div className='container flex items-center justify-between'>
                <div className='header-main'>
                    <a href='/'>
                        <img
                            src='https://img.funnelish.com/4072/416759/1724406929-KathyLiving%20Logo%20%28White%29.png'
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
                <div className="dropdown-button" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                    ☰
                </div>
            </div>
            {isDropdownOpen && (
                <div className='dropdown-container'>
                    <div className={`dropdown-menu dropdown-open`}>
                        {menuLink.map(item => (
                            <li className='menu-item' key={item.title}>
                                <a href={item.url} className='menu-link'>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </div>
                </div>
            )}
        </HeaderStyles>
    );
};

export default HeaderDeatil;

