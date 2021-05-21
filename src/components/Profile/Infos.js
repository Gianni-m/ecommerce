import "./Infos.scss"
import React, { Fragment} from 'react';


const Infos = () => {
    return (

        <Fragment>

            <div className="infos">
                <h2 className="Header">Vos Informations </h2>
                <div className="profile-left">
                    <p>
                        <a href="/profile">
                            Mon Profil
                        </a>
                    </p>
                    <p>
                        <a href="/profile/Infos">
                            Mes Infos
                        </a>
                    </p>
                    <p>
                        <a href={"/profile/Commandes"}>
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

export default Infos;