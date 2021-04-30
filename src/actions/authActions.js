import {UPDATE_AUTH} from "./types";

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
