import { Link } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {

    return (
        <div className="container text-center">
            <div className="card mx-4 mx-md-5 form-box">
                <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4">

                            <div className="text-center mb-4">
                                <h2 className="section-heading text-uppercase">Register</h2>
                                <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                            </div>

                            {/* <div className="alert alert-danger" role="alert"></div> */}

                            <form>
                                <div className="form-group mt-4">
                                    <label className="form-label" htmlFor="firstName">First name</label>
                                    <input type="text" id="firstName" name="firstName" className="form-control"/>
                                </div>

                                    {/* <div className="invalid-feedback">*First name is required.</div>
                                    <div className="invalid-feedback">*First name must be at least ... characters long.</div> */}

                                <div className="form-group mt-4">
                                    <label className="form-label" htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" className="form-control"/>
                                </div>

                                    {/* <div className="invalid-feedback">*Last name is required.</div>
                                    <div className="invalid-feedback">*Last name must be at least ... characters long.</div> */}

                                <div className="form-group mt-4">
                                    <label className="form-label" htmlFor="email">Email address</label>
                                    <input type="email" id="email" name="email" className="form-control"/>
                                </div>
                                {/* 
                                    <div className="invalid-feedback">*Email is required.</div>
                                    <div className="invalid-feedback">*Email is invalid.</div> */}


                                <div className="form-group mt-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" className="form-control" />
                                </div>
                                
                                    {/* <div className="invalid-feedback">*Password is required.</div>
                                    <div className="invalid-feedback">*Password must be at least ... characters long.</div> */}


                                <div className="form-group mt-4">
                                    <label className="form-label" htmlFor="rePassword">Repeat Password</label>
                                    <input type="password" id="rePassword" name="rePassword" className="form-control"/>
                                </div>

                                    {/* <div className="invalid-feedback">*Repeat Password is required.</div>
                                    <div className="invalid-feedback">*Passwords don't match.</div> */}

                                <div className="form-check d-flex justify-content-center my-4">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="rememberCheck" checked />
                                    <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
                                </div>

                                <button type="submit" className={`btn text-uppercase mb-4 px-4 ${styles['register-btn']}`}>Register</button>

                                <div>
                                    <h6>Already have an account? <Link to="/register">Login</Link></h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}