import PageTop from "../PageTop/PageTop";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";

export default function ArticleList() {

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
                        <ArticleListItem />
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}