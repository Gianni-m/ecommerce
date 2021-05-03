import React, {Component, Fragment} from 'react';
import '../../style/Form.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom"


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isSubmitted:false,
            username:'',
            email:'',
            password:'',
            password2:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const {isSubmitted, username,email, password, password2} = this.state
        if(!isSubmitted) {
            if(username.length < 3 && email.length < 1 && password.length < 5 && password2.length < 5) {
                return;
            } else {
                this.setState({isSubmitted: true})
                await this.props.registerUser(this.state.username, this.state.email, this.state.password, this.state.password2)
                this.setState({isSubmitted: false})
            }
        }
    }

    render() {

        const {isSubmitted} = this.state
        const {handleChange, handleSubmit} = this;

        return(

            <Fragment>
                <div className='form-container'>
                    <Link to={'/home'} className='close-btn'>×</Link>

                    <div className='form-content-right'>

                        <form onSubmit={handleSubmit} className='form' noValidate>
                            <div className='form-inputs'>
                                <label className='form-label'>Username</label>
                                <input
                                    className='form-input'
                                    type='text'
                                    name='username'
                                    placeholder='Enter your username'

                                    onChange={handleChange}
                                />
                                {/*errors.username && <p>{errors.username}</p>*/}
                            </div>
                            <div className='form-inputs'>
                                <label className='form-label'>Email</label>
                                <input
                                    className='form-input'
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'

                                    onChange={handleChange}
                                />
                                {/*errors.email && <p>{errors.email}</p>*/}
                            </div>
                            <div className='form-inputs'>
                                <label className='form-label'>Password</label>
                                <input
                                    className='form-input'
                                    type='password'
                                    name='password'
                                    placeholder='Enter your password'

                                    onChange={handleChange}
                                />
                                {/*errors.password && <p>{errors.password}</p>*/}
                            </div>
                            <div className='form-inputs'>
                                <label className='form-label'>Confirm Password</label>
                                <input
                                    className='form-input'
                                    type='password'
                                    name='password2'
                                    placeholder='Confirm your password'

                                    onChange={handleChange}
                                />
                                {/*errors.password2 && <p>{errors.password2}</p>*/}
                            </div>
                            <button className='form-input-btn' type='submit'>
                                Sign up
                            </button>
                            <span className='form-input-login'>
          Already have an account? Login <Link to='/login'>here</Link>
        </span>
                        </form>
                    </div>
                </div>
            </Fragment>

        )
    }

}




export default RegisterForm;
