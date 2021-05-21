import "./Infos.scss"
import React, { Fragment} from 'react';
import { VscAdd } from "react-icons/vsc";



const ProfileInfos = () => {
    return (

        <Fragment>

            <div className="profile-infos">
                <h1 className="Header">Vos Informations de Livraison </h1>
                <button className="add">
                    <VscAdd/>
                </button>

                <div className="prems">

                    <div className="left-info">

                        <h2>Votre adresse : </h2>
                        <p>"128 rue du mur"</p>
                        <h2> Ville : </h2>
                        <p> Avignon </p>
                        <h2>Code Postal :</h2>
                        <p>84000</p>

                    </div>


                </div>


            </div>
        </Fragment>
    );
}

export default ProfileInfos;