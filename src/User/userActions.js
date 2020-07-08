import { API } from '../config';
export const RETRIEVE_USER = "RETRIEVE_USER";
export const RESET_USER = "RESET_USER";


export const setUser = (user) => {
    return {
        type: RETRIEVE_USER,
        payload: user,
    };
};

export const resetUser = () => {
    return {
        type: RESET_USER,
    };
};


export const login = (username, password) => async (dispatch) => {
    const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(setUser(res));
    }
};

export const register = (email, username, password) => async (dispatch) => {
    const response = await fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(setUser(res));
    }
};

export const logout = () => async (dispatch) => {
    let res = {}
    dispatch(resetUser());

};