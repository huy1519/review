import React from 'react';
import styled from 'styled-components';

const menuLink = [
    { url: "/terms-of-service", title: "TERMS OF SERVICE" },
    { url: "/privacy-policy", title: "PRIVACY POLICY" },
    { url: "/contact", title: "CONTACT US" },
    { url: "/personal-information-request", title: "DO NOT SELL OR SHARE MY PERSONAL INFORMATION" }
];

const FooterStyles = styled.footer`
    position: relative; /* Đặt position relative cho footer */
    background-color: rgb(11, 36, 99);
    padding: 20px 10px;
    color: white;
    .menu-item {
        display: block;
        line-height: 20px;
        text-decoration: none;
        font-size: 20px;
        font-weight: 600;
        padding: 5px 20px 8px;
        margin: 0px 20px;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: white; /* Màu của gạch chân */
            transition: width 0.3s ease-in-out; /* Thời gian và kiểu chuyển động */
        }
        &:hover::after {
            width: 100%; /* Khi hover, gạch chân sẽ kéo dài đến 100% */
        }
            @media (max-width: 768px) {
                text-align: center;
                padding: 15px 10px;
                font-size: 18px;
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
        width: 100%;
        margin: 0; /* Đảm bảo không có khoảng cách bên ngoài */
        padding: 0; /* Đảm bảo không có padding bên ngoài */
        justify-content: center;
        margin-top: 20px;
        @media (max-width: 768px) {
            display: flex; /* Hiển thị flex khi mở */
            flex-direction: column;
        }
    }

    .bottom-review {
        font-size: 18px;
        padding: 15px;
        max-width: 1140px;
        line-height: 1.6;
        margin: 0 auto;
        text-align: center;
        word-wrap: break-word;
        @media (max-width: 768px) {
            font-size: 15px;
        }
    }
`;

const FooterDetail = () => {
    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <FooterStyles>
            <div>
                <div className='flex flex-col items-center mb-5 '>
                    {/* Nút dropdown trên điện thoại */}
                    {/* <div
                        className='dropdown-button'
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                    >
                        ☰ Menu
                    </div> */}

                    {/* Danh sách ul chuyển thành dropdown menu */}
                    <ul className='dropdown-menu'>
                        {menuLink.map((item) => (
                            <li className='menu-item' key={item.title}>
                                <a href={item.url} className='menu-link'>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className='mt-5 bottom-review'>
                        This website is owned and operated by Cosari® and Meo Nutrition® brands.
                    </p>
                    <p className='mt-5 bottom-review'>
                        * The information contained within this site is not intended as a substitute for professional medical advice. If you have, expect to have, or suspect you may have any medical condition, you are urged to consult with a health care provider. These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any diseases or medical conditions. Results do not necessarily reflect typical results from the use of these products. Please visit product websites for more information.
                    </p>
                    <p className='mt-5 mb-5 bottom-review'>
                        © All Rights Reserved.
                    </p>
                </div>
            </div>
        </FooterStyles>
    );
};

export default FooterDetail;
