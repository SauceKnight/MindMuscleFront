import {
    RESET_USER, RETRIEVE_USER,
} from "./userActions";

import {
    RETRIEVE_EXERCISES,
} from "../Exercise/exerciseActions";

// import {
//     RESET_MUSCLE
// } from "../Muscle/muscleActions";

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_USER:
            localStorage.setItem("id", action.payload.id)
            localStorage.setItem("username", action.payload.username)
            return {
                ...action.payload,
            };
        case RETRIEVE_EXERCISES:
            return {
                ...state,
                ...action.payload.SelectedWorkout,
            };
        case RESET_USER:
            return {

            };

        default:
            return state;
    }
};

export default reducer;