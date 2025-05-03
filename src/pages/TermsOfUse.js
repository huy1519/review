import React from 'react';
import styled from 'styled-components';
import FooterDetail from '../layout/Footer-detail';
import HeaderDeatil from '../layout/Header-detail';

const TermsOfUseStyles = styled.div`
    .contact-title-name {
        color: black;
        font-size: 26px;
        margin-bottom: 15px;
        line-height: 1.7;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 22px;
        }
    }
`;

const TermsOfUse = () => {
    return (
        <TermsOfUseStyles>
            <HeaderDeatil></HeaderDeatil>
            <div className='max-w-[1200px] p-4 mx-auto mt-5 mb-10'>
                <h1 className='contact-content'>Terms of Use Agreement</h1>
                <div className='mb-10'>
                    <h3 className='contact-title'>Terms of Use Agreement</h3>
                    <p className='contact-detail'>
                        Kathy Living (the “Site”, “Kathy Living”, “we”, “us”, “our”, or “Company “) encourages all users to review this Terms of Use Agreement (“Agreement”). By accessing, browsing or using this site/services, through any direct or indirect means or by using the goods or services provided and offered in or through this site/services by any alternative methods (including, for example, telephone, mail, text, email or facsimile), you accept and agree to be bound by these Terms of Use.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Site Modification or Suspension</h3>
                    <p className='contact-detail'>
                        We reserve the right, at any time in our sole discretion, to modify, suspend or discontinue the sites or any service, content, feature or product offered through the Site, with or without notice. You agree that we shall not be liable to any third party for any modification, suspension or discontinuance of the Site, or any service, content, feature or product offered through the Site.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Services</h3>
                    <p className='contact-detail'>
                        This site/services provides information and reviews on financial services and consumer products and may allow consumers to request additional information through an inquiry. Personal information submitted in connection with this site/service is subject to our Privacy Policy. For more information, see our Privacy Policy. You understand and agree that if you submit an inquiry or ask for additional information on this site, Kathy Living will share your personal information with our network of clients including but not limited to: mortgage bankers, mortgage brokers, credit consultants, insurance brokers or any other business in our client network that may be related or unrelated to the service or product you have expressed interest in. Different types of businesses related or unrelated to your inquiry may be provided your information and may contact you. We do not charge you a fee to use this site/services. You understand that requirements to qualify for a particular loan product are made by the client network and we do not endorse, warrant, or guarantee such results. We are not a mortgage lender, debt servicer, debt settlement, real estate company, insurance agent, auto sales company or automotive warranty organization. Your inquiry is not intended to be, any type of application for any financial product. Prior to submitting your inquiry, you agree to receive autodialed or prerecorded calls (including to mobile numbers) and texts and emails from Kathy Living and its affiliates, partners, and vendors to the phone numbers (including mobile numbers) and email addresses you provide to Kathy Living and to any phone numbers or email addresses subsequently associated with you by Kathy Living or its affiliates or marketing partners, affiliates or vendors. You understand and agree that your consent is not a condition, directly or indirectly of a purchase. Licensed organizations who may contact you are subject to Federal and State laws and regulations for their practices. Please review the privacy practices of all third parties who contact you. If you have any questions regarding their practices, please contact them directly.
                    </p>
                    <p className='contact-detail-1'>
                        This site/services are not intended for the use of minors. You certify to Kathy Living that:
                    </p>
                    <p className='contact-detail-1'>
                        • You are at least 18 years of age.
                    </p>
                    <p className='contact-detail-1'>
                        • You assume full responsibility for the use of this site/service by any minors.
                    </p>
                    <p className='contact-detail'>
                        • Any information you have submitted to us on this site or otherwise, is accurate, complete and that you have not submitted or provided false information to us. Your use of this site/service is subject to all applicable federal, state, and local laws and regulations.
                    </p>

                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Advertiser Disclosure</h3>
                    <p className='contact-detail'>
                        Our top ranked sites are reviewed on the basis of our own views, knowledge and expert opinions. We are able to provide you with our free online comparison tool thanks to referral fees we receive from a number of companies that are compared and reviewed on our website. We do not review all products in a given category. We are independently owned and operated and all opinions expressed on this site are our own.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>How We Rank</h3>
                    <p className='contact-detail'>
                        The featured products that appear on this site are owned by companies from which we may receive compensation. The compensation may impact how and where products appear on the site including the order in which they appear. Ranking and order of products on the site are subject to change and the site does not include all available products in their respective categories. Additional elements that impact our rankings may include the user device, operating system, location, the day of the week, time of day and cookie data or any self-assessed data we may generate on this site.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Prohibited Use</h3>
                    <p className='contact-detail'>
                        You shall not use this site/service for any illegal purpose or for the transmission of any unlawful material or material that is abusive, harmful, harassing, libelous, racially or ethnically offensive, invasive of another’s privacy, obscene, threatening, vulgar, sexually explicit, tortious, defamatory, or that infringes or may infringe on the intellectual property or rights of another, or in a reasonable person’s view objectionable; directly or indirectly interfere, or attempt to interfere with the proper working of this system, site, or service including system integrities or securities; interference of any account, or any communication or transaction being conducted on this site/service; the use of any robot, spider, other automatic device, or manual process to monitor or access or copy our web pages or any content without our prior expressed written permission; take any action which imposes an unreasonable or excessively large load on our infrastructure; upload, post, transmit, submit, email or make available by any other means any data or content protected under any law or contractual relationship that you do not have the right to distribute; any conduct of fraud, representing yourself as someone else or hiding or attempt to hide your identity; and interference or attempt to interfere with the proper working of this site/service.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Copyright and Trademark Notice Information</h3>
                    <p className='contact-detail'>
                        Our site/services contains intellectual property owned by us and other parties. As for the relationship between you and us; we are the sole owner of the site/services and all materials on or available through our site/services including without limitation, all applicable U.S. and non-U.S. copyrights, trademarks, patents, trade secrets, and other intellectual property rights thereto (collectively “site/services Content”). Except as otherwise specifically provided in this Agreement, you may not download or save a copy of the site/services , content or any portion thereof, for any purpose; however, you may print a copy of individual screens appearing as part of the site/services Content solely for your personal records, or non-commercial use provided that our marks, logos or other legends that appear on the copied screens remain on, and are not removed from the printed or stored images of such screens. Except as otherwise expressly permitted herein, you may not modify, copy, publish, display, transmit, adapt or in any way exploit any portion of our site/services content unless you first obtain prior written consent from us and from all other entities with an interest in the relevant intellectual property. Any unauthorized attempt to modify our site/services Site/services content, to overthrow or elude our security features, or to utilize our site/services for other than its intended purposes is strictly prohibited.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>No Warranty</h3>
                    <p className='contact-detail'>

                    </p>
                    <p className='contact-detail'>
                        The content and all services associated on this site are provided to you on an “as-is” and “as available” basis. We make no representations or warranties of any kind, express or implied, as to the operation of our services or the information, content, materials, services included on or associated with our services, including any financial product you may choose. You expressly agree that your use of our services is at your sole risk.
                    </p>
                    <p className='contact-detail'>
                        We do not make, and expressly disclaim, any representations, warranties or guarantees, express or implied, regarding the accuracy, correctness, or completeness of the content or of the safety, reliability, title, timeliness, completeness, merchantability, conformity or fitness for a particular purpose of
                    </p>
                    <p className='contact-detail'>
                        We do not make, and expressly disclaim, any representations, warranties, or guarantees, express or implied, regarding the accuracy, correctness, or completeness of the content or the services, or the safety, reliability, title, timeliness, completeness, merchantability, conformity, or fitness for a particular purpose of the content, services, and products associated with our services. It is your sole responsibility to independently evaluate the accuracy, correctness, or completeness of the content and products associated with our services and any loan you accept. We make no warranties, known or unknown, which now or hereafter exist, which arise from, relate to, or are connected with your use of the service.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Limitation of Liability</h3>
                    <p className='contact-detail'>
                        In no event will we, our subsidiaries, partners, agents, affiliates, licensors, successors, and assigns, along with their respective officers, directors, employees, and shareholders, be liable to any party for (i) any indirect, direct, special, punitive, incidental, or consequential damages (including, but not limited to, damages for loss of business profits, business interruption, loss of programs or information, and the like), or any other damages arising in any way out of the availability, use, reliance on, or inability to use the Kathy Living site/services or content, even if all such parties have been advised of the possibility of such damages, regardless of the form of action, whether in contract, tort, or otherwise; or (ii) for any claim attributable to errors, omissions, or other inaccuracies in, or destructive properties of the Kathy Living site/services or content. You and we agree that any cause of action arising out of or related to our service must commence within one (1) year after the cause of action accrues. Otherwise, such cause of action is permanently barred.
                    </p>
                    <p className='contact-detail'>
                        Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, our liability in such jurisdiction shall be limited to the maximum extent permitted by law.
                    </p>
                    <p className='contact-detail'>
                        Arbitration Agreement and Class Action Waiver 
                    </p>
                    <p className='contact-detail'>
                        This arbitration provision limits your and Kathy Living’s ability to litigate claims in court, and you and Kathy Living each agree to waive your respective rights to a jury trial or a state or federal judge. You agree that you will not file any lawsuit against us in any state or federal court.
                    </p>
                    <p className='contact-detail'>
                        By accessing and/or using any Kathy Living site/services or services, you agree to these terms and conditions of this arbitration agreement. Do not use Kathy Living services or submit any contact information if you do not agree to these terms.
                    </p>
                    <p className='contact-detail'>
                        This agreement is binding to arbitrate all claims. You agree that disputes between you and Kathy Living will be resolved by binding, individual arbitration, and you waive your right to participate in a class action lawsuit or class-wide arbitration.
                    </p>
                    <p className='contact-detail'>
                        This agreement provides that all disputes between you and Kathy Living will be resolved by binding, individual arbitration and not in court or by jury trial. If a dispute is arbitrated, you give up your right to participate as a class representative or class member on any class claim you may have against Kathy Living, including any right to class arbitration or any consolidation of individual arbitrations.
                    </p>
                    <p className='contact-detail'>
                        We strive to never have a dispute, but if we do, you and we agree to try for 60 days to resolve it informally. If no resolution results from this informal process, you and we agree to binding individual arbitration before the American Arbitration Association (“AAA”) under the Federal Arbitration Act (“FAA”), and not to sue in court in front of a judge or jury. As an alternative, a neutral arbitrator will decide and the arbitrator’s decision will be final except for a limited right of appeal under the FAA. Class action lawsuits, class wide arbitrations, private attorney-general actions, and any other proceeding where someone acts in a representative capacity aren’t allowed. Nor is combining individual proceedings without the consent of all parties.
                    </p>
                    <p className='contact-detail'>
                        You agree that the Arbitrator will have sole and exclusive jurisdiction over any dispute you have with us. The Federal Arbitration Act allows for the enforcement of arbitration agreements and governs the interpretation and enforcement of the agreement to arbitrate.
                    </p>
                    <p className='contact-detail'>
                        If any provision of this Arbitration Agreement is found to be invalid or unenforceable, then that specific provision shall be of no force and effect and shall be severed, but the remainder of this Arbitration Agreement shall continue in full force and effect. No waiver of any provision of this Arbitration Agreement will be effective or enforceable unless recorded in a writing signed by the party waiving such a right or requirement. Such a waiver shall not waive or affect any other portion of this Agreement. This Arbitration Agreement will survive the termination of your relationship with Kathy Living.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Idemnification</h3>
                    <p className='contact-detail'>
                        You agree to indemnify and hold Kathy Living, its subsidiaries, affiliates, agents, shareholders, officers contractors, vendors, employees, and service providers harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use of this site/service, the violation of this Agreement by you, or the infringement by you, or other user of this site/service using your computer, of any intellectual property or other right of any person or entity. Kathy Living and its Service providers assume no responsibility whatsoever for such content or actions. Kathy Living reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Termination</h3>
                    <p className='contact-detail'>
                        If you breach or violate any part of this Agreement or provisions in the Privacy Policy you may no longer use this site/service. Kathy Living may, in its sole discretion, terminate, change, or suspend temporarily or permanently, this site/service or any part of it at any time, for any reason, without notice to you and without any liability to you or any other person. You agree that all terminations for cause shall be made in our sole discretion and shall not be liable to you or any third party for any termination.
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Entire Agreement</h3>
                    <p className='contact-detail'>
                        This Agreement constitutes the entire terms of use agreement between you and Kathy Living and governs your use of this site/service which supersedes any prior agreements between you and Kathy Living. You also may be subject to additional terms and conditions that may apply when you use other services, affiliate services, third party content or third party software.                    
                    </p>
                </div>
                <div className='mb-10'>
                    <h3 className='contact-title'>Changes to Terms and Policies</h3>
                    <p className='contact-detail'>
                        We reserve the right to make changes to this Agreement and the posted Privacy Policy. Any changes made will be effective from the date of such posting without further notice to you. As such, the Privacy Policy and Terms of Service posted at the time you register on our site/services will govern our relationship for that registration and inquiry request.
                    </p>
                </div>
            </div>
            <FooterDetail></FooterDetail>
        </TermsOfUseStyles>
    );
};

export default TermsOfUse;