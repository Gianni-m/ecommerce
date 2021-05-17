import "./Infos.scss"
import React, { Fragment} from 'react';


const Infos = () => {
    return (

        <Fragment>

            <div className="infos">
                <h2 className="Header">Vos Informations </h2>
                <div className="cart-left">
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
                <div className="cart-right">
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

export default Infos;