import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import TopNav from './components/TopNav'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';

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
  // const orbitCycle = [
  //   "0deg 60deg -2m",
  //   modelViewer.cameraOrbit
  // ];

  const handleClick = (modelViewer) => {
    history.push('/Chest')

    // modelViewer.setFieldOfView("0deg 0deg")
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
          alt="A 3D model of an astronaut" style={{ width: 100 + '%', height: 100 + '%' }}>
          <button slot="hotspot-chest" data-position="-0.38579194181026033 7.483364059519481 0.7423148470799796" data-normal="0 0 1" data-visibility-attribute="visible" onClick={handleClick}></button>

        </model-viewer>

      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <p>Hello</p>

      </main>
    </div>
  );
}

export default App;
