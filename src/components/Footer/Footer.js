import {Fragment} from "react";
import './Footer.scss'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter,  } from "react-icons/ai";


const Footer = () => {

    return (
        <Fragment>
            <div className="social">
                <a href="/"><AiFillInstagram/></a>
                <a href="/"><AiOutlineTwitter/> </a>
                <a href="/"> <AiFillFacebook/> </a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="/">Services</a></li>
                <li className="list-inline-item"><a href="/">About</a></li>
                <li className="list-inline-item"><a href="/">Terms</a></li>
                <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
            </ul>
            <div>
                <p className="copyright">Les touristes © 2021</p>
            </div>
        </Fragment>
    )

}


export default Footer