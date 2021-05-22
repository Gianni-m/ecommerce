import "./Profile.scss"
import React, {Fragment, useState} from 'react';
import ProfileSidebar from "./ProfileSidebar";
import { VscEdit } from "react-icons/vsc";
import ProductAddForm from "../productManagement/stockDashboard/AddProduct/ProductAddForm";
import {useSelector} from "react-redux";




const Profile = () => {
    const authReducer = useSelector(store => store.auth);
    const {user} = authReducer;

    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState(user.username || undefined);
    const [firstName, setFirstName] = useState(user.firstName || undefined);
    const [lastName, setLastName] = useState(user.lastName || undefined);
    const [email, setEmail] = useState(user.email || undefined)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || undefined)

    return (



        <Fragment>
            <h2 className="Header">Votre Profil </h2>

            <div className="profile">
                    <form className="profile-coords">
                        <div className='profile-field'>
                            <label htmlFor='username'>Nom d'utilisateur:</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={!editing}
                                id='username'
                                name='username'
                            />
                        </div>
                        <div className='profile-field'>
                            <label htmlFor='lastName'>Nom:</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                disabled={!editing}
                                id='lastName'
                                name='lastName'
                            />
                        </div>
                        <div className='profile-field'>
                            <label htmlFor='firstName'>Prénom:</label>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                disabled={!editing}
                                id='firstName'
                                name='firstName'
                            />
                        </div>

                        <div className='profile-field'>
                            <label htmlFor='email'>Email:</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!editing}
                                id='email'
                                name='email'
                            />
                        </div>
                        <div className='profile-field'>
                            <label htmlFor='phoneNumber'>Numéro de téléphone:</label>
                            <input
                                type='text'
                                value={phoneNumber}
                                placeholder='phone number'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                disabled={!editing}
                                id='phoneNumber'
                                name='phoneNumber'
                            />
                        </div>
                        {
                            editing
                                ? <button type='submit'>Mettre a jour</button>
                                : null
                        }
                    </form>
                <div className='edit'>
                    <button className= "edit" onClick={() => setEditing(true)}>
                        <VscEdit />
                    </button>
                </div>

            </div>
        </Fragment>
    );
}

export default Profile;