import {
    RETRIEVE_EXERCISES
} from "../Exercise/exerciseActions";

import {
    RETRIEVE_MUSCLE, RESET_MUSCLE
} from "../Muscle/muscleActions";

import { POST_REVIEW } from './reviewActions'

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_EXERCISES:
            return {
                ...action.payload.review,
            };
        case POST_REVIEW:
            return {
                ...state,
                ...action.payload.review,
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