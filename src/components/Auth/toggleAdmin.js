import React, {useEffect, useState} from 'react';
import '../../style/Form.scss';
import {useDispatch} from "react-redux";
import {registerUser, toggleIsAdmin} from "../../actions/authActions";


const ToggleAdmin = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(toggleIsAdmin())
            .then(() => {
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            Si vous voyez ce texte, une erreur est survenue...
        </div>
    )
}
export default ToggleAdmin