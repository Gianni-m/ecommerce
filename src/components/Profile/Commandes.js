import "./Commandes.scss"
import React, { Fragment} from 'react';


const ProfileCommands = () => {
    return (

        <Fragment>

            <div className="profile-commands-dashboard">

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

export default ProfileCommands;