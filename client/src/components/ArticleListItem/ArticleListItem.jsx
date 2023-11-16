export default function ArticleListItem() {
    
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
            <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                <div className="text-muted border-top pt-4">
                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                </div>
            </div>
        </div>
);
}