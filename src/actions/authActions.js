import {UPDATE_AUTH} from "./types";
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
    } catch (err) {
        console.log(err);
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