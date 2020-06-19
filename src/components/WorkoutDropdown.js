import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function WorkoutDropdown(props) {
    const options = [
        'one', 'two', 'three'
    ];
    const [workout, setWorkout] = useState("Select a workout");

    const handleChange = (e) => {
        setWorkout(e.value)
        props.props(e.value)
        // console.log(props)
        // console.log(props)
        // console.log("test")
    }

    return (
        <Dropdown options={options} value={workout} onChange={handleChange} placeholder="Select an option" />
    );
}