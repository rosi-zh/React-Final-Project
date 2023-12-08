import "./ArticleList.css";

import * as dataService from "../../services/dataService";
import useAsync from "../../hooks/useAsync";

import PageTop from "../PageTop/PageTop";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import Loader from "../Loader/Loader";

export default function ArticleList() {
    const { loading, error, value } = useAsync(() => {
        return dataService.getAll();
    }, []);

    return (
        <>
            <PageTop title="Articles" />

            <div className="container-xxl py-6">

                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp articles" data-wow-delay="0.1s">
                        <h2 className="display-5 mb-3">Healthy Articles</h2>
                        <p>Unlocking Wellness: Nutrition, Exercise, Mental Health, and Holistic Balance</p>
                    </div>
                    
                    {loading && <Loader />}
                    
                    <div className="row g-4">
                        {value.map(article => (
                            <ArticleListItem key={article._id} {...article} />
                        ))}

                        {(value.length === 0  || error) &&
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