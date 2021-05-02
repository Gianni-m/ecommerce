import React, { useState } from 'react';
import './Form.scss';
import FormSignup from './Auth/Register';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>

                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </>
    );
};

export default Form;
