import React from 'react';
import styled from 'styled-components';
import HeaderDeatil from '../layout/Header-detail';
import FooterDetail from '../layout/Footer-detail';
import Form from '../form/Form';

const AdvertiserDisclosureStyles = styled.div`
`

const AdvertiserDisclosure = () => {
    return (
        <AdvertiserDisclosureStyles>
            <HeaderDeatil></HeaderDeatil>
            <div className='max-w-[1140px] p-4 mx-auto mt-10 mb-10'>
                <h1 className='contact-content'>Do Not Sell or Share My Personal Information</h1>
                <p className='contact-detail'>
                    If you are a California resident, you are permitted to make certain requests regarding the processing or collection of your personal data. If you wish to submit a request, please use the form below.
                </p>
                <div className='mb-10'>
                    <h3 className='contact-title'>Data Subjects Right Request</h3>
                    <p className='contact-detail'>
                        If you are a California resident, you are permitted to make certain requests regarding the processing or collection of your personal data. If you wish to submit a request, please use the form below (select all that apply).
                    </p>
                    <p className='contact-detail'>
                        *In certain circumstances, we may require additional information if we are unable to verify your request based on the information provided. The personal information submitted in connection with your request will be used for the purpose of processing your request.
                    </p>
                </div>
                <Form></Form>
            </div>
            <FooterDetail></FooterDetail>
        </AdvertiserDisclosureStyles>
    );
};

export default AdvertiserDisclosure;