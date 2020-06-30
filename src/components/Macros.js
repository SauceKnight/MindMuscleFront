import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CategoryButtons from './CategoryButtons'

export default function Macros() {
    const history = useHistory()
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [active, setActive] = useState(0);
    const [gender, setGender] = useState("Male");
    const [goal, setGoal] = useState("Gain");
    const [calories, setCalories] = useState("");

    useEffect(() => {
        setCalories("")
    }, [gender, goal]);

    const handleCalculate = (e) => {
        if (weight && height && age && (gender === "Male")) {
            return setCalories(66 + (6.2 * weight) + (12.7 * height) - (6.76 * age) + active);
        }
        else if (weight && height && age && (gender === "Female")) {
            return setCalories(655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age) + active);
        }
        else {
            return null;
        }
    }

    const updateAge = (e) => {
        setAge(parseInt(e.target.value));
    }

    const updateWeight = (e) => {
        setWeight(parseInt(e.target.value));
    }

    const updateHeight = (e) => {
        setHeight(parseInt(e.target.value));
    }

    const updateActive = (e) => {
        setActive(parseInt(e.target.value));
    }
    const updateGender = (mof) => {
        setGender(mof);
    }
    const updateGoal = (gol) => {
        setGoal(gol);
    }

    const calorieResult = (e) => {
        if (calories) {
            return (
                <div class="macros-input ">
                    <p class="macros-result">You need to burn these many calories {calories}. You are a {gender}. You want to {goal} weight.
                    </p>
                </div>)
        }
        else {
            return null
        }
    }


    return (
        <section class="macros-page">
            <div class="macros-container">
                <div class="macros-genderinfo">
                    <div>
                        <h2>Please Select male or female.</h2>
                        <span><CategoryButtons updategender={updateGender} updategoal={updateGoal} /></span>
                        <ul class="macros-info">
                            <li>
                                <span>We use gender and your goal of losing or gaining weight to calculate how many calories you need to burn or intake.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="macros-user-form-background" />
                <div class="macros-user-form">
                    <h2> Please fill out information to inform you on your macros.</h2>
                    <div class="macros-form-data">
                        <div class="macros-input w50">
                            <input type="text" name="" onChange={updateHeight} required />
                            <span onChange={updateHeight}>Height(inches)</span>
                        </div>
                        <div class="macros-input w50">
                            <input type="text" name="" required onChange={updateWeight} />
                            <span>Weight</span>
                        </div>
                        <div class="macros-input w50">
                            <input type="text" name="" required onChange={updateAge} />
                            <span>Age</span>
                        </div>
                        <div class="macros-input w50">
                            <input type="text" name="" required onChange={updateActive} />
                            <span>ActiveCalories</span>
                        </div>
                        <div class="macros-input w100">
                            <input type="submit" value="Calculate" onClick={handleCalculate} />
                        </div>
                        {calorieResult()}
                    </div>
                </div>
            </div>
        </section >
    );
}