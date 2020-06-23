import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useHistory } from 'react-router-dom';
import { getMuscle } from '../Muscle/muscleActions'



export default function WorkoutDropdown(props) {
    const workoutplans = useSelector(state => state.Muscle.workoutplans)
    const workouts = useSelector(state => state.WorkoutPlans)
    const options = workoutplans.map(name => workouts[name].name);
    const exercises = useSelector(state => state.Exercises)
    const history = useHistory()
    const dispatch = useDispatch()
    const { musclename } = props.match.params;
    const muscle_id = { "Chest": 1, "Leg": 2 }
    const [workout, setWorkout] = useState("Select a workout");

    useEffect(() => {
        setWorkout("Select a workout")
        props.setValue("")
        if (Object.keys(workouts).length === 0) {
            console.log("conditional hit")
            dispatch(getMuscle(muscle_id[musclename]))
        }
    }, [workouts]);

    const handleChange = (e) => {

        props.setValue(workouts[e.value].id)
        setWorkout(e.value)
    }

    const description = (e) => {
        if (workouts[workout] === undefined) {
            return null
        }
        let avg = 0;
        Object.values(exercises).map(exercise => {
            if (exercise.difficulty === "Beginner") {

                return avg += 1
            }
            else if (exercise.difficulty === "Intermediate") {
                return avg += 2
            }
            else {
                return avg += 3
            }
        })
        console.log(avg)
        avg = avg / Object.keys(exercises).length;
        let style
        if (avg <= 1) {
            style = "beginner"
        }
        if (avg > 1 && avg <= 2) {
            style = "intermediate"
        }
        if (avg > 2 && avg <= 3) {
            style = "advanced"
        }
        console.log(avg)
        if (workout !== "Select a workout") {
            return <p class={`description-${style}`}>{workouts[workout].description}</p>
        }
    }

    return (
        <>
            <div class="dropdown">
                <Dropdown options={options} value={workout} onChange={handleChange} placeholder="Select an option" />
            </div>
            {description()}
        </>
        // placeholderClassName changes actual placeholder text
    );

}