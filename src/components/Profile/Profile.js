import "./Profile.scss"
import React, { Fragment} from 'react';



const Profile = () => {
    return (

        <Fragment>
            <h2 className="Header">Votre Profil </h2>

            <div className="profile">

                <div className="profile-left">
                    <p>
                        <a href="/profil">
                            Mon Profil
                        </a>
                    </p>
                    <p>
                    <a href="/profil/infos">
                        Mes Infos
                    </a>
                    </p>
                    <p>
                    <a href={"/profil/commandes"}>
                        Mes commandes
                    </a>
                    </p>







                </div>

                <div className="profile-right">


                </div>
            </div>
        </Fragment>
    );
}

export default Profile;