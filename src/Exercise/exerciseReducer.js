import {
    RETRIEVE_EXERCISES
} from "./exerciseActions";

import {
    RETRIEVE_MUSCLE, RESET_MUSCLE
} from "../Muscle/muscleActions";

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_EXERCISES:
            return {
                ...action.payload.data,
            };
        case RETRIEVE_MUSCLE:
            return {

            };
        case RESET_MUSCLE:
            return {

            };

        default:
            return state;
    }
};

export default reducer;