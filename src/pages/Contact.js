import React, { useState } from 'react';
import styled from 'styled-components';
import Field from '../field/Field';
import Button from '../button/Button';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import HeaderDeatil from '../layout/Header-detail';
import FooterDetail from '../layout/Footer-detail';


const ContactStyles = styled.div`
    .input {
        width: 100%;
        padding: 10px;
        background-color: white;
        border-radius: 8px;
        border: 1px solid #5c5c5c;
        margin-bottom: 15px;
        transition: all 0.2s linear;
    }
`;

const schema = yup.object ({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Please enter valid email address").required("Please enter your email address"),
    textarea: yup.string().required("Please enter your message"),
})

const Contact = () => {
    const [text, setText] = useState('');
    const handleTextChane = (e) => {
        setText(e.target.value);
    }
    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
      } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
      });
    return (
        <ContactStyles>
            <HeaderDeatil></HeaderDeatil>
            <div className='max-w-[660px] p-4 mx-auto mt-5 mb-10'>
                <h1 className='contact-content'>Get In Touch</h1>
                <p className='contact-detail'>
                    Feel free to reach out to us anytime by sending an email to
                    <span className='text-blue-600 underline'> editorial@trustedconsumerreview.com</span>
                </p>
                <p className='contact-detail'>Or by filling out the contact form below.</p>
                <form>
                    <Field>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='input'
                        />
                    </Field>
                    <Field>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='input'
                        />
                    </Field>
                    <Field>
                        <textarea
                            value={text}
                            name='textarea'
                            onChange={handleTextChane}
                            placeholder='Message'
                            className='input h-[155px]'
                        />
                    </Field>
                    <Button type='submit'></Button>
                </form>
            </div>
            <FooterDetail></FooterDetail>
        </ContactStyles>
    );
};

export default Contact;