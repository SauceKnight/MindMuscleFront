import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function Login() {
    const history = useHistory()

    const handleSubmit = (e) => {
        history.push('/')
    }

    return (
        <div class="login-page">
            <div class="login-background">
                <div class="login-container">
                    <div class="login-form">
                        <h2 class="login-text">Welcome back Mind Muscler!</h2>
                        <form>
                            <div class="login-input">
                                <input type="text" name="" placeholder="Username" />
                            </div>
                            <div class="login-input">
                                <input type="password" name="" placeholder="Password" />
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