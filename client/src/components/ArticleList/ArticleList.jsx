import { useEffect, useState } from "react";
import * as dataService from '../../services/dataService';
import PageTop from "../PageTop/PageTop";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";

export default function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        dataService.getAll()
            .then(result => setArticles(result));
    }, []);

    return (
        <>
            <PageTop title="Articles" />

            <div className="container-xxl py-6">
                <div className="container">
                    <div className={`section-header text-center mx-auto mb-5 wow fadeInUp ${styles['articles']}`} data-wow-delay="0.1s">
                        <h2 className="display-5 mb-3">Latest Articles</h2>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        {articles.map(article => (
                            <ArticleListItem key={article._id} {...article} />
                        ))}

                        {articles.length === 0 &&
                            <h3 className="text-center wow fadeInUp">No articles yet.</h3>
                        }
                        {/* <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Load More</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}