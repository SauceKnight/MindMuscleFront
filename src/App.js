import React, { useState, useEffect } from 'react';
import { Link, useHistory, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TopNav from './components/TopNav'
import ExerciseExpansion from './components/ExerciseExpansion'
import { getMuscle } from './Muscle/muscleActions'
import { getExercises } from './Exercise/exerciseActions'
import MainPage from './components/MainPage'
import Login from './components/Login'
import Macros from './components/Macros';
import Register from './components/Register'

function App() {

  const history = useHistory();
  const dispatch = useDispatch();
  const muscle = useSelector(state => state.Muscle)

  const [value, updateValue] = useState("");

  useEffect(() => {
    if (value) {
      dispatch(getExercises(value))
    }
  }, [value]);

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
    < >
      <TopNav />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/macros" component={Macros} />
        <MainPage />
      </Switch>
    </>
  );
}

export default App;
