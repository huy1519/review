import React from 'react';
import styled from 'styled-components';
import ScoreCircle from '../circle/Circle';
import ButtonPrice from '../button/ButtonPrice';

const ProductStyles = styled.div`
    max-width: 890px;
    padding: 15px;
    margin: 40px auto;
    border-radius: 20px;
    background-color: #f3f3f3;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);

    .inner {
        background-color: white;
        border-radius: 15px;
    }

    .title {
        border-top: 3px solid #4285f4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
    }

    .contact-content {
        font-size: 28px;
        padding: 0;
        margin: 0 0 10px;
        text-align: center;
        color: rgb(46, 64, 140);
        @media (max-width: 768px) {
            font-size: 28px;
            font-weight: 700;
            margin-top: 30px;
        }
    }

    .info-item {
        font-size: 23px;
        text-align: center;
        margin-bottom: 6px;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }

    .content-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-top: 30px;
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
        }
    }

    .image-title {
        width: 120px;
        height: 120px;
        border-radius: 8px;
        @media (max-width: 768px) {
            display: none; /* Ẩn hình ảnh trên điện thoại */
        }
    }

    .review {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        flex-wrap: wrap;
        text-align: center;
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }

    .image-review {
        width: 200px;
        height: 200px;
        @media (max-width: 768px) {
            width: 150px;
            height: 150px;
            margin-bottom: 20px;
        }
    }

    .total-ranking-wrapper {
        text-align: center;
        margin-top: 10px;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .product-title {
        font-size: 18px;
        font-weight: 600;
        margin-top: 30px;
    }

    .product-rank {
        font-size: 72px;
        font-weight: 700;
    }

    .pros-cons {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        gap: 10px;
        margin-left: 10%;
        @media (max-width: 768px) {
            flex-direction: column; /* Sắp xếp các mục theo chiều dọc trên điện thoại */
            align-items: flex-start; /* Căn lề bên trái cho các mục */
            margin-left: 10px;
        }
    }

    .product-title-1 {
        font-size: 30px;
        font-weight: 600;
    }

    .pros-cons div {
        width: 100%;
    }

    .pros-cons div p {
        margin: 8px 0;
        font-size: 18px;
    }

    @media (max-width: 768px) {
        .pros-cons div p {
            font-size: 16px; /* Cỡ chữ nhỏ hơn khi trên điện thoại */
        }
    }

    .green-icon span {
        color: green;
        margin-right: 10px;
    }

    .red-icon span {
        color: red;
        margin-right: 10px;
    }
    
    .content {
        padding: 20px;
        @media (max-width: 768px) {
            padding: 0px 20px;
        }
    }

    .image {
        border-radius: 8px;
        width: 250px;
        margin: 10px auto 0;
        display: block;
        @media (max-width: 768px) {
            max-width: 80%;  /* Chỉnh ảnh nhỏ hơn trên điện thoại */
            height: auto;    /* Giữ tỷ lệ hình ảnh */
            margin: 20px auto;  /* Căn giữa ảnh */
        }
    }

    .text-content {
        font-size: 18px;
        color: black;
        margin-bottom: 10px;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }

    /* Ẩn ảnh thứ hai chỉ trên điện thoại */
    @media (max-width: 768px) {
        .img-hidden {
            display: none;
        }
    }
`

const Product = () => {
    return (
        <ProductStyles>
            <div>
                <div className='inner'>
                    <div className='title'>
                        <h1 className='contact-content'>2. Radenso Pro M</h1>
                        <img
                            src='https://img.funnelish.com/4072/416759/1724324528-KL%20%232.png'
                            alt=''
                            className='image-title'
                        />
                    </div>
                    <div className='review'>
                        <img
                            src='https://img.funnelish.com/4072/327928/1714639509-1675956345-g450RPM-o_other0.jpg'
                            alt=''
                            className='image-review'
                        />
                        <div className='total-ranking-wrapper'>
                            <ScoreCircle score={8.7}></ScoreCircle>
                            <p className='product-title'>TOTAL RANKING</p>
                        </div>
                        <div>
                            <p className='product-rank'>B</p>
                            <p className='product-title'>OVERALL GRADE</p>
                        </div>
                    </div>
                </div>
                <div className='mt-2 inner'>
                    <div className='pros-cons'>
                        <div>
                            <h2 className='product-title-1'>PROS</h2>
                            <div>
                                <p className="green-icon">
                                    <span>✔</span> High sensitivity.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Multiple detection modes.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> GPS available.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Easy to set up and install.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Strong frontal range.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Minimizes number of false alerts.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className='product-title-1'>CONS</h2>
                            <div>
                                <p className="red-icon">
                                    <span>✘</span> Weak rear coverage.
                                </p>
                                <p className="red-icon">
                                    <span>✘</span> On the more expensive side.
                                </p>
                                <p className="red-icon">
                                    <span>✘</span> Bad value for cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-2 mb-5 inner'>
                    <div className='content-wrapper'>
                        <div className='flex flex-col items-center gap-y-1'>
                            <div className='w-[410px] img-hidden'>
                                <img
                                    src='https://m.media-amazon.com/images/I/71Zj09kj3GL.jpg'
                                    alt=''
                                    className='image'
                                />
                            </div>
                            <div className='w-[410px]'>
                                <img
                                    src='https://m.media-amazon.com/images/I/61hi1RNb4lL.jpg'
                                    alt=''
                                    className='image'
                                />
                            </div>
                        </div>
                        <div className='content'>
                            <h2 className='mb-2 product-title-1'>Conclusion</h2>
                            <p className='text-content'>
                                The Pro M is <b>significantly quieter than the others,</b> but we trust it to pick up police radar. In our false-filtering test, the Radenso rang out just twice compared with six and seven times for the Escort and Valentine, respectively. All three detectors can be programmed to ignore whole radar bands, but only the Radenso allows the user to adjust the strength of filtering for each type. That lets you reduce sensitivity to, say, the rarely used X band without muting it entirely.
                            </p>
                            <p className='text-content'>
                                The Radenso has <b>strong frontal range,</b> and it matched the Escort in the 90-degree corner test. But its rear coverage is a relative weak point. The Pro M's tiny size is a boon for driver visibility. Its lowest-in-test price is another selling point, but the Radenso does feel cheaper than the others. You adjust its angle on the windshield by bending the metal bracket it mounts to, and there's no app to assist with adjusting settings. Pick the Pro M if you want a reliable detector that minimizes the number of false alerts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ButtonPrice link="https://www.amazon.com/dp/B077KJPP7V/ref=cm_sw_su_dp"></ButtonPrice>
                </div>
            </div>
            <div>
                <div className='inner'>
                    <div className='title'>
                        <h1 className='contact-content'>2. Radenso Pro M</h1>
                        <img
                            src='https://img.funnelish.com/4072/416759/1724324528-KL%20%232.png'
                            alt=''
                            className='image-title'
                        />
                    </div>
                    <div className='review'>
                        <img
                            src='https://img.funnelish.com/4072/327928/1714639509-1675956345-g450RPM-o_other0.jpg'
                            alt=''
                            className='image-review'
                        />
                        <div className='total-ranking-wrapper'>
                            <ScoreCircle score={8.7}></ScoreCircle>
                            <p className='product-title'>TOTAL RANKING</p>
                        </div>
                        <div>
                            <p className='product-rank'>B</p>
                            <p className='product-title'>OVERALL GRADE</p>
                        </div>
                    </div>
                </div>
                <div className='mt-2 inner'>
                    <div className='pros-cons'>
                        <div>
                            <h2 className='product-title-1'>PROS</h2>
                            <div>
                                <p className="green-icon">
                                    <span>✔</span> High sensitivity.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Multiple detection modes.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> GPS available.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Easy to set up and install.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Strong frontal range.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Minimizes number of false alerts.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className='product-title-1'>CONS</h2>
                            <div>
                                <p className="red-icon">
                                    <span>✘</span> Weak rear coverage.
                                </p>
                                <p className="red-icon">
                                    <span>✘</span> On the more expensive side.
                                </p>
                                <p className="red-icon">
                                    <span>✘</span> Bad value for cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-2 mb-5 inner'>
                    <div className='content-wrapper'>
                        <div className='flex flex-col items-center gap-y-1'>
                            <div className='w-[410px] img-hidden'>
                                <img
                                    src='https://m.media-amazon.com/images/I/71Zj09kj3GL.jpg'
                                    alt=''
                                    className='image'
                                />
                            </div>
                            <div className='w-[410px]'>
                                <img
                                    src='https://m.media-amazon.com/images/I/61hi1RNb4lL.jpg'
                                    alt=''
                                    className='image'
                                />
                            </div>
                        </div>
                        <div className='content'>
                            <h2 className='mb-2 product-title-1'>Conclusion</h2>
                            <p className='text-content'>
                                The Pro M is <b>significantly quieter than the others,</b> but we trust it to pick up police radar. In our false-filtering test, the Radenso rang out just twice compared with six and seven times for the Escort and Valentine, respectively. All three detectors can be programmed to ignore whole radar bands, but only the Radenso allows the user to adjust the strength of filtering for each type. That lets you reduce sensitivity to, say, the rarely used X band without muting it entirely.
                            </p>
                            <p className='text-content'>
                                The Radenso has <b>strong frontal range,</b> and it matched the Escort in the 90-degree corner test. But its rear coverage is a relative weak point. The Pro M's tiny size is a boon for driver visibility. Its lowest-in-test price is another selling point, but the Radenso does feel cheaper than the others. You adjust its angle on the windshield by bending the metal bracket it mounts to, and there's no app to assist with adjusting settings. Pick the Pro M if you want a reliable detector that minimizes the number of false alerts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ButtonPrice link="https://www.amazon.com/dp/B077KJPP7V/ref=cm_sw_su_dp"></ButtonPrice>
                </div>
            </div>
            <div>
                <div className='inner'>
                    <div className='title'>
                        <h1 className='contact-content'>2. Radenso Pro M</h1>
                        <img
                            src='https://img.funnelish.com/4072/416759/1724324528-KL%20%232.png'
                            alt=''
                            className='image-title'
                        />
                    </div>
                    <div className='review'>
                        <img
                            src='https://img.funnelish.com/4072/327928/1714639509-1675956345-g450RPM-o_other0.jpg'
                            alt=''
                            className='image-review'
                        />
                        <div className='total-ranking-wrapper'>
                            <ScoreCircle score={8.7}></ScoreCircle>
                            <p className='product-title'>TOTAL RANKING</p>
                        </div>
                        <div>
                            <p className='product-rank'>B</p>
                            <p className='product-title'>OVERALL GRADE</p>
                        </div>
                    </div>
                </div>
                <div className='mt-2 inner'>
                    <div className='pros-cons'>
                        <div>
                            <h2 className='product-title-1'>PROS</h2>
                            <div>
                                <p className="green-icon">
                                    <span>✔</span> High sensitivity.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Multiple detection modes.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> GPS available.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Easy to set up and install.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Strong frontal range.
                                </p>
                                <p className="green-icon">
                                    <span>✔</span> Minimizes number of false alerts.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className='product-title-1'>CONS</h2>
                            <div>
                                <p className="red-icon">
                                    <span>✘</span> Weak rear coverage.
                                </p>
                                <p className="red-icon">
                                    <span>✘</span> On the more expensive side.
                                </p>
                                <p className="red-icon">
                                    <span>✘</span> Bad value for cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-2 mb-5 inner'>
                    <div className='content-wrapper'>
                        <div className='flex flex-col items-center gap-y-1'>
                            <div className='w-[410px] img-hidden'>
                                <img
                                    src='https://m.media-amazon.com/images/I/71Zj09kj3GL.jpg'
                                    alt=''
                                    className='image'
                                />
                            </div>
                            <div className='w-[410px]'>
                                <img
                                    src='https://m.media-amazon.com/images/I/61hi1RNb4lL.jpg'
                                    alt=''
                                    className='image'
                                />
                            </div>
                        </div>
                        <div className='content'>
                            <h2 className='mb-2 product-title-1'>Conclusion</h2>
                            <p className='text-content'>
                                The Pro M is <b>significantly quieter than the others,</b> but we trust it to pick up police radar. In our false-filtering test, the Radenso rang out just twice compared with six and seven times for the Escort and Valentine, respectively. All three detectors can be programmed to ignore whole radar bands, but only the Radenso allows the user to adjust the strength of filtering for each type. That lets you reduce sensitivity to, say, the rarely used X band without muting it entirely.
                            </p>
                            <p className='text-content'>
                                The Radenso has <b>strong frontal range,</b> and it matched the Escort in the 90-degree corner test. But its rear coverage is a relative weak point. The Pro M's tiny size is a boon for driver visibility. Its lowest-in-test price is another selling point, but the Radenso does feel cheaper than the others. You adjust its angle on the windshield by bending the metal bracket it mounts to, and there's no app to assist with adjusting settings. Pick the Pro M if you want a reliable detector that minimizes the number of false alerts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ButtonPrice link="https://www.amazon.com/dp/B077KJPP7V/ref=cm_sw_su_dp"></ButtonPrice>
                </div>
            </div>
        </ProductStyles>
    );
};

export default Product;
