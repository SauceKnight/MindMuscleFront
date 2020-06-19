import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { getMuscle } from '../Muscle/muscleActions'
import { useHistory } from 'react-router-dom';

export default function WorkoutDropdown(props) {
    const workoutplans = useSelector(state => state.Muscle.workoutplans)
    const workouts = useSelector(state => state.WorkoutPlans)
    const options = workoutplans.map(name => workouts[name].name);
    const history = useHistory()

    const [workout, setWorkout] = useState("Select a workout");

    useEffect(() => {
        setWorkout("Select a workout")
        props.props("")
    }, [workouts]);

    const handleChange = (e) => {
        setWorkout(e.value)
        props.props(workouts[e.value].id)
        console.log(workouts[e.value].id)
        // console.log(props)
        // console.log(props)
        // console.log("test")
    }
    return (
        <Dropdown options={options} value={workout} onChange={handleChange} placeholder="Select an option" />
    );

}