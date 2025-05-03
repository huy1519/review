import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    .img {
        width: 100%;
        padding: 10px;
        margin-left: 20%;  
        margin-right: auto; 
        display: flex;  
        justify-content: flex-start; 
        align-items: center;  
    }

    .logo {
        width: 200px;
        height: 86px;
    }

    .info {
        background-color: rgb(46, 64, 140);
        padding: 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .date {
        font-size: 18px;
        margin-left: 20%;
    }

    .info-detail {
        font-size: 18px;
        font-weight: 500;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-items: center;
        gap: 50px;
        margin-right: 8%;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .img {
            margin-left: 0;
            margin-right: 0;
            justify-content: center;
            width: 100%;
            padding: 0;
        }

        .date {
            display: none;
        }

        .info {
            background-color: transparent;
            color: rgb(46, 64, 140);
            padding: 0;
        }

        .info-detail {
            gap: 20px;
            margin-right: 0;
            font-size: 14px;
            justify-content: center;
            text-align: center;
            width: 100%;
            margin-left: 10px;
            padding: 0;
        }

        /* Modal content full width on mobile */
        .modal-content {
            width: 100% !important; /* Chiếm toàn bộ chiều ngang trên điện thoại */
            max-width: none;  /* Bỏ giới hạn max-width */
            padding: 15px; /* Giảm padding để vừa màn hình hơn */
        }
    }

    .modal {
        display: ${(props) => (props.showModal ? 'flex' : 'none')}; 
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center; 
        align-items: center;  
        z-index: 1000;
        padding: 10px;
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        width: 60%;
        max-width: 800px;
        margin: auto;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        animation: slideDown 0.5s ease-out forwards;
    }

    @keyframes slideDown {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .modal-close {
        text-align: right;
        font-size: 18px;
        cursor: pointer;
    }

    .modal-content h2 {
        margin-top: 0;
    }

    .title {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 10px;
        @media (max-width: 768px) {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 10px;
        }
    }

    .detail {
        font-size: 20px;
        margin-bottom: 5px;
        @media (max-width: 768px) {
            font-size: 16px;
            margin-bottom: 5px;
            font-weight: 400;
        }
    }
`;



const HeaderDeatil = () => {
    const [showRankModal, setShowRankModal] = useState(false);
    const [showDisclosureModal, setShowDisclosureModal] = useState(false);

    const handleRankModalToggle = () => {
        setShowRankModal(!showRankModal);
    };

    const handleDisclosureModalToggle = () => {
        setShowDisclosureModal(!showDisclosureModal);
    };

    return (
        <HeaderStyles showModal={showRankModal || showDisclosureModal}>
            <div className="header-main">
                <div className="img">
                    <a href="/">
                        <img
                            src="https://img.funnelish.com/4072/416759/1724237360-Modern%20Initial%20KL%20Logo%20%28800%20x%20350%20px%29.png"
                            alt="Logo"
                            className="logo"
                        />
                    </a>
                </div>
                <div className="info">
                    <div className="date">
                        <p>Latest Update: January 20, 2025</p>
                    </div>
                    <div className="info-detail">
                        <p onClick={handleRankModalToggle} style={{ cursor: 'pointer' }}>
                            HOW WE RANK
                        </p>
                        <p onClick={handleDisclosureModalToggle} style={{ cursor: 'pointer' }}>
                            ADVERTISER DISCLOSURE
                        </p>
                    </div>
                </div>

                {/* Modal for How We Rank */}
                {showRankModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-close" onClick={handleRankModalToggle}>
                                X
                            </div>
                            <h2 className='title'>How We Rank</h2>
                            <p className='detail'>
                                The featured products that appear on this site are owned by companies from which we may receive compensation or have an ownership interest in. The compensation may impact how and where products appear on the site including the order in which they appear. Ranking and order of products on the site are subject to change and the site does not include all available products in their respective categories. Additional elements that impact our rankings may include the user device, operating system, location, the day of the week, time of day and cookie data or any self-assessed data we may generate on this site.
                            </p>
                        </div>
                    </div>
                )}

                {/* Modal for Advertiser Disclosure */}
                {showDisclosureModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-close" onClick={handleDisclosureModalToggle}>
                                X
                            </div>
                            <h2 className='title'>Advertiser Disclosure</h2>
                            <p className='detail'>
                                Our top ranked products are reviewed on the basis of our own views, knowledge and opinions. We do not review all products in a given category. All opinions expressed on this site are our own.
                            </p>
                            <p className='detail'>
                                We are able to provide you with our free comparisons due to referral fees we receive from a number of companies that are compared and reviewed on our website. We do have an ownership interest in certain categories with our top picks.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </HeaderStyles>
    );
};

export default HeaderDeatil;
