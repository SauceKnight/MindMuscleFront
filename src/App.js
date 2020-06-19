import React, { useState, useEffect } from 'react';
import { Link, useHistory, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TopNav from './components/TopNav'
import WorkoutDropdown from './components/WorkoutDropdown'
import ExerciseExpansion from './components/ExerciseExpansion'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import { getMuscle } from './Muscle/muscleActions'

const drawerWidth = "50%"

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
    width: drawerWidth
  },
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  model: {
    width: "100%",
    height: "100%"
  }
}));

function App() {

  const modelViewer = document.querySelector('#model-demo');
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const muscle = useSelector(state => state.Muscle)
  // const orbitCycle = [
  //   "0deg 60deg -2m",
  //   modelViewer.cameraOrbit
  // ];
  const [value, updateValue] = useState("");

  const handleClick = (id) => {
    dispatch(getMuscle(id))
    history.push('/Chest')

    // modelViewer.setFieldOfView("0deg 0deg")
  }

  const handleClickLeg = (id) => {
    dispatch(getMuscle(id))
    history.push('/Leg')

    // modelViewer.setFieldOfView("0deg 0deg")
  }

  const setValue = (plan) => {
    updateValue(plan);
  }

  const Exercise = (e) => {
    if (value) {
      return (<ExerciseExpansion />)
    }
  }

  return (
    <div className={classes.root}>
      <TopNav />
      <Drawer className={classes.drawer}
        variant="permanent" classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar />
        <model-viewer id="model-demo" src="/3dModel/HumanModel.glb"
          camera-controls
          alt="A 3D model of a human" style={{ width: 100 + '%', height: 100 + '%' }}>
          <button slot="hotspot-chest" data-position="-0.38579194181026033 7.483364059519481 0.7423148470799796" data-normal="0 0 1" data-visibility-attribute="visible" onClick={() => handleClick(1)}></button>
          <button slot="hotspot-leg" data-position="0 0 0" data-normal="0 0 1" data-visibility-attribute="visible" onClick={() => handleClickLeg(2)}></button>

        </model-viewer>

      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <h1>{muscle.name}</h1>
        <p>{muscle.description}</p>
        {/* <WorkoutDropdown props={setValue} /> */}
        <Route exact path="/:musclename"
          render={(props) => <WorkoutDropdown props={setValue} />} />
        {/* <WorkoutDropdown props={setValue}/> */}
        {Exercise()}
        {/* <ExerciseExpansion /> */}
      </main>
    </div>
  );
}

export default App;
