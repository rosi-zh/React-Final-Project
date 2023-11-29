import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import PageTop from "../PageTop/PageTop";
import Path from "../../utils/paths";
import { useLoginFormValidator } from "../../hooks/useLoginFormValidator";

export default function Login() {
    // const { loginSubmitHandler } = useContext(AuthContext);

    // const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    //     email: '',
    //     password: ''
    // });

    const [values, setValues] = useState({
        email: '',
        password: '' 
    })

    const { errors, validateForm, onBlurField } = useLoginFormValidator(values);

    const onUpdateField = (e) => {
        const field = e.target.name;
        const nextFormState  = {
            ...values,
            [field]: e.target.value,
        };

        setValues(nextFormState);

        if (errors[field].dirty) {
            validateForm({
                form: nextFormState,
                errors,
                field
            });
        }
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        const { isValid } = validateForm({ form: values, errors, forceTouchErrors: true });

        if (!isValid) {
            return;
        }

        alert(JSON.stringify(values, null, 2));
    }

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

                                <form onSubmit={onSubmitForm}>
                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="email">Email address</label>
                                        <input type="email" id="email" name="email" className="form-control" value={values.email} onChange={onUpdateField} onBlur={onBlurField}/>
                                    </div>

                                    {errors.email.dirty && errors.email.error && <div className={styles['invalid-feedback']}>{errors.email.message}</div>}
                                    {/* <div className="invalid-feedback">*Email is invalid.</div> */}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" value={values.password} onChange={onUpdateField} onBlur={onBlurField} />
                                    </div>

                                    {/* <div className="invalid-feedback">*Password is required.</div> */}

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