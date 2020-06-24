export const RETRIEVE_USER = "RETRIEVE_USER";


export const setUser = (user) => {
    return {
        type: RETRIEVE_USER,
        payload: user,
    };
};


export const login = (username, password) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/login`, {
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
    const response = await fetch(`http://localhost:5000/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(setUser(res));
    }
};