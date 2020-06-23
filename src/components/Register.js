import React from 'react';
import { useHistory, Link } from 'react-router-dom'

export default function Register() {
    const history = useHistory()

    const handleSubmit = (e) => {
        history.push('/')
    }

    return (
        <div class="login-page">
            <div class="login-background">
                <div class="register-container">
                    <div class="login-form">
                        <h2 class="login-text">Welcome New Mind Muscler!</h2>
                        <form>
                            <div class="login-input">
                                <input type="text" name="" placeholder="Email" />
                            </div>
                            <div class="login-input">
                                <input type="text" name="" placeholder="Username" />
                            </div>
                            <div class="login-input">
                                <input type="password" name="" placeholder="Password" />
                            </div>
                            <div class="login-input">
                                <input type="submit" value="Login" onClick={handleSubmit} />
                            </div>
                            <p> Already have an account ? <Link to="/login">Click Here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}