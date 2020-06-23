import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    headingbeginner: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: "white"
        // backgroundColor: "red"
    },
    headingintermediate: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: "black"
        // backgroundColor: "red"
    },
    headingadvanced: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: "white"
        // backgroundColor: "red"
    },
    dropdown: {
        marginBottom: 15,
        borderRadius: 4,
        boxShadow: "10px"
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
}));

export default function SimpleExpansionPanel(props) {
    const classes = useStyles();
    const exercises = useSelector(state => state.Exercises)
    const muscle = useSelector(state => state.Muscle)
    const workoutplan = useSelector(state => state.WorkoutPlans)

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
                                <span>{exercise.reps}</span>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}