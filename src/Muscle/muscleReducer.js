import {
    RETRIEVE_MUSCLE
} from "./muscleActions";

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_MUSCLE:
            return {
                ...action.payload.data,
            };

        default:
            return state;
    }
};

export default reducer;
