import {useDispatch} from "react-redux";
import {logout} from "../../actions/authActions";
import React, {useEffect} from "react";
import '../Navbar/Navbar.scss'



const LogoutForm = () => {



    const dispatch = useDispatch()


    useEffect(() => {
        function logoutUser() {
            dispatch(logout())
                .then(() => {
                    window.location.href = "/home";
                })
        }
        logoutUser()
    })
    return (<h1>aurevoir</h1>)
}

export default LogoutForm

