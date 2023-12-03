import { useNavigate } from "react-router-dom";
import styles from "./ArticleCreate.module.css";

import useForm from "../../hooks/useForm";
import * as dataService from "../../services/dataService";
import Path from "../../utils/paths";

import PageTop from "../PageTop/PageTop";

export default function ArticleCreate() {
    const navigate = useNavigate();

    const addArticleSubmitHandler = async (values) => {
        const result = await dataService.create(values);

        navigate(Path.Articles);
    }

    const { values, onChange, onSubmit } = useForm(addArticleSubmitHandler, {
        title: '',
        imageInput: '',
        text: ''
    });


    return (
        <>
            <PageTop title="Create Article" />

            <section className="page-section text-center">
                <div className="container">
                    <div className="card mx-4 mx-md-5 form-box">
                        <div className="card-body py-5 px-md-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-4">

                                    <div className="text-center mb-4">
                                        <h2 className="section-heading text-uppercase">Add Article</h2>
                                        <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                                    </div>

                                    {/* <div className="alert alert-danger" role="alert"></div> */}

                                    <form onSubmit={onSubmit}>
                                        <div className="form-group mt-4">
                                            <label className="form-label" htmlFor="title">Title</label>
                                            <input type="text" id="title" name="title" className="form-control" value={values.title} onChange={onChange} />
                                        </div>

                                        <div className="form-group mt-4">
                                            <label className="form-label" htmlFor="imageInput">Image URL</label>
                                            <input type="text" id="imageInput" name="imageInput" className="form-control mb-3"  value={values.imageInput} onChange={onChange} />
                                        </div>
        
                                        <div className="form-group mt-4">
                                            <label className="form-label" htmlFor="text">Text</label>
                                            <textarea className="form-control" id="text" name="text" rows="5"  value={values.text} onChange={onChange} ></textarea>
                                        </div>
                                        <button type="submit" className={`btn text-uppercase my-4 px-4 ${styles['add-btn']}`}>Add</button>
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