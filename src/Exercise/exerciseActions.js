import { API } from '../config';
export const RETRIEVE_EXERCISES = "RETRIEVE_EXERCISES";


export const fetchExercises = (exercises) => {
    return {
        type: RETRIEVE_EXERCISES,
        payload: exercises,
    };
};


export const getExercises = (workoutid) => async (dispatch) => {
    const response = await fetch(
        `${API}/${workoutid}/exercises`
    );
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchExercises(res));
    }
};