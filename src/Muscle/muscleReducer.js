import {
    RETRIEVE_MUSCLE, RESET_MUSCLE
} from "./muscleActions";

const initialState = {
    workoutplans: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_MUSCLE:
            return {
                ...action.payload.data,
            };
        case RESET_MUSCLE:
            return {
                workoutplans: []
            };

        default:
            return state;
    }
};

export default reducer;
