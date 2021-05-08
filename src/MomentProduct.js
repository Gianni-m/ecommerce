import {Component} from "react";
import logo from "./assets/images/vet_03.jpg";
import {Link} from "react-router-dom";
import "./MomentProduct.scss"

class MomentProduct extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="wrapper">
                <div className="outer">
                    <div className="content animated fadeInLeft">
                        <span className="bg animated fadeInDown">EXCLUSIVE</span>
                        <div className="momentproduct-body">
                        <h1>Afro<br/> baseball hair</h1>
                        <p>Shadow your real allegiance to New York's Pirate radio with this cool cap featuring the
                            Graphic Know Wave logo.</p>
                    </div>
                        <div className="button">
                            <a href="#">$115</a><a className="cart-btn" href="#">ADD
                            TO CART</a>
                        </div>

                    </div>
                    <img src={logo} className="animated-fadeInRight"/>
                </div>
            </div>

        )


    }

}

export default MomentProduct