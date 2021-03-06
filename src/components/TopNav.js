import React from 'react';
import SiteInfo from './SiteInfo';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reset } from '../Muscle/muscleActions'

export default function TopNav() {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        dispatch(reset());
    }

    return (

        <div class="top-nav">
            <div class="header">
                <div class="glass"></div>
                <div class="header-content">
                    <header >
                        <Link class="header-link" to="/" onClick={handleClick}>
                            <h1 class="header-text">Mind </h1> <img class="header-logo" src="/images/logo.png" /> <h1 class="header-text"> Muscle</h1>
                        </Link>
                    </header>
                </div>
                <SiteInfo />
            </div>
        </div>
    );
}