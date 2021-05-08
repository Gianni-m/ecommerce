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
                            <h1>Nike<br/> chaussure de malade</h1>
                            <p>une paire de chaussure comme les autres avec une particularité, son prix oui son prix elle coûte extrèmement chère .</p>
                        </div>
                        <div className="button">
                            <a href="#">$115</a><a className="cart-btn" href="/">ADD
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