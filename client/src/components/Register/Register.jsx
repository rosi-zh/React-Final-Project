import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";
import { useRegisterFormValidator } from "../../hooks/useRegisterFormValidator";

import PageTop from "../PageTop/PageTop";

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    
    const { values, onChange } = useForm(registerSubmitHandler, {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: ''
    })

    const { errors, validateForm, onBlurField } = useRegisterFormValidator(values);

    const onUpdateField = (e) => {
        const field = e.target.name;

        onChange(e);
        
        if (errors[field].dirty) {
            validateForm({
                form: values,
                errors,
                field
            });
        }

        console.log(errors)
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        const { isValid } = validateForm({ form: values, errors, forceTouchErrors: true });
        
        if (!isValid) {
            return;
        }

        registerSubmitHandler(values);
    }

    return (
        <>
            <PageTop title="Register" />

            <div className="container text-center wow fadeInUp">
                <div className="card mx-4 mx-md-5 form-box">
                    <div className="card-body py-5 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">

                                <div className="text-center mb-4">
                                    <h2 className="section-heading text-uppercase">Register</h2>
                                    <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                                </div>

                                {/* <div className="alert alert-danger" role="alert"></div> */}

                                <form onSubmit={onSubmitForm}>
                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="firstName">First name</label>
                                        <input type="text" id="firstName" name="firstName" className="form-control" value={values.firstName} onChange={onUpdateField} onBlur={onBlurField} />
                                    </div>

                                    {errors.firstName.dirty && errors.firstName.error && <div className='invalid-feedback'>{errors.firstName.message}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" className="form-control" value={values.lastName} onChange={onUpdateField} onBlur={onBlurField}/>
                                    </div>

                                    {errors.lastName.dirty && errors.lastName.error && <div className='invalid-feedback'>{errors.lastName.message}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="email">Email address</label>
                                        <input type="email" id="email" name="email" className="form-control" value={values.email} onChange={onUpdateField} onBlur={onBlurField}/>
                                    </div>
                                    
                                    {errors.email.dirty && errors.email.error && <div className='invalid-feedback'>{errors.email.message}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" value={values.password} onChange={onUpdateField} onBlur={onBlurField}/>
                                    </div>
                                    
                                    {errors.password.dirty && errors.password.error && <div className='invalid-feedback'>{errors.password.message}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="rePassword">Repeat Password</label>
                                        <input type="password" id="rePassword" name="rePassword" className="form-control" value={values.rePassword} onChange={onUpdateField} onBlur={onBlurField}/>
                                    </div>

                                    {errors.rePassword.dirty && errors.rePassword.error && <div className='invalid-feedback'>{errors.rePassword.message}</div>}

                                    <div className="form-check d-flex justify-content-center my-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="rememberCheck" defaultChecked />
                                        <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
                                    </div>

                                    <button type="submit" className={`btn text-uppercase mb-4 px-4 ${styles['register-btn']}`}>Register</button>

                                    <div>
                                        <h6>Already have an account? <Link to={Path.Login}>Login</Link></h6>
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