import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import * as dataService from "../../services/dataService";

import PageTop from "../PageTop/PageTop";

export default function ArticleDetails() {
    const { articleId } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        dataService.getById(articleId)
            .then(result => setArticle(result));
    }, []);

    return (
        <>
            <PageTop title="Article" />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid" src={article.imageUrl} alt={article.title} />
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="section-title">
                                <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
                                <h2 className="display-6">{article.title}</h2>
                            </div>
                            <p className="mb-4">{article.text}</p>
                            <Link to={`/articles/${articleId}/edit`} className="btn btn-primary rounded-pill py-3 px-5 me-3">Edit</Link>
                            <a href="" className="btn btn-primary rounded-pill py-3 px-5">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}