import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../User/userActions';
import { reset } from '../Muscle/muscleActions'

export default function Register() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(email, username, password))
        dispatch(reset())
        history.push('/')
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div class="login-page">
            <div class="login-background">
                <div class="register-container">
                    <div class="login-form">
                        <h2 class="login-text">Welcome New Mind Muscler!</h2>
                        <form>
                            <div class="login-input">
                                <input type="text" name="" placeholder="Email" onChange={updateEmail} />
                            </div>
                            <div class="login-input">
                                <input type="text" name="" placeholder="Username" onChange={updateUsername} />
                            </div>
                            <div class="login-input">
                                <input type="password" name="" placeholder="Password" onChange={updatePassword} />
                            </div>
                            <div class="login-input">
                                <input type="submit" value="Register" onClick={handleSubmit} />
                            </div>
                            <p> Already have an account ? <Link to="/login">Click Here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}