import {LOGOUT, UPDATE_AUTH} from "./types";
import axios from "axios";

export const connectUser = () => async dispatch => {
    dispatch({
        type: UPDATE_AUTH,
        payload: {
            user: {
                username: 'marmoud',
                age: 12,
            }
        }
    })
};

export const loginUser = (email, password) => async  dispatch => {
    try {
        const user = await axios.post(`auth/login`, {
            email:email,
            password: password
        })
            .then((response) => response.data);
        dispatch(loginDispatch(user.data))
        localStorage.setItem("jwtToken",    JSON.stringify(user.data));
        return user;
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

export const registerUser = (username, email, password, password2) => async  dispatch => {
    try {
        const user = await axios.post(`auth/login`, {
            username:username,
            email:email,
            password: password,
            password2: password2
        })
            .then((response) => response.data);
        dispatch(registerDispatch(user.data))
        localStorage.setItem("jwtToken",    JSON.stringify(user.data));
        return user;
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
        console.log("ici")
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
