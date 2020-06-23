import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function CategoryButtons(props) {
    const male = useRef(null);
    const gain = useRef(null);
    const lose = useRef(null);
    const [i, setI] = useState(1)
    const [j, setJ] = useState(1)
    const handleClick = (e) => {
        male.current.classList.toggle('male')
        setI(i + 1);
        console.log(i)
        if (i % 2 === 1) {
            return props.updategender("Female")
        }
        else {
            return props.updategender("Male")
        }
    }



    const handleClickGain = (e) => {
        gain.current.classList.toggle('gain')
        lose.current.classList.toggle('lose-color')
        setJ(j + 1);
        console.log(j)
        if (j % 2 === 1) {
            return props.updategoal("Lose")
        }
        else {
            return props.updategoal("Gain")
        }
    }

    useEffect(() => {
        lose.current.classList.toggle('lose-color');
    }, []);
    return (
        <>
            <div class="gender-div">
                <p ref={male} class="male">Male</p> <input class="gender-button" type="checkbox" name="" onClick={handleClick} /><p class="female">Female</p>
            </div>
            <h2>Select Gain or Lose Weight.</h2>
            <div class="weight-div">
                <p ref={gain} class="gain">Gain</p> <input class="weight-button" type="checkbox" name="" onClick={handleClickGain} /><p ref={lose} class="lose-color lose">Lose</p>
            </div>
        </>

    );
}