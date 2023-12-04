import { useNavigate } from "react-router-dom";
import styles from "./ArticleEdit.module.css";

import useForm from "../../hooks/useForm";
import * as dataService from "../../services/dataService";
import Path from "../../utils/paths";

import PageTop from "../PageTop/PageTop";

export default function ArticleEdit() {
    const editSubmitHandler = () => {
        console.log('Edit')
    }

    const {values, onChange, onSubmit} = useForm(editSubmitHandler, {
        title: '',
        imageUrl: '',
        text: ''
    });

    return (
        <>
            <PageTop title="Edit Article" />

            <section className="page-section text-center">
                <div className="container">
                    <div className="card mx-4 mx-md-5 form-box">
                        <div className="card-body py-5 px-md-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6">

                                    <div className="text-center mb-4">
                                        <h2 className="section-heading text-uppercase">Edit Article</h2>
                                        <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                                    </div>

                                    {/* <div className="alert alert-danger" role="alert"></div> */}

                                    <form onSubmit={onSubmit}>
                                        <div className="form-group mt-4">
                                            <label className="form-label" htmlFor="title">Title</label>
                                            <input type="text" id="title" name="title" className="form-control" value={values.title} onChange={onChange} />
                                        </div>

                                        <div className="form-group mt-4">
                                            <label className="form-label" htmlFor="imageUrl">Image URL</label>
                                            <input type="text" id="imageUrl" name="imageUrl" className="form-control mb-3" value={values.imageInput} onChange={onChange} />
                                        </div>
        
                                        <div className="form-group mt-4">
                                            <label className="form-label" htmlFor="text">Text</label>
                                            <textarea className="form-control" id="text" name="text" rows="10" value={values.text} onChange={onChange} ></textarea>
                                        </div>
                                        <button type="submit" className={`btn text-uppercase my-4 px-4 ${styles['edit-btn']}`}>Edit</button>
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