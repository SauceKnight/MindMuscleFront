export const RETRIEVE_EXERCISES = "RETRIEVE_EXERCISES";


export const fetchExercises = (exercises) => {
    return {
        type: RETRIEVE_EXERCISES,
        payload: exercises,
    };
};


export const getExercises = (workoutid) => async (dispatch) => {
    const response = await fetch(
        `http://localhost:5000/${workoutid}/exercises`
    );
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchExercises(res));
    }
};