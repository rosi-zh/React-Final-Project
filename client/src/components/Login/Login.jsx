import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import styles from "./Login.module.css";

import AuthContext from "../../contexts/authContext";

import PageTop from "../PageTop/PageTop";
import Path from "../../utils/paths";

const initialValues = {
    email: '',
    password: ''
}

const validate = (values) => {
    const errors = {};
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be atleast 6 characters long';
    }

    return errors;
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [serverError, setServerError] = useState('');

    const onSubmit = (values) => {
        loginSubmitHandler(values);
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    });

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = formik;

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

                                {serverError && <div className="alert alert-danger" role="alert">{serverError.message}</div>}
                                

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="email">Email address</label>
                                        <input type="email" id="email" name="email" className="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>

                                    {touched.email && errors.email && <div className='invalid-feedback'>{errors.email}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                    </div>
                                    
                                    {touched.password && errors.password && <div className='invalid-feedback'>{errors.password}</div>}

                                    <div className="form-check d-flex justify-content-center my-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="rememberCheck" defaultChecked />
                                        <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
                                    </div>

                                    <button type="submit" className={`btn text-uppercase mb-4 px-4 ${styles['login-btn']}`}>Login</button>

                                    <div>
                                        <h6>Not a member? <Link to={Path.Register}>Register</Link></h6>
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