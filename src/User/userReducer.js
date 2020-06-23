import {
    RETRIEVE_USER
} from "./userActions";

import {
    RETRIEVE_EXERCISES
} from "../Exercise/exerciseActions";

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_USER:
            return {
                ...action.payload,
            };
        case RETRIEVE_EXERCISES:
            return {
                ...state,
                ...action.payload.SelectedWorkout,
            };

        default:
            return state;
    }
};

export default reducer;