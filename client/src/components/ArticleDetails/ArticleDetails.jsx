import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ArticleDetails.css";

import * as dataService from "../../services/dataService";
import * as likeService from "../../services/likeService";

import PageTop from "../PageTop/PageTop";
import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";
import useAsync from "../../hooks/useAsync";
import Loader from "../Loader/Loader";

export default function ArticleDetails() {
    const navigate = useNavigate();
    const { isAuth, userId } = useContext(AuthContext);
    const { articleId } = useParams();
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => {
        likeService.getAll(articleId)
            .then(result => setLikes(result.length))
            .catch(error => console.log(error.message));

        if (isAuth) {
            likeService.getUserLikes(articleId, userId)
                .then(result => {
                    setHasLiked(result > 0)
                })
                .catch(error => console.log(error.message));
        }
        
    }, [articleId, isAuth, hasLiked]);

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

    const likeButtonHandler = async () => {
        if (!hasLiked) {
            const result = await likeService.like(articleId);

            setLikes(value => value + 1);
            setHasLiked(true);
        } else {
            const result = await likeService.unlike(articleId, userId);

            setLikes(value => value - 1);
            setHasLiked(false);
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
                                    {userId === value._ownerId && (
                                        <div className="buttons">
                                            <Link to={`/articles/${articleId}/edit`} className="btn rounded-pill py-3 px-5 me-3 btn-base">Edit</Link>
                                            <button onClick={deleteButtonHandler} className="btn rounded-pill py-3 px-5 btn-sec">Delete</button>
                                        </div>
                                    )}
                                        <div className="buttons">
                                            <button  className="btn rounded-pill py-3 px-5 me-3 btn-sec" disabled>Likes: {likes}</button>
                                            {userId !== value._ownerId && isAuth && (
                                                <button onClick={likeButtonHandler} className="btn rounded-pill py-3 px-5 btn-base">{!hasLiked ? "Like" : "Unlike"}</button>
                                            )}
                                        </div>
                                </div>
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="section-title">
                                        <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
                                        <h2 className="display-6">{value.title}</h2>
                                    </div>
                                    <p className="mb-4">{value.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    );
}