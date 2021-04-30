import React, { useState } from 'react';
import './Form.scss';
import FormSignin from './pages/Login';
import FormSuccess from './FormSuccess';

const LoginForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>

                {!isSubmitted ? (
                    <FormSignin submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </>
    );
};

export default LoginForm;
