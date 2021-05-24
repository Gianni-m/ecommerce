import {LOGOUT, UPDATE_AUTH} from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const loginUser = (email, password) => async  dispatch => {
    try {
        const user = await axios.post(`auth/login`, {
            email:email,
            password: password
        })
            .then((response) => response.data);
        const decoded = jwt_decode(user.data);
        dispatch(loginDispatch(decoded))
        localStorage.setItem("jwtToken", user.data);
        return user;
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const toggleIsAdmin = () => async () => {
    try {
        return await axios.get(`api/profile/toggleIsAdmin`)
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const loginDispatch = (payload) => {
    return {
        type: UPDATE_AUTH,
        payload: {
            user: payload
        }
    }
}

export const registerUser = (username, email, password, firstName, lastName) => async  dispatch => {
    try {
        return await axios.post(`auth/register`, {
            username:username,
            email:email,
            password: password,
            firstName,
            lastName
        })
            .then((response) => response.data.data);
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const registerDispatch = (payload) => {
    return {
        type: UPDATE_AUTH,
        payload: {
            user: payload
        }
    }
}


export const logout = () => async dispatch => {
    try {
        localStorage.removeItem('jwtToken');
        dispatch(logoutDispatch())
    }
    catch (err) {
            console.log(err);
            throw err
        }

}

export const logoutDispatch = () => {
    return {
        type : LOGOUT,
        payload: null
    }
}
