import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ReviewForm from './ReviewForm'
import DisplayReviews from './DisplayReviews';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "10px"
    },
}));

export default function SimpleExpansionPanel(props) {
    const classes = useStyles();
    const exercises = useSelector(state => state.Exercises)
    const muscle = useSelector(state => state.Muscle)
    const workoutplan = useSelector(state => state.WorkoutPlans)

    const totalReps = (sets, reps) => {
        let i = 0;
        let repeat = []
        while (i < sets) {
            repeat.push(1)
            i++;
        }
        return (repeat.map(rep => (
            <span>{reps}</span>
        )))
    };

    if (Object.keys(exercises).length === 0) {
        return null;
    }

    return (
        <div className={classes.root}>
            {/* <p>{workoutplan[Object.values(exercises)[0].WorkoutName].description}</p> */}

            {Object.values(exercises).map(exercise => (
                <div class={`exercise-container exercise-container-${exercise.difficulty.toLowerCase()}`}>
                    <div class="card">
                        <div class="exerciseImg">
                            <img src={`/images/${muscle.name.toLowerCase()}.png`} />
                        </div>
                        <div class="exercise-content">
                            <h2>{exercise.name}</h2>
                            <div class="exercise-sets">
                                <h3>Sets :</h3>
                                <span>{exercise.sets}</span>
                            </div>
                            <div class="exercise-reps">
                                <h3>Reps :</h3>
                                {totalReps(exercise.sets, exercise.reps)}
                            </div>
                        </div>
                    </div>
                </div>

            ))}
            <div class="review-section">
                <h2>Reviews</h2>
                <ReviewForm />
            </div>
            <DisplayReviews />
        </div>
    );
}