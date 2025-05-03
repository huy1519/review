import React, { useState } from 'react';
import styled from 'styled-components';

const menuLink = [
    { url: "/terms-of-service", title: "> TERMS OF SERVICE" },
    { url: "/privacy-policy", title: "> PRIVACY POLICY" },
    { url: "/contact", title: "CONTACT US" },
    { url: "/personal-information-request", title: "DO NOT SELL OR SHARE MY PERSONAL INFORMATION" }
];

const FooterStyles = styled.footer`
    position: relative; /* Đặt position relative cho footer */
    
    .menu-item {
        display: block;
        line-height: 20px;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        padding: 5px 20px 8px;
        margin: 0px 20px;
        color: black;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: black; /* Màu của gạch chân */
            transition: width 0.3s ease-in-out; /* Thời gian và kiểu chuyển động */
        }
        &:hover::after {
            width: 100%; /* Khi hover, gạch chân sẽ kéo dài đến 100% */
        }
            @media (max-width: 768px) {
                border-bottom: 1px solid black;
                text-align: center;
                padding: 15px 10px;
                font-size: 16px;
            }
    }

    .dropdown-button {
        display: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        padding: 10px;
        color: black;
        text-align: start;

        /* Hiển thị nút dropdown trên điện thoại */
        @media (max-width: 768px) {
            display: block;
            width: 100%;
        }
    }

    /* Danh sách ul dropdown mặc định bị ẩn */
    .dropdown-menu {
        display: flex; /* Ẩn danh sách mặc định */
        border-top: 1px solid #ddd;
        width: 100%;
        margin: 0; /* Đảm bảo không có khoảng cách bên ngoài */
        padding: 0; /* Đảm bảo không có padding bên ngoài */
        justify-content: center;
        margin-top: 20px;
        @media (max-width: 768px) {
            display: none; /* Ẩn danh sách ul trên điện thoại */
        }
    }

    /* Hiển thị ul khi trạng thái dropdown được mở */
    .dropdown-open {
        display: flex; /* Hiển thị flex khi mở */
        flex-direction: column;
    }

    .bottom-review {
        font-size: 15px;
        padding: 15px;
        max-width: 1140px;
        line-height: 1.6;
        margin: 0 auto;
        text-align: center;
        word-wrap: break-word;
    }
`;

const Footer = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <FooterStyles>
            <div>
                <div className='flex flex-col items-center mb-5 bg-gray-200'>
                    {/* Nút dropdown trên điện thoại */}
                    <div
                        className='dropdown-button'
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                    >
                        ☰ Menu
                    </div>

                    {/* Danh sách ul chuyển thành dropdown menu */}
                    <ul className={`dropdown-menu ${isDropdownOpen ? "dropdown-open" : ""}`}>
                        {menuLink.map((item) => (
                            <li className='menu-item' key={item.title}>
                                <a href={item.url} className='menu-link'>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className='flex items-center justify-center mt-5 ml-4 mr-4'>
                        <a href='/'>
                            <img
                                src='https://trustedconsumerreview.com/assets/images/logo-main.png'
                                alt='Logo'
                                className='logo'
                            />
                        </a>
                    </div>
                    <div className='mt-3 mb-3'>
                        <a href='https://www.dmca.com/Protection/Status.aspx?ID=ec84d207-d130-410d-94f6-a905a2b19703&refurl=https://trustedconsumerreview.com/get-in-touch/'>
                            <img
                                src='https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=ec84d207-d130-410d-94f6-a905a2b19703'
                                alt='DMCA Badge'
                            />
                        </a>
                    </div>
                    <p className='mt-5 bottom-review'>
                        © All Rights Reserved! Trusted Consumer Review 2021 - 2024
                    </p>
                    <p className='mt-5 mb-5 bottom-review'>
                        As an Amazon Associate & Affiliate of other partners Trusted Consumer
                        Review may earn a commission from qualifying purchases made as a result of
                        our reviews.
                    </p>
                </div>
                <div className='bottom-review'>
                    <p>
                        This site is a free online resource that strives to offer helpful content
                        and comparison features to its visitors. Please be advised that the
                        operator of this site accepts advertising compensation from companies that
                        appear on the site, and such compensation impacts the location and order in
                        which the companies (and/or their products) are presented, and in some
                        cases may also impact the rating that is assigned to them. To the extent
                        that ratings appear on this site, such rating is determined by our
                        subjective opinion and based on a methodology that aggregates our analysis
                        of brand market share and reputation, each brand’s conversion rates,
                        compensation paid to us and general consumer interest. Company listings on
                        this page DO NOT imply endorsement. Except as expressly set forth in our
                        <a href='https://trustedconsumerreview.com/terms-of-use/' className='link'> Terms of Use, </a> 
                        all representations and warranties regarding the information
                        presented on this page are disclaimed. The information, including pricing,
                        which appears on this site is subject to change at any time.
                    </p>
                </div>
            </div>
        </FooterStyles>
    );
};

export default Footer;
