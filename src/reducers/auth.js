import {UPDATE_AUTH} from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: {},
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_AUTH: return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user
        }
        default:
            return state;
    }
}