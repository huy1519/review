import React from 'react';
import styled from 'styled-components';

// Styled Component cho Footer
const FooterStyles = styled.footer`
  background-color: #0b2463;
  padding: 40px 10px;
  color: white;
  width: 100%;

  .main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 55%;
    margin: 0 auto;
    gap: 50px;
  }

  .footer-container {
    display: flex;
    align-items: self-start;
    flex-direction: column;
    gap: 30px;
    flex: 1;
    max-width: 350px;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 150px;
    height: 48px;
    margin-top: 20px;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }

  .menu a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .menu a::before {
    content: "▶"; /* Dấu mũi tên trước mỗi mục */
    margin-right: 10px;
    font-size: 18px;
  }

  .menu a:hover {
    color: #4caf50;
  }

  .note {
    margin-top: 20px;
    line-height: 1.6;
    flex: 2;
  }

  .footer-detail {
    color: white;
    font-size: 18px;
    margin-bottom: 15px;
    line-height: 1.7;
    }
  .copyright {
    text-align: start;
    margin-top: 20px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
  .main {
    flex-direction: column;
    align-items: flex-start;
    max-width: 90%;
    padding: 0 0;
  }

  .logo {
    order: 1;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 140px;
    height: auto;
  }

  .note {
    width: 100%;
    margin-top: 10px;
    text-align: left;
    order: 2;
  }

  .footer-container {
    width: 100%;
    align-items: flex-start;
    text-align: left;
    order: 3;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
    margin-top: 30px;
  }

  .menu a {
    font-size: 18px;
    font-weight: bold;
    color: white;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-bottom: 5px;
    width: 100%;
  }

  .menu a::before {
    content: "▶";
    margin-right: 10px;
    font-size: 14px;
  }

  .footer-detail {
    font-size: 16px;
    line-height: 1.5;
  }

  .copyright {
    text-align: left;
    font-size: 14px;
    margin-top: 20px;
  }
}

`;

const Footer = () => {
  return (
    <FooterStyles>
        <div className='main'>
            <div className="footer-container">
                <img
                    src='https://img.funnelish.com/4072/416759/1724406929-KathyLiving%20Logo%20%28White%29.png'
                    alt=''
                    className='logo'
                />
                <div className="menu">
                <a href="/terms-of-service">TERMS OF SERVICE</a>
                <a href="/privacy-policy">PRIVACY POLICY</a>
                <a href="/contact">CONTACT US</a>
                <a href="/personal-information-request">DO NOT SELL OR SHARE MY PERSONAL INFORMATION</a>
                </div>
                <div className="copyright">
                    <p>© 2025 www.kathyliving.com. All Rights Reserved.</p>
                </div>
            </div>
            <div className="note">
                <p className='footer-detail'>
                    [1] This website is owned and operated by the Cosari® brand.
                </p>
                <p className='footer-detail'>
                    *These statements have not been evaluated by the FDA Food & Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. 
                </p>
                <p className='footer-detail'>
                    Note: The information contained within this site is not intended as a substitute for professional medical advice. If you have, expect to have, or suspect you may have any medical condition, you are urged to consult with a healthcare provider. All content, including text, graphics, images, and information, contained on or available through this website is for general information purposes only. Results do not necessarily reflect typical results from the use of these products. Please visit product websites for more information.
                </p>
                <p className='footer-detail'>
                    Trademarks utilized on our website belong to their respective owners and no implied or expressed endorsement of our website or services is intended. Rankings can be affected by the relationship Kathy Living has with our picks.
                </p>
            </div>
        </div>
    </FooterStyles>
  );
};

export default Footer;
