import "./Profile.scss"
import React, {Fragment, useState} from 'react';
import ProfileSidebar from "./ProfileSidebar";
import { VscEdit } from "react-icons/vsc";
import ProductAddForm from "../productManagement/stockDashboard/AddProduct/ProductAddForm";




const Profile = () => {
    const [addWindow, setAddWindow] = useState(null);
    const[state, setState] = useState(true);

    function toggleEditorWindow(state) {
        console.log("?")
        console.log(state)
        if(state) {
            setAddWindow(
                <input className="edit"
                />

            )
            setState(false);
        } else {
            console.log('close')
            setAddWindow(null);
            setState(true);
        }

    }
    const [addWindow1, setAddWindow1] = useState(null);
    const[state1, setState1] = useState(true);

    function toggleEditorWindow1(state1) {
        console.log("?")
        console.log(state1)
        if(state1) {
            setAddWindow1(
                <input className="edit"
                />
            )
            setState1(false);
        } else {
            console.log('close')
            setAddWindow1(null);
            setState1(true);
        }
    }

    const [addWindow2, setAddWindow2] = useState(null);
    const[state2, setState2] = useState(true);

    function toggleEditorWindow2(state2) {
        console.log("?")
        console.log(state2)
        if(state2) {
            setAddWindow2(
                <input className="edit"
                />
            )
            setState2(false);
        } else {
            console.log('close')
            setAddWindow2(null);
            setState2(true);
        }
    }

    const [addWindow3, setAddWindow3] = useState(null);
    const[state3, setState3] = useState(true);

    function toggleEditorWindow3(state3) {
        console.log("?")
        console.log(state3)
        if(state3) {
            setAddWindow3(
                <input className="edit"
                />
            )
            setState3(false);
        } else {
            console.log('close')
            setAddWindow3(null);
            setState3(true);
        }
    }
    return (



        <Fragment>
            <h2 className="Header">Votre Profil </h2>

            <div className="profile">
                <ProfileSidebar/>

                    <div className="profile-coords">
                        <h3 >Votre Nom :</h3>
                        <p>Pichard</p>
                        <button className= "edit" onClick={() => toggleEditorWindow(state)}>


                            <VscEdit />

                        </button>
                        {addWindow}

                        <h3 >Votre Prénom :</h3>
                        <p>Benoit</p>
                        <button className= "edit" onClick={() => toggleEditorWindow1(state1)}>


                            <VscEdit />

                        </button>
                        {addWindow1}

                        <h3 >Votre adresse mail :</h3>
                        <p>BenoitP@hotmail.fr</p>
                         <button className= "edit" onClick={() => toggleEditorWindow2(state2)}>


                        <VscEdit />

                        </button>
                        {addWindow2}
                        <h3 >Votre numéro de téléphone :</h3>
                        <p>07 01 02 03 04</p>
                        <button className= "edit" onClick={() => toggleEditorWindow3(state3)}>


                        <VscEdit />

                        </button>
                        {addWindow3}
                    </div>
            </div>








        </Fragment>
    );
}

export default Profile;