import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const FormContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
    font-size: 20px;
    color: blue;
    .form-field {
        margin-bottom: 15px;
    }

    .form-field input {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .checkbox-group {
        margin-top: 10px;
        margin-bottom: 40px;
    }

    .checkbox-group label {
    display: block;
    padding: 10px;
    margin: 15px 0;
    background-color: #ffffff;
    border: 2px solid #007bff; /* Thêm khung viền */
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease; /* Hiệu ứng khi hover */
  }

  .checkbox-group input {
    margin-right: 10px; /* Khoảng cách giữa checkbox và nhãn */
  }

  /* Hiệu ứng khi hover */
  .checkbox-group label:hover {
    background-color: #b7b7e2;
    border-color: #0056b3;
  }
`;

const Form = () => {
    const [email, setEmail] = useState('');
    const [checkboxes, setCheckboxes] = useState({
        review: false,
        correct: false,
        delete: false,
        optOutThirdParties: false,
        optOutOrders: false,
        emailMarketing: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prevState) => ({
        ...prevState,
        [name]: checked
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Checkboxes:', checkboxes);
        // Handle form submission logic here
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <p className='mb-5'>Choose as many as you like.</p>
                <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="checkbox-group">
                    <label>
                        <input
                        type="checkbox"
                        name="review"
                        checked={checkboxes.review}
                        onChange={handleCheckboxChange}
                        />
                        Review the personal information
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="correct"
                        checked={checkboxes.correct}
                        onChange={handleCheckboxChange}
                        />
                        Correct or update any inaccurate personal information
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="delete"
                        checked={checkboxes.delete}
                        onChange={handleCheckboxChange}
                        />
                        Request that we delete personal information (we need your IP address in order to remove cookie data)
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="optOutThirdParties"
                        checked={checkboxes.optOutThirdParties}
                        onChange={handleCheckboxChange}
                        />
                        Opt-out of sharing personal information with third parties (for some purposes*)
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="optOutOrders"
                        checked={checkboxes.optOutOrders}
                        onChange={handleCheckboxChange}
                        />
                        Opt-out of sharing personal information outside of what is necessary to fulfill your orders
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="emailMarketing"
                        checked={checkboxes.emailMarketing}
                        onChange={handleCheckboxChange}
                        />
                        Make choices about receiving email marketing
                    </label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </FormContainer>
  );
};

export default Form;
