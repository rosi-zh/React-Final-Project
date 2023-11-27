import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTop from "../PageTop/PageTop";
import styles from "./Login.module.css";

import * as authService from '../../services/authService';
import useForm from "../../hooks/useForm";

export default function Login() {
    const navigate = useNavigate();
   
    const loginSubmitHandler = async (values) => {
        const res = await authService.login(values.email, values.password);

        navigate('/');
    }

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    })

    return (
        <>
            <PageTop title="Login" />

            <div className="container text-center wow fadeInUp">
                <div className="card mx-4 mx-md-5 form-box">
                    <div className="card-body py-5 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">

                                <div className="text-center mb-4">
                                    <h2 className="section-heading text-uppercase">Login</h2>
                                    <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                                </div>

                                <form onSubmit={onSubmit}>
                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="email">Email address</label>
                                        <input type="email" id="email" name="email" className="form-control" value={values.email} onChange={onChange}/>
                                    </div>

                                    {/* <div className="invalid-feedback">*Email is required.</div>
                                    <div className="invalid-feedback">*Email is invalid.</div> */}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" value={values.password} onChange={onChange} />
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