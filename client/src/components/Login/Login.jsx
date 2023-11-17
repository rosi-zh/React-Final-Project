import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTop from "../PageTop/PageTop";
import styles from "./Login.module.css";

import * as authService from '../../services/authService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailInputHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordInputHandler = (e) => {
        setPassword(e.target.value);
    }

    const loginFormHandler = async (e) => {    
        e.preventDefault();
        
        await authService.login(email, password);

        navigate('/');
    }

    return (
        <>
            <PageTop title="Login" />

            <div className="container text-center">
                <div className="card mx-4 mx-md-5 form-box">
                    <div className="card-body py-5 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">

                                <div className="text-center mb-4">
                                    <h2 className="section-heading text-uppercase">Login</h2>
                                    <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                                </div>

                                <form onSubmit={loginFormHandler}>
                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="email">Email address</label>
                                        <input type="email" id="email" name="email" className="form-control" value={email} onChange={emailInputHandler}/>
                                    </div>

                                    {/* <div className="invalid-feedback">*Email is required.</div>
                                    <div className="invalid-feedback">*Email is invalid.</div> */}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" value={password} onChange={passwordInputHandler} />
                                    </div>

                                    {/* <div className="invalid-feedback">*Password is required.</div> */}

                                    <div className="form-check d-flex justify-content-center my-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="rememberCheck" defaultChecked />
                                        <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
                                    </div>

                                    <button type="submit" className={`btn text-uppercase mb-4 px-4 ${styles['login-btn']}`}>Login</button>

                                    <div>
                                        <h6>Not a member? <Link to="/register">Register</Link></h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}