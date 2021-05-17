import {connect, useDispatch} from "react-redux";
import {logout} from "../../actions/authActions";
import {GrLogout} from "react-icons/gr";
import React, {useEffect} from "react";
import '../Navbar/Navbar.scss'



const LogoutForm = () => {



    const dispatch = useDispatch()

    const degage = async () => {
        await dispatch(logout())
        window.location.href = "/home";
    }
    useEffect(() => degage())
    return (<h1>aurevoir</h1>)
}

export default LogoutForm

