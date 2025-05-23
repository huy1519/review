import React from 'react';
import styled from 'styled-components';
import FooterDetail from '../layout/Footer-detail';
import HeaderDeatil from '../layout/Header-detail';

const PrivacyPolicyStyles = styled.div`
    .contact-title-name {
        color: black;
        font-size: 24px;
        margin-bottom: 15px;
        line-height: 1.7;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 20px;
        }
    }
`;

const PrivacyPolicy = () => {
    return (
        <PrivacyPolicyStyles>
            <HeaderDeatil></HeaderDeatil>
            <div className='max-w-[1140px] p-4 mx-auto mt-5 mb-10'>
                <h1 className='contact-content'>Privacy Policy</h1>
                <h2 className='contact-title-name'>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</h2>
                <h2 className='contact-title-name'>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</h2>
                <div className='mb-10'>
                    <h3 className='contact-title'>Interpretation</h3>
                    <p className='contact-detail'>
                        The words of which the initial letter is capitalized have meanings defined under the following conditions.
                    </p>
                    <p className='contact-detail'>
                        The following definitions shall have the same meaning regardless of whether they appear in the singular or in the plural.
                    </p>
                    <p className='contact-detail'>
                        What information do we collect?
                    </p>
                    <p className='contact-detail'>
                        When you visit our Website you may provide us with two types of information: personal information you knowingly choose to disclose that is collected on an individual basis and Website use information collected for general data purposes as you and others browse our Website.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Definitions</h3>
                    <p className='contact-detail-1'>
                        For the purposes of this Privacy Policy:
                    </p>
                    <p className='contact-detail-1'>
                        You refers to the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </p>
                    <p className='contact-detail-1'>
                        Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Interactive Ecommerce LLC at 1309 Coffeen Avenue, Sheridan, WY 82801, the entity which controls www.kathyliving.com and its subdomains.
                    </p>
                    <p className='contact-detail-1'>
                        Affiliate refers to an entity that controls, is controlled by, or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority.
                    </p>
                    <p className='contact-detail-1'>
                        Account refers to a unique account created for You to access our Service or parts of our Service. Website refers to Kathy Living, accessible from
                        <a href=' https://www.kathyliving.com/' className='link'> https://www.kathyliving.com/. </a> 
                    </p>
                    <p className='contact-detail-1'>
                        Service refers to the Website.
                    </p>
                    <p className='contact-detail'>
                        Country refers to the United States of America.
                    </p>
                    <p className='contact-detail'>
                        Service Provider refers to any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.
                    </p>
                    <p className='contact-detail'>
                        Third-Party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.
                    </p>
                    <p className='contact-detail'>
                        Personal Data refers to any information that relates to an identified or identifiable individual. CCPA refers to The California Consumer Privacy Act. It is a state statute intended to enhance privacy rights and consumer protection for residents of California in the United States.
                    </p>
                    <p className='contact-detail'>
                        For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes, or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.
                    </p>
                    <p className='contact-detail-1'>
                        Cookies refers to small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                    </p>
                    <p className='contact-detail-1'>
                        Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)
                    </p>
                    <p className='contact-detail'>
                        Do Not Track (DNT) refers to a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing Internet users to control the tracking of their online activities across websites.
                    </p>
                    <p className='contact-detail'>
                        Business, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers’ personal information and determines the purposes and means of the processing of Consumers’ personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers’ personal information, that does business in the State of California.
                    </p>
                    <p className='contact-detail'>
                        Consumer, for the purpose of the CCPA (California Consumer Privacy Act), refers to a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.
                    </p>
                    <p className='contact-detail'>
                        Sale, for the purpose of the CCPA (California Consumer Privacy Act), refers to the act of selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer’s Personal information to another business or a third party for monetary or other valuable consideration.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Personal Data</h3>
                    <p className='contact-detail'>
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
                    <p className='contact-detail-1'>
                        Email address
                    </p>
                    <p className='contact-detail-1'>
                        First name and last name
                    </p>
                    <p className='contact-detail-1'>
                        Phone number
                    </p>
                    <p className='contact-detail'>
                        Address, State, Province, ZIP/Postal code, City
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Usage Data</h3>
                    <p className='contact-detail'>
                        Usage Data is collected automatically when using the Service.
                    </p>
                    <p className='contact-detail'>
                        Usage Data may include information such as Your Device’s Internet Protocol address (IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
                    <p className='contact-detail'>
                        When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device’s unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                    </p>
                    <p className='contact-detail'>
                        We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Tracking Technologies and Cookies</h3>
                    <p className='contact-detail'>
                        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                    </p>
                    <p className='contact-detail'>
                        You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                    </p>
                    <p className='contact-detail'>
                        Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
                    </p>
                    <p className='contact-detail-1'>
                        We use both session and persistent Cookies for the purposes set out below:
                    </p>
                    <p className='contact-detail-1'>
                        Necessary / Essential Cookies
                    </p>
                    <p className='contact-detail'>
                        Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                    </p>
                    <p className='contact-detail-1'>
                        Cookies Policy / Notice Acceptance Cookies
                    </p>
                    <p className='contact-detail'>
                        Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                    </p>
                    <p className='contact-detail-1'>
                        Functionality Cookies
                    </p>
                    <p className='contact-detail'>
                        Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                    </p>
                    <p className='contact-detail-1'>
                        Tracking and Performance Cookies
                    </p>
                    <p className='contact-detail'>
                        Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features, or new functionality of the Website to see how our users react to them.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Use of Your Personal Data</h3>
                    <p className='contact-detail-1'>
                        The Company may use Personal Data for the following purposes:
                    </p>
                    <p className='contact-detail-1'>
                        To provide and maintain our Service, including to monitor the usage of our Service.
                    </p>
                    <p className='contact-detail'>
                        To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                    </p>
                    <p className='contact-detail'>
                        For the performance of a contract: the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service.
                    </p>
                    <p className='contact-detail-1'>
                        To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including the security updates, when necessary or reasonable for their implementation.
                    </p>
                    <p className='contact-detail-1'>
                        To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                    </p>
                    <p className='contact-detail'>
                        To manage Your requests: To attend to and manage Your requests to Us.
                    </p>
                    <p className='contact-detail-1'>
                        We may share your personal information in the following situations:
                    </p>
                    <p className='contact-detail'>
                        With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to show advertisements to You to help support and maintain Our Service, to contact You, to advertise on third-party websites to You after You visited our Service or for payment processing.
                    </p>
                    <p className='contact-detail'>
                        For Business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.
                    </p>
                    <p className='contact-detail'>
                        With Affiliates: We may share Your information with Our Affiliates, in which case we will require those Affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other companies that We control or that are under common control with Us.
                    </p>
                    <p className='contact-detail'>
                        With Business partners: We may share Your information with Our Business partners to offer You certain products, services, or promotions.
                    </p>
                    <p className='contact-detail'>
                        With other users: when You share personal information or otherwise interact in public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures, and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You, and view Your profile. 
                    </p>
                    <p className='contact-detail-1'>
                        Retention of Your Personal Data
                    </p>
                    <p className='contact-detail-1'>
                        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>
                    <p className='contact-detail'>
                        The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                    </p>
                    <p className='contact-detail-1'>
                        Transfer of Your Personal Data
                    </p>
                    <p className='contact-detail-1'>
                        Your information, including Personal Data, is processed at the Company’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in Your jurisdiction.
                    </p>
                    <p className='contact-detail'>
                        Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                    </p>
                    <p className='contact-detail'>
                        The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                    </p>
                    <p className='contact-detail-1'>
                        Disclosure of Your Personal Data
                    </p>
                    <p className='contact-detail-1'>
                        Business Transactions
                    </p>
                    <p className='contact-detail'>
                        If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                    </p>
                    <p className='contact-detail-1'>
                        Law Enforcement
                    </p>
                    <p className='contact-detail'>
                        Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>
                    <p className='contact-detail-1'>
                        Other Legal Requirements
                    </p>
                    <p className='contact-detail-1'>
                        The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <p className='contact-detail-1'>
                        Comply with a legal obligation
                    </p>
                    <p className='contact-detail-1'>
                        Protect and defend the rights or property of the Company
                    </p>
                    <p className='contact-detail-1'>
                        Prevent or investigate possible wrongdoing in connection with the Service
                    </p>
                    <p className='contact-detail-1'>
                        Protect the personal safety of Users of the Service or the public 
                    </p>
                    <p className='contact-detail'>
                        Protect against legal liability 
                    </p>
                    <p className='contact-detail-1'>
                        Security of Your Personal Data
                    </p>
                    <p className='contact-detail-1'>
                        The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>
                    <p className='contact-detail-1'>
                        Detailed Information on the Processing of Your Personal Data
                    </p>
                    <p className='contact-detail'>
                        Service Providers have access to Your Personal Data only to perform their tasks on Our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                    <p className='contact-detail-1'>
                        Analytics
                    </p>
                    <p className='contact-detail'>
                        We may use third-party Service providers to monitor and analyze the use of our Service.
                    </p>
                    <p className='contact-detail-1'>
                        Google Analytics
                    </p>
                    <p className='contact-detail-1'>
                        Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
                    </p>
                    <p className='contact-detail-1'>
                        You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.
                    </p>
                    <p className='contact-detail'>
                        For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:   
                        <a href=' https://policies.google.com/privacy?hl=en' className='link'> https://policies.google.com/privacy?hl=en. </a> 
                    </p>
                    <p className='contact-detail-1'>
                        Email Marketing
                    </p>
                    <p className='contact-detail-1'>
                        We may use Your Personal Data to contact You with newsletters, marketing or promotional materials, and other information that may be of interest to You. You may opt out of receiving any, or all, of these communications from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us.
                    </p>
                    <p className='contact-detail'>
                        We may use Email Marketing Service Providers to manage and send emails to You.
                    </p>
                    <p className='contact-detail-1'>
                        Behavioral Remarketing
                    </p>
                    <p className='contact-detail'>
                        The Company uses remarketing services to advertise on third-party websites to You after You visited our Service. We and Our third-party vendors use cookies to inform, optimize, and serve ads based on Your past visits to our Service.
                    </p>
                    <p className='contact-detail-1'>
                        Bing Ads Remarketing
                    </p>
                    <p className='contact-detail-1'>
                        Bing Ads remarketing service is provided by Microsoft Inc.
                    </p>
                    <p className='contact-detail-1'>
                        You can opt out of Bing Ads interest-based ads by following their instructions: 
                    </p>
                    <p className='contact-detail-1'>
                        <a href=' https://help.ads.microsoft.com/#apex/3/en-us/51029' className='link'> https://help.ads.microsoft.com/#apex/3/en-us/51029 </a> 
                    </p>
                    <p className='contact-detail-1'>
                        You can learn more about the privacy practices and policies of Microsoft by visiting their Privacy Policy page: 
                    </p>
                    <p className='contact-detail'>
                        <a href=' https://privacy.microsoft.com/en-us/PrivacyStatement' className='link'> https://privacy.microsoft.com/en-us/PrivacyStatement. </a>  
                    </p>
                    <p className='contact-detail-1'>
                        Facebook
                    </p>
                    <p className='contact-detail-1'>
                        Facebook remarketing service is provided by Facebook Inc.
                    </p>
                    <p className='contact-detail-1'>
                        You can learn more about interest-based advertising from Facebook by visiting this page: 
                    </p>
                    <p className='contact-detail-1'>
                        <a href=' https://www.facebook.com/business/help/182371508761821?id=176276233019487' className='link'> https://www.facebook.com/business/help/182371508761821?id=176276233019487t. </a>
                    </p>
                    <p className='contact-detail-1'>
                        To opt out of Facebook’s interest-based ads, follow these instructions from Facebook: 
                    </p>
                    <p className='contact-detail-1'>
                        https://www.facebook.com/help/568137493302217.
                    </p>
                    <p className='contact-detail-1'>
                        Facebook adheres to the Self-Regulatory Principles for Online Behavioral Advertising established by the Digital Advertising Alliance. You can also opt out of Facebook and other participating companies through the Digital Advertising Alliance in the USA
                        <a href='  http://www.aboutads.info/choices/' className='link'>  http://www.aboutads.info/choices/ </a> the Digital Advertising Alliance of Canada in Canada
                        <a href='  http://youradchoices.ca/ ' className='link'>  http://youradchoices.ca/  </a> or the European Interactive Digital Advertising Alliance in Europe
                        <a href='  http://www.youronlinechoices.eu/ ' className='link'> http://www.youronlinechoices.eu/ , </a> or opt out using your mobile device settings.
                    </p>
                    <p className='contact-detail'>
                        For more information on the privacy practices of Facebook, please visit Facebook’s Data Policy:
                        <a href='  https://www.facebook.com/privacy/explanation ' className='link'>https://www.facebook.com/privacy/explanation. </a>
                    </p>
                    <p className='contact-detail-1'>
                        Payments
                    </p>
                    <p className='contact-detail'>
                        We may provide paid products and/or services within the Service. In that case, we may use third-party services for payment processing (e.g. payment processors).
                    </p>
                    <p className='contact-detail'>
                        We will not store or collect Your payment card details. That information is provided directly to Our third-party payment processors whose use of Your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express, and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
                    </p>
                    <p className='contact-detail-1'>
                        PayPal
                    </p>
                    <p className='contact-detail'>
                        Their Privacy Policy can be viewed at:
                    <a href='  https://www.paypal.com/webapps/mpp/ua/privacy-full ' className='link'> https://www.paypal.com/webapps/mpp/ua/privacy-full. </a>
                    </p>
                    <p className='contact-detail-1'>
                        Braintree
                    </p>
                    <p className='contact-detail'>
                        Their Privacy Policy can be viewed at:
                        <a href='https://www.braintreepayments.com/legal/braintree-privacy-policy' className='link'> https://www.braintreepayments.com/legal/braintree-privacy-policy. </a>
                    </p>
                    <p className='contact-detail-1'>
                        Usage, Performance and Miscellaneous
                    </p>
                    <p className='contact-detail'>
                        We may use third-party Service Providers to provide better improvement of our Service.
                    </p>
                    <p className='contact-detail-1'>
                        Invisible reCAPTCHA
                    </p>
                    <p className='contact-detail-1'>
                        We use an invisible captcha service named reCAPTCHA. reCAPTCHA is operated by Google.
                    </p>
                    <p className='contact-detail-1'>
                        The reCAPTCHA service may collect information from You and from Your Device for security purposes.
                    </p>
                    <p className='contact-detail-1'>
                        The information gathered by reCAPTCHA is held in accordance with the Privacy Policy of Google: 
                    </p>
                    <p className='contact-detail'>
                        <a href='https://policies.google.com/privacy?hl=en ' className='link'> https://policies.google.com/privacy?hl=en. </a>
                    </p>
                    <p className='contact-detail-1'>
                        FreshDesk
                    </p>
                    <p className='contact-detail-1'>
                        FreshDesk is a customer support software. The service is operated by Freshworks, Inc.
                    </p>
                    <p className='contact-detail-1'>
                        FreshDesk service may collect information from Your Device.
                    </p>
                    <p className='contact-detail-1'>
                        The information gathered by FreshDesk is held in accordance with its Privacy Policy: 
                    </p>
                    <p className='contact-detail'>
                        <a href='https://www.freshworks.com/privacy/' className='link'> https://www.freshworks.com/privacy/. </a>
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Your Rights under the CCPA</h3>
                    <p className='contact-detail-1'>
                        Under this Privacy Policy, and by law if You are a resident of California, You have the following rights:
                    </p>
                    <p className='contact-detail-1'>
                        The right to notice. You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.
                    </p>
                    <p className='contact-detail-1'>
                        The right to access/the right to request. The CCPA permits You to request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months by the Company or its subsidiaries to a third party for the third party’s direct marketing purposes.
                    </p>
                    <p className='contact-detail-1'>
                        The right to say no to the sale of Personal Data. You also have the right to ask the Company not to sell Your Personal Data to third parties. You can submit such a request by visiting our “Do Not Sell or Share My Personal Information” section or web page.
                    </p>
                    <p className='contact-detail-1'>
                        The right to know about Your Personal Data. You have the right to request and obtain from the Company information regarding the disclosure of the following:
                    </p>
                    <p className='contact-detail-1'>
                        – The categories of Personal Data collected
                    </p>
                    <p className='contact-detail-1'>
                        – The sources from which the Personal Data was collected
                    </p>
                    <p className='contact-detail-1'>
                        – The business or commercial purpose for collecting or selling the Personal Data
                    </p>
                    <p className='contact-detail-1'>
                        – Categories of third parties with whom We share Personal Data
                    </p>
                    <p className='contact-detail-1'>
                        – The specific pieces of Personal Data we collected about You
                    </p>
                    <p className='contact-detail-1'>
                        The right to delete Personal Data. You also have the right to request the deletion of Your Personal Data that has been collected in the past 12 months.
                    </p>
                    <p className='contact-detail-1'>
                        The right not to be discriminated against. You have the right not to be discriminated against for exercising any of Your Consumer’s rights, including by:
                    </p>
                    <p className='contact-detail-1'>
                        – Denying goods or services to You
                    </p>
                    <p className='contact-detail-1'>
                        – Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties
                    </p>
                    <p className='contact-detail-1'>
                        – Providing a different level or quality of goods or services to You
                    </p>
                    <p className='contact-detail'>
                        – Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Exercising Your CCPA Data Protection Rights</h3>
                    <p className='contact-detail'>
                        In order to exercise any of your rights under the CCPA, and if you are a California resident, you can fill out the form at
                        <a href='https://www.kathyliving.com/personal-information-request  ' className='link'> https://www.kathyliving.com/personal-information-request  </a>
                        to submit your request, or email supplementreview.co@gmail.com
                    </p>
                    <p className='contact-detail'>
                        The Company will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request. The time period to provide the required information may be extended once by an additional 45 days when reasonable necessary and with prior notice.
                    </p>
                    <p className='contact-detail-1'>
                        Do Not Sell or Share My Personal Information
                    </p>
                    <p className='contact-detail'>
                        We do not sell or share personal information. However, the Service Providers we partner with (for example, our advertising partners) may use technology on the Service that “sells” personal information as defined by the CCPA law.
                    </p>
                    <p className='contact-detail'>
                        If you wish to opt out of the use of your personal information for interest-based advertising purposes and these potential sales as defined under CCPA law, you may do so by following the instructions below.
                    </p>
                    <p className='contact-detail'>
                        Please note that any opt out is specific to the browser You use. You may need to opt out on every browser that you use.
                    </p>
                    <p className='contact-detail-1'>
                        Website
                    </p>
                    <p className='contact-detail-1'>
                        You can opt out of receiving ads that are personalized as served by our Service Providers by following our instructions presented on the Service:
                    </p>
                    <p className='contact-detail-1'>
                        - From Our “Cookie Consent” notice banner
                    </p>
                    <p className='contact-detail-1'>
                        - Or from Our “CCPA Opt-out” notice banner
                    </p>
                    <p className='contact-detail-1'>
                        - Or from Our “Do Not Sell or Share My Personal Information” notice banner
                    </p>
                    <p className='contact-detail-1'>
                        - Or from Our “Do Not Sell or Share My Personal Information” link
                    </p>
                    <p className='contact-detail-'>
                        The opt out will place a cookie on Your computer that is unique to the browser You use to opt out. If you change browsers or delete the cookies saved by your browser, you will need to opt out again.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Mobile Devices</h3>
                    <p className='contact-detail-1'>
                        Your mobile device may give you the ability to opt out of the use of information about the apps you use in order to serve you ads that are targeted to your interests:
                    </p>
                    <p className='contact-detail-1'>
                        - “Opt out of Interest-Based Ads” or “Opt out of Ads Personalization” on Android devices
                    </p>
                    <p className='contact-detail'>
                        - “Limit Ad Tracking” on iOS devices
                    </p>
                    <p className='contact-detail'>
                        You can also stop the collection of location information from Your mobile device by changing the preferences on your mobile device.
                    </p>
                    <p className='contact-detail'>
                        “Do Not Track” Policy as Required by California Online Privacy Protection Act (CalOPPA)
                    </p>
                    <p className='contact-detail'>
                        Our Service does not respond to Do Not Track signals.
                    </p>
                    <p className='contact-detail'>
                        However, some third party websites do keep track of your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Children's Privacy</h3>
                    <p className='contact-detail'>
                        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us by sending an email to supplementreview.co@gmail.com. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                    </p>
                    <p className='contact-detail'>
                        We also may limit how We collect, use, and store some of the information of Users between 13 and 18 years old. In some cases, this means We will be unable to provide certain functionality of the Service to these users.
                    </p>
                    <p className='contact-detail'>
                        If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent’s consent before We collect and use that information.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Links to Other Websites</h3>
                    <p className='contact-detail'>
                        Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit.
                    </p>
                    <p className='contact-detail'>
                        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services. 
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Changes to this Privacy Policy</h3>
                    <p className='contact-detail'>
                        We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <p className='contact-detail'>
                        We will let You know via email and/or a prominent notice on Our Service, prior to any substantial changes becoming effective, and update the “Last updated” date at the top of this Privacy Policy. 
                    </p>
                    <p className='contact-detail'>
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Contact Us</h3>
                    <p className='contact-detail-1'>
                        If you have any questions about this Privacy Policy, You can contact us:
                    </p>
                    <p className='contact-detail-1'>
                        - By visiting this page on our website:
                        <a href='https://www.kathyliving.com/personal-information-request/' className='link'>  https://www.kathyliving.com/personal-information-request/ </a>
                    </p>
                    <p className='contact-detail'>
                        - Or emailing: supplementreview.co@gmail.com
                    </p>
                </div>
            </div>
            <FooterDetail></FooterDetail>
        </PrivacyPolicyStyles>
    );
};

export default PrivacyPolicy;