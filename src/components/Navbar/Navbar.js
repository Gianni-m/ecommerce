import React, {useState} from 'react';
//import "../../App.scss";
import "./Navbar.scss"
import logo from '../../assets/images/vet_03.jpg'

import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

import {Link} from 'react-router-dom';
import Dropdown from './Dropdown'
import NavbarSearchbar from "./NavbarSearchbar";
import {useSelector} from "react-redux";





function Navbar() {

    const authStore = useSelector(state => state.auth);
    const {isAuthenticated, user} = authStore

    const [click, setClick] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);


    const close = () => setDropdown1(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false);
        } else {
            setDropdown1(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false);
        } else {
            setDropdown1(false);
        }
    };

    const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(true);
        }
    };

    const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(false);
        }
    };

    const onMouseEnter3 = () => {
        if (window.innerWidth < 960) {
            setDropdown3(false);
        } else {
            setDropdown3(true);
        }
    };

    const onMouseLeave3 = () => {
        if (window.innerWidth < 960) {
            setDropdown3(false);
        } else {
            setDropdown3(false);
        }
    };

    return(
        <>
            <nav className = "navbar">
                <div className='icon'>


                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="logo du site"/>
                </Link>
                </div>


                <div className='nav-links'>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'} id={click ? "hidden" : "" }>

                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to ='/homme' className='nav-links' onClick={close}>
                            Homme
                        </Link>
                        {dropdown1 && <Dropdown/>}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                        <Link to='/femme' className='nav-links' onClick={close}>
                            Femme
                        </Link>
                        {dropdown2 && <Dropdown/>}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                        <Link to ='/enfant' className='nav-links' onClick={close}>
                            Enfant
                        </Link>
                        {dropdown3 && <Dropdown/>}
                    </li>

                </ul>
                </div>
                <NavbarSearchbar/>

                <div className='user-actions'>
                    <div className='action action-profile'>
                        {
                            isAuthenticated ?
                                <Link to='/profile' className="logo">
                                    <VscAccount className="loginlogo"/>
                                    {'Bonjour ' + user.username}
                                </Link>
                                :
                                <Link to='/login' className="logo">
                                    <VscAccount className="loginlogo"/>
                                    S'identifier
                                </Link>
                        }
                    </div>
                    <div className='action action-cart'>
                        <Link to='/cart' className="logo">
                            <AiOutlineShoppingCart className="panierlogo"/>
                            Mon panier
                        </Link>
                    </div>
                </div>





            </nav>
        </>
    )

}


export default Navbar
