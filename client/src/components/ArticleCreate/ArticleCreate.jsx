import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./ArticleCreate.css";

import * as dataService from "../../services/dataService";
import Path from "../../utils/paths";
import articleCreateValidate from "../../validators/aricleCreateValidate";

import PageTop from "../PageTop/PageTop";
import Loader from "../Loader/Loader";

export default function ArticleCreate() {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState('');

    const addArticleSubmitHandler = async (values) => {
        try {
            const result = await dataService.create(values);
            
            navigate(Path.Articles);
        } catch (error) {
            setServerError('Sorry! Article cannot be added.');
        }
    }
    
    const formik = useFormik({
        initialValues: {
            title: '',
            imageUrl: '',
            text: ''
        },
        validate: articleCreateValidate,
        onSubmit: addArticleSubmitHandler
    });

    const { values, errors, handleChange, handleBlur, handleSubmit, touched, isSubmitting } = formik;

    return (
        <>
            <PageTop title="Create Article" />

            <section className="page-section text-center">
                <div className="container">
                    <div className="card mx-4 mx-md-5 form-box">
                        <div className="card-body py-5 px-md-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6">

                                    <div className="text-center mb-4">
                                        <h2 className="section-heading text-uppercase">Add Article</h2>
                                        <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                                    </div>

                                    {serverError && <div className="alert alert-danger" role="alert">{serverError}</div>}

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="title">Title</label>
                                            <input type="text" id="title" name="title" className="form-control" value={values.title} onChange={handleChange} onBlur={handleBlur} />
                                        </div>

                                        {touched.title && errors.title && <div className='invalid-feedback'>{errors.title}</div>}

                                        <div className="form-group">
                                            <label className="form-label" htmlFor="imageUrl">Image URL</label>
                                            <input type="text" id="imageUrl" name="imageUrl" className="form-control mb-3"  value={values.imageInput} onChange={handleChange} onBlur={handleBlur} />
                                        </div>

                                        {touched.imageUrl && errors.imageUrl && <div className='invalid-feedback'>{errors.imageUrl}</div>}
        
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="text">Text</label>
                                            <textarea className="form-control" id="text" name="text" rows="10"  value={values.text} onChange={handleChange} onBlur={handleBlur}></textarea>
                                        </div>

                                        {touched.text && errors.text && <div className='invalid-feedback'>{errors.text}</div>}

                                        {isSubmitting && <Loader />}
                                        
                                        <button type="submit" className="btn text-uppercase my-4 px-4 btn-base" disabled={isSubmitting}>Add</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}