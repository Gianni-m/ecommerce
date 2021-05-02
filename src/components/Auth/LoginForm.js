import React, {Component, Fragment} from 'react';
import '../Form.scss';
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import {Link} from "react-router-dom";
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            username: '',
            password: '',
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
        const {isSubmitted, username, password} = this.state
        if(!isSubmitted) {
            if(username.length < 3 && password.length < 5) {
                return;
            } else {
                this.setState({isSubmitted: true})
                await this.props.loginUser(this.state.username, this.state.password)
                this.setState({isSubmitted: false})
            }
        }
    }

    render() {
        const {isSubmitted} = this.state
        const {handleChange, handleSubmit} = this;

        return (
            <Fragment>
                <div className='form-container'>
                    <span className='close-btn'>×</span>
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

                            <button className='form-input-btn' type='submit'>
                                Sign In
                            </button>
                            <span className='form-input-login'>
          Don't have an account? Register <Link to='/register'>here</Link>
        </span>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {loginUser})(LoginForm);
