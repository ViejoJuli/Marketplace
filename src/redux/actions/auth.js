import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '.types'

import axios from 'axios'

export const signup = (first_name, last_name, email, password, re_password) => async dispatch => {
    // dispatch({
    //     type: SET_AUTH_LOADING
    // });

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        re_password
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);

        if (res.status === 201) {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data
            });
            dispatch(setAlert('Te enviamos un correo, por favor activa tu cuenta. Revisa el correo de spam', 'green'))
        } else {
            dispatch({
                type: SIGNUP_FAIL
            });
            dispatch(setAlert('Error al crear cuenta', 'red'));
        }
        // dispatch({ 
        //     type: REMOVE_AUTH_LOADING
        // });
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        });
        // dispatch({
        //     type: REMOVE_AUTH_LOADING
        // });
        // dispatch(setAlert('Error conectando con el servidor, intenta mas tarde.', 'red'));
    }
};
