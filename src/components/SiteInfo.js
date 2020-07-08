import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { resetUser } from '../User/userActions'

export default function SiteInfo() {
    const siteCurtain = useRef(null);
    const history = useHistory();
    const user = useSelector(state => state.User)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        siteCurtain.current.classList.toggle('active')
    }
    const handleLogin = (e) => {
        history.push('/login')
    }
    const handleLogout = (e) => {
        dispatch(resetUser())
        localStorage.removeItem("id")
        localStorage.removeItem("username")
        history.push('/')
    }
    const handleMacros = (e) => {
        history.push('/macros')
    }

    const userState = (e) => {
        if (user.id === undefined) {
            return (<p class="login" onClick={handleLogin}>LogIn</p>)
        }
        else {
            return (<p class="login" onClick={handleLogout}>LogOut</p>)
        }
    }
    return (
        <>
            <p class="macros" onClick={handleMacros}>Macros</p>
            {userState()}
            <InfoOutlinedIcon class="icon" onClick={handleClick} />
            <div ref={siteCurtain} id="curtain">
                <span></span>
                <span></span>
                <span></span>
                <div class="siteinfo-content">
                    <h1>Welcome to Mind Muscle Connection!</h1>
                    <p >Mind Muscle Connection is all about helping users begin or expand on their fitness journey. When the site is first opened,
                    you'll see a 3d model appear with multiple circles set around the body. Each of these circlescan be clicked to
                    display a short description on the muscle selected. After the description a dropdown is present allowing you to select a workout
                    which will provide you with multiple exercises that are focused on the muscle that was selected.
                </p>

                </div>
            </div>
        </>
    );
}