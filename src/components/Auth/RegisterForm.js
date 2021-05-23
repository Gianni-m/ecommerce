import React, {useState} from 'react';
import '../../style/Form.scss';
import {useDispatch} from "react-redux";
import {registerUser} from "../../actions/authActions";


const RegisterForm = (props) => {
    console.log(props)
    const dispatch = useDispatch();
    const [submitted, setSubmitted]= useState(false)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('')
    const [error, setError] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        if(!submitted) {
            if(username.length < 2) {
                setError("username incorrect")
            }
            else if(firstName.length < 5 ) {
                setError('prénom incorrect')
            }
            else if(lastName.length < 5) {
                setError('nom incorrect')
            }
            else if(email.length < 3) {
                setError("email incorrect")
            }
            else if(password.length < 5) {
                setError("longueur du mot de passe insuffisante")
            }
            else if(password !== passwordCheck) {
                setError("les 2 mots de passes ne correspondent pas")
            } else {
                document.querySelector('#error-display').classList.remove('show')
                await dispatch(registerUser(username, email, password, firstName, lastName))
                    .then(() => props.history.push('/home'))
                    .catch((err) => {
                        setError('erreur de requête')
                        document.querySelector('#error-display').classList.add('show')
                    })
                setSubmitted(false)
            }
        }
    }

    return(
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
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
                        onChange={(e) => setUsername(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='example@email.com'
                    />
                </div>
                <div className="input-box username-box">
                    <label htmlFor="username">Nom</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required={true}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Nom'
                    />
                </div>
                <div className="input-box username-box">
                    <label htmlFor="username">Prénom</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required={true}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Prénom'
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
                        onChange={(e) => setPassword(e.target.value)}
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
                        onChange={(e) => setPasswordCheck(e.target.value)}
                    />
                </div>
                <div className="error-container">
                    <span id="error-display">{error}</span>
                </div>

                <div className="form-submit">
                    {
                        submitted
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
export default RegisterForm