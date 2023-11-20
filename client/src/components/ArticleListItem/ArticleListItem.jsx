export default function ArticleListItem({
    _id,
    title,
    imageUrl,
    _ownerId,
    _createdOn
}) {

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <img className="img-fluid" src={imageUrl} alt={title} />
            <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="">{title}</a>
                <div className="text-muted border-top pt-4">
                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>{_ownerId}</small>
                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>{_createdOn}</small>
                </div>
            </div>
        </div>
);
}