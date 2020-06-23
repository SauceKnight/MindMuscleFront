import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import muscleReducer from '../Muscle/muscleReducer'
import workoutReducer from '../WorkoutPlan/workoutReducer'
import exerciseReducer from '../Exercise/exerciseReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    Muscle: muscleReducer,
    WorkoutPlans: workoutReducer,
    Exercises: exerciseReducer

});

const configureStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
};

export default configureStore;
