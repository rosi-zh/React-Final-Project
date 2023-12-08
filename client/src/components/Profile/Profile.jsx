import { useState, useEffect, useContext } from "react";
import useAsync from "../../hooks/useAsync";
import AuthContext from "../../contexts/authContext";
import * as authService from "../../services/authService";
import * as dataService from "../../services/dataService";

import PageTop from "../PageTop/PageTop";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import Loader from "../Loader/Loader";

export default function Profile() {
    const { userId } = useContext(AuthContext);
    const [articles, setArticles] = useState([]);
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([dataService.getByOwnerId(userId), authService.profile()])
            .then(([resArticles, resProfile]) => {
                setArticles(resArticles);
                setUser(resProfile);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    },[])

    return (
        <>
            <PageTop title="My Profile" />

            <div className="container-xxl py-6">
                <div className="profile-info text-center">
                    <img src="/img/avatar.png" className="img-fluid" width="150px" />
                    <hr />
                    <p>Email: {user.email}</p>
                    <p>Name: {user.username || `${user.firstName} ${user.lastName}`}</p>
                </div>


                <div className="container">
                    <div className="last-articles section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h2 className="display-5 mb-3">My Articles</h2>
                    </div>

                    {loading && <Loader />}

                    <div className="row g-4">
                        {articles.map(article => (
                            <ArticleListItem key={article._id} {...article} />
                        ))}

                        
                        {articles.length === 0 &&
                            <h3 className="text-center wow fadeInUp">No articles yet.</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}