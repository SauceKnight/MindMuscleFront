import {
    RETRIEVE_MUSCLE, RESET_MUSCLE
} from "../Muscle/muscleActions";

const initialState = {

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_MUSCLE:
            return {
                ...action.payload.WorkoutPlans,
            };
        case RESET_MUSCLE:
            return {

            };
        default:
            return state;
    }
};

export default reducer;
