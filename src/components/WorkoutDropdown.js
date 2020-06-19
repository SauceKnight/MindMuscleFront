import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function WorkoutDropdown() {

    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
        <Dropdown options={options} value={"Select a Workout"} placeholder="Select an option" />
    );
}