import React, { useState, useEffect } from 'react';
import { Link, useHistory, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import WorkoutDropdown from './WorkoutDropdown'
import ExerciseExpansion from './ExerciseExpansion'
import { getMuscle } from '../Muscle/muscleActions'
import { getExercises } from '../Exercise/exerciseActions'
import Footer from './Footer'

function MainPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const muscle = useSelector(state => state.Muscle)
    const workoutplans = useSelector(state => state.WorkoutPlans)

    const [value, updateValue] = useState("");

    useEffect(() => {
        if (value) {
            dispatch(getExercises(value))
        }
    }, [value]);

    const handleClick = (id) => {
        dispatch(getMuscle(id))
        history.push('/Chest')
    }

    const handleClickLeg = (id) => {
        dispatch(getMuscle(id))
        history.push('/Leg')
    }

    const handleClickArm = (id) => {
        dispatch(getMuscle(id))
        history.push('/Arm')
    }

    const handleClickAbs = (id) => {
        dispatch(getMuscle(id))
        history.push('/Abs')
    }

    const handleClickBack = (id) => {
        dispatch(getMuscle(id))
        history.push('/Back')
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
        <div class="site-content">
            <div class="main">
                <div class="model">
                    <model-viewer class="model-viewer" id="model-demo" src="/3dModel/HumanModel.glb"
                        camera-controls interaction-policy="allow-when-focused" exposure="0.15"
                        alt="A 3D model of a human" style={{ width: 100 + '%', height: 90 + '%' }}>
                        <button slot="hotspot-chest" data-position="-0.38579194181026033 7.483364059519481 0.7423148470799796" data-normal="0 0 1" data-visibility-attribute="visible" onClick={() => handleClick(1)}></button>
                        <button slot="hotspot-leg" data-position="-0.6599947969123182 3.9953953853144184 0.7292097855047976" data-normal="0 0 1" data-visibility-attribute="visible" onClick={() => handleClickLeg(2)}></button>
                        <button slot="hotspot-arm" data-position="-1.9107334600018193 7.162684477170019 0.03044192806397142" data-normal="0 0 1" data-visibility-attribute="visible" onClick={() => handleClickArm(3)}></button>
                        <button slot="hotspot-abs" data-position="-0.18321636019003953 5.929081904798455 0.8479404709631855" data-normal="0 0 1" data-visibility-attribute="visible" onClick={() => handleClickAbs(4)}></button>
                        <button slot="hotspot-back" data-position="0.21910041126406518 7.521659078806538 -0.9539519802384879" data-normal="0 0 1" data-visibility-attribute="visible" onClick={() => handleClickBack(5)}></button>
                    </model-viewer>
                </div>
                <div class="muscle-content">
                    <h1>{muscle.name}</h1>
                    <p>{muscle.description}</p>
                    <Route exact path="/:musclename"
                        render={(props) => <WorkoutDropdown setValue={setValue} {...props} />} />
                    {Exercise()}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;
