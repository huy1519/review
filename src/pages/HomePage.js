import styled from 'styled-components';
import Footer from '../layout/Footer';
import Product from './Product';
import WhatToAvoid from './detail/WhatToAvoid';
import WhatToLook from './detail/WhatToLook';
import RadarDetectors from './detail/RadarDetectors';
import Title from './detail/Title';
import Header from '../layout/Header';
import React from 'react';
import ProgressBar from './PageScrollProgressBar/ProgressBar';

const HomePageStyles = styled.div`
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    .item {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item-detail {
        width: 890px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 80%; /* Giữ vị trí ngay bên dưới banner */
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0 20px;
        z-index: 2; /* Đảm bảo item-detail nằm trên banner */
        
        @media (max-width: 768px) {
            width: 90%; /* Điều chỉnh cho màn hình nhỏ */
        }
    }

    .badge-img {
        width: 150px;
        @media (max-width: 768px) {
            width: 80px;
        }
    }
    .top {
        width: 890px;
        background-color: rgb(46, 64, 140);
        color: white;
        text-shadow: transparent 0px 0px 0px;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
        h1 {
            text-align: center;
            font-size: 30px;
            font-weight: bolder;
            @media (max-width: 768px) {
                font-size: 22px;
            }
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .back-to-top-container {
        width: 100%;
        height: 100px;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 10;
        @media (max-width: 768px) {
            height: 80px;
            width: 95%;
        }
    }

    .back-to-top-wrapper {
        background-color: rgb(46, 64, 140);
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Hiệu ứng bóng đổ cho nút */
        margin: 10px;
        max-width: 500px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .back-to-top {
        background-color: transparent;
        color: white;
        font-size: 30px;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #3f599c;
        }
        @media (max-width: 768px) {
            font-size: 24px;
        }
    }

    .progress-bar-container {
        position: fixed; /* Giữ cố định trong khi cuộn */
        top: 220px; /* Ban đầu cách 220px */
        left: 0; /* Đảm bảo nó ở vị trí trái */
        right: 0; /* Đảm bảo nó ở vị trí phải */
        z-index: 5; /* Đảm bảo không bị đè lên các phần tử khác */
        background-color: white; /* Màu nền trắng để dễ nhìn */
        transition: top 0.3s ease; /* Thêm hiệu ứng chuyển động mượt mà khi thay đổi top */
    }

    @media (max-width: 768px) {
        .back-to-top-wrapper {
            padding: 8px 16px;
        }
        .back-to-top {
            font-size: 20px;
        }
    }
`;

const HomePage = () => {
    // Hàm cuộn về đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Hiển thị cả div và nút "Back to Top" khi cuộn xuống
    const handleScroll = () => {
        const container = document.getElementById('backToTopContainer');
        const button = document.getElementById('backToTopButton');

        if (window.scrollY > 500) { // Hiển thị khi cuộn 500px
            container.style.display = 'flex';
            button.style.display = 'block';
        } else {
            container.style.display = 'none';
            button.style.display = 'none';
        }
    };

    // Lắng nghe sự kiện cuộn trang
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HomePageStyles>
            <section className='h-[700px]'>
                <Header />
                <Title />
                <RadarDetectors />
                <WhatToLook />
                <WhatToAvoid />
                <div className='top'>
                    <h1>The Top 5 Radar Detectors in 2025</h1>
                </div>
                <Product />
                     <div className="progress-bar-container">
                    <ProgressBar />
                </div>
                <Footer />
            </section>

            {/* Div chứa nút "Back to Top" */}
            <div 
                id="backToTopContainer" 
                className="back-to-top-container" 
                style={{ display: 'none' }} // Ban đầu ẩn div
            >
                <div className="back-to-top-wrapper">
                    <button
                        id="backToTopButton"
                        className="back-to-top"
                        onClick={scrollToTop}
                    >
                        Back to Top
                    </button>
                </div>
            </div>
        </HomePageStyles>
    );
};

export default HomePage;
