export const RETRIEVE_MUSCLE = "RETRIEVE_MUSCLE";
export const RESET_MUSCLE = "RESET_MUSCLE";


export const fetchMuscle = (muscle) => {
    return {
        type: RETRIEVE_MUSCLE,
        payload: muscle,
    };
};

export const resetMuscle = () => {
    return {
        type: RESET_MUSCLE,
    };
};


export const getMuscle = (muscleid) => async (dispatch) => {
    const response = await fetch(
        `http://localhost:5000/${muscleid}`
    );
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchMuscle(res));
    }
};

export const reset = () => async (dispatch) => {
    let res = {}
    dispatch(resetMuscle());

};


