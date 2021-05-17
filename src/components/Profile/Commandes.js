import "./Commandes.scss"
import React, { Fragment} from 'react';


const Commandes = () => {
    return (

        <Fragment>

            <div className="profile">
                <h2 className="Header">Vos Commandes </h2>
                <div className="profile-left">
                    <p>
                        <a href="/profile">npm
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
                <div className="Commandes">
                    <div className="cart-info">
                        <p> Subtotal (0) items</p>
                        <p> 10.99 €</p>
                    </div>
                    <div>
                        <button> Proceed to Checkout</button>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default Commandes;