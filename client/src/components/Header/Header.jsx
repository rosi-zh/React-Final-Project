import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="container-fluid bg-white sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                    <Link to="/" className="navbar-brand">
                        <img className="img-fluid" src="img/logo.png" alt="Logo" />
                    </Link>
                    <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/blog" className="nav-item nav-link">Blog</Link>
                            <Link to="/contacts" className="nav-item nav-link">Contacts</Link>
                            <Link to="/login" className="nav-item nav-link">Login</Link>
                            <Link to="/register" className="nav-item nav-link">Register</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}