import React, {Component } from 'react';
import '../../style/Form.scss';
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            email: '',
            password: '',
            error: '',
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
        const {isSubmitted, email, password} = this.state
        if(!isSubmitted) {
            if(email.length < 3) {
                this.setState({error: "email incorrect"})
            }
            else if(password.length < 5) {
                this.setState({error: "longueur du mot de passe insuffisante"})
            } else {
                this.setState({isSubmitted: true, error: ''})
                document.querySelector('#error-display').classList.remove('show')
                await this.props.loginUser(email, password)
                    .then(() => this.props.history.push('/home'))
                    .catch((err) => {
                        this.setState({error: 'Email ou mot de passe incorrect'})
                        document.querySelector('#error-display').classList.add('show')
                    })
                this.setState({isSubmitted: false})
            }
        }
    }

    render() {
        const {isSubmitted, error} = this.state

        return (
            <div className="auth-form">

                <form onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <h2>Connexion</h2>
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
                    <div className="error-container">
                        <span id="error-display">{error}</span>
                    </div>

                    <div className="form-submit">
                        {
                            isSubmitted
                                ? <button type="submit" disabled>Connexion</button>
                                : <button type="submit">Connexion</button>
                        }
                    </div>
                    <div className="links">
                        <div>
                            <a href='/register'>Créer un compte</a>
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
export default connect(mapStateToProps, {loginUser})(LoginForm);
