import {Component} from "react";
import '../style/Footer.scss'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter,  } from "react-icons/ai";


class Footer extends Component {

render() {

return (

    <div className="footer-basic">
        <footer>
            <div className="social">
                <a href="#"><AiFillInstagram/></a>
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
            <p className="copyright">Les touristes © 2021</p>
        </footer>
    </div>

)

}
}


export default Footer