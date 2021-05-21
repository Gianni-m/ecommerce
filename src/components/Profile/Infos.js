import "./Infos.scss"
import React, { Fragment} from 'react';
import { VscEdit } from "react-icons/vsc";



const ProfileInfos = () => {
    return (

        <Fragment>

            <div className="profile-infos">
                <h2 className="Header">Vos Informations de Livraison </h2>
                <div className="profile-coords">
                    <h3 >Votre adresse :</h3>
                    <p>128 rue Victor Hugo </p>
                    <h3 >Ville : </h3>
                    <p>Avignon</p>
                    <button className="edit">
                        <VscEdit />
                    </button>
                    <h3 >Code Postal : </h3>
                    <p>84000</p>
                    <button className="edit">
                        <VscEdit />
                    </button>
                </div>


            </div>
        </Fragment>
    );
}

export default ProfileInfos;