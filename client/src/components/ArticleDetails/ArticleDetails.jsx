import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import * as dataService from "../../services/dataService";

import PageTop from "../PageTop/PageTop";
import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";
import useAsync from "../../hooks/useAsync";
import Loader from "../Loader/Loader";

export default function ArticleDetails() {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const { articleId } = useParams();
    // const [article, setArticle] = useState({});

    // useEffect(() => {
    //     dataService.getById(articleId)
    //         .then(result => setArticle(result));
    // }, []);

    const { loading, error, value } = useAsync(() => {
        return dataService.getById(articleId);
    }, [articleId]);


    const deleteButtonHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${value.title}?`);

        if (hasConfirmed) {
            await dataService.remove(articleId);

            navigate(Path.Articles);
        }
    }

    return (
        <>
            <PageTop title="Article" />

            <div className="container-xxl py-5">
                {loading 
                    ? <Loader /> 
                    : (
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid" src={value.imageUrl} alt={value.title} />
                                </div>
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="section-title">
                                        <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
                                        <h2 className="display-6">{value.title}</h2>
                                    </div>
                                    <p className="mb-4">{value.text}</p>
                                    {userId === value._ownerId && (
                                        <>
                                            <Link to={`/articles/${articleId}/edit`} className="btn btn-primary rounded-pill py-3 px-5 me-3">Edit</Link>
                                            <button onClick={deleteButtonHandler} className="btn btn-primary rounded-pill py-3 px-5">Delete</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    );
}