import React, {Component} from 'react';
import '../../style/Form.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import {loginUser, registerUser} from "../../actions/authActions";



class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isSubmitted:false,
            username:'',
            email:'',
            password:'',
            password2:'',
            error:''
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
            if(username.length < 2) {
                this.setState({error: "username incorrect"})
            }
            else if(email.length < 3) {
                this.setState({error: "email incorrect"})
            }
            else if(password.length < 5) {
                this.setState({error: "longueur du mot de passe insuffisante"})
            }
            else if(password2 !== password) {
                    this.setState({error: "les 2 mots de passes ne correspondent pas"})
            } else {
                document.querySelector('#error-display').classList.remove('show')
                await this.props.registerUser(username, email, password, password2)
                    .then(() => this.props.history.push('/home'))
                    .catch((err) => {
                        this.setState({error: 'erreur'})
                        document.querySelector('#error-display').classList.add('show')
                    })
                this.setState({isSubmitted: false})
            }
        }
    }

    render() {

        const {isSubmitted, error} = this.state
        const {handleChange, handleSubmit} = this;

        return(

            <div className="auth-form">

                <form onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <h2>Inscription</h2>
                    </div>
                    <div className="input-box username-box">
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            required={true}
                            onChange={this.handleChange}
                            placeholder='username'
                        />
                    </div>
                    <div className="input-box email-box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required={true}
                            onChange={this.handleChange}
                            placeholder='example@email.com'
                        />
                    </div>
                    <div className="input-box password-box">
                        <label htmlFor="username">Mot de passe</label>
                        <input
                            type="password"
                            id="username"
                            name="password"
                            minLength="5"
                            placeholder="*******"
                            required={true}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-box password2-box">
                        <label htmlFor="username">Mot de passe</label>
                        <input
                            type="password2"
                            id="username"
                            name="password2"
                            minLength="5"
                            placeholder="*******"
                            required={true}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="error-container">
                        <span id="error-display">{error}</span>
                    </div>

                    <div className="form-submit">
                        {
                            isSubmitted
                                ? <button type="submit" disabled>Inscription</button>
                                : <button type="submit">Inscription</button>
                        }
                    </div>
                    <div className="links">
                        <div>
                            <a href='/login'>Se connecter</a>
                        </div>
                        <div>
                            <a href='/resetPassword'>Mot de passe oublié?</a>
                        </div>
                    </div>
                </form>

            </div>
        )
    }

}



const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {registerUser})(RegisterForm);
