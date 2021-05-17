import {connect} from "react-redux";
import {logout} from "../../actions/authActions";
import {GrLogout} from "react-icons/gr";
import React from "react";
import '../Navbar/Navbar.scss'



const LogoutForm = () => {

 const logout = () => {

        localStorage.removeItem('jwtToken');
        window.location.href = "/home";
    }


        return(
            <GrLogout className="logoutlogo" onClick={logout}/>

        )



}

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {logout})(LogoutForm);

