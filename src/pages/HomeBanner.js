import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


const menuLink = [
    { url: "/whoweare", title: "> TERMS OF SERVICE" },
    { url: "/contact", title: "> PRIVACY POLICY" },
    { url: "/terms-of-use", title: "> CONTACT US" },
    { url: "/privacy-policy", title: "> DO NOT SELL OR SHARE MY PERSONAL INFORMATION" }
];

const HomeBannerStyles = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    position: relative;

    .slider {
        width: 100%;
        height: 850px;
        .slick-slide img {
            width: 100%;
            height: 650px;
            object-fit: cover;
            border-radius: 20px;
        }
    }
    .content {
        width: 550px;
        height: 180px;
        background-color: rgba(0, 0, 0, .2);
        border-radius: 30px;
        padding: 15px;
        color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
            background-color: rgba(0, 0, 0, 0);;
        }
    }

    .logo {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;
        scale: 1.2;
        @media (max-width: 768px) {
            scale: 0.8;
        }
    }

    .header-right {
        color: white;
        font-size: 18px;
        padding: 10px 15px 13px;
        @media (max-width: 768px) {
            display: none;
        }
    }

    .menu-item {
        transition: color 0.3s ease, transform 0.3s ease;
        &:hover {
            color: blue;
            transform: scale(1.1);
        }
    }

    .menu-icon {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 24px;
        color: white;
        cursor: pointer;
        z-index: 1001; /* Đảm bảo nằm trên cùng */
        @media (min-width: 769px) {
            display: none; /* Ẩn trên máy tính */
        }
    }

    .mobile-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        top: 60px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.9);
        border-radius: 10px;
        padding: 10px;
        color: white;
        z-index: 1000;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .menu-item {
            padding: 10px 15px;
        }
    }
`;

const HomeBanner = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true, // Hiệu ứng mờ dần
    };
    return (
        <HomeBannerStyles>
            <Slider {...sliderSettings} className="slider">
                <div>
                    <img src="https://images.pexels.com/photos/7888983/pexels-photo-7888983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/7698800/pexels-photo-7698800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/8145352/pexels-photo-8145352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 3" />
                </div>
            </Slider>

            {/* Mobile Menu Icon (Đặt bên ngoài ảnh) */}
            <div className='menu-icon' onClick={toggleMobileMenu}>
                ☰ {/* Icon for menu */}
            </div>

            {/* Nội dung chính */}
            <div className='flex flex-col content'>
                <img
                    src='https://trustedconsumerreview.com/assets/images/logo-white-main.png'
                    alt=''
                    className='logo'
                />
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

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='mobile-menu'>
                    <ul>
                        {menuLink.map(item => (
                            <li className='menu-item' key={item.title}>
                                <a href={item.url} className='menu-link'>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </HomeBannerStyles>
    );
};

export default HomeBanner;
