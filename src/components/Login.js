import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../User/userActions';
import { reset } from '../Muscle/muscleActions'

export default function Login() {
    const history = useHistory()
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
        dispatch(reset())
        history.push('/')
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div class="login-page">
            <div class="login-background">
                <div class="login-container">
                    <div class="login-form">
                        <h2 class="login-text">Welcome back Mind Muscler!</h2>
                        <form>
                            <div class="login-input">
                                <input type="text" name="" placeholder="Username" onChange={updateUsername} />
                            </div>
                            <div class="login-input">
                                <input type="password" name="" placeholder="Password" onChange={updatePassword} />
                            </div>
                            <div class="login-input">
                                <input type="submit" value="Login" onClick={handleSubmit} />
                            </div>
                            <p> Need an Account ? <Link to="/register">Click Here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}