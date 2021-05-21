import "./Commandes.scss"
import React, { Fragment} from 'react';
import Product from "../Home/Product";


const ProfileCommands = () => {
    return (

        <Fragment>

            <div className="profile-commands-dashboard">
                <h2> Vos Commandes </h2>
                <Product/>
                <Product/>
                <Product/>





            </div>
        </Fragment>
    );
}

export default ProfileCommands;