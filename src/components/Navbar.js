import React from "react";
import {Link} from "react-router-dom";

const Navbar=()=>{
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsVers
            </Link>
            <button
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#navbarSupportedContent"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link aria-current="page" className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link aria-current="page" className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link aria-current="page" className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link aria-current="page" className="nav-link" to="/general">General</Link></li>
                <li className="nav-item"><Link aria-current="page" className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link aria-current="page" className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link aria-current="page" className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link aria-current="page" className="nav-link" to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
 
}
export default Navbar
