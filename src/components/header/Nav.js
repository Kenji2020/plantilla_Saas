import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function SaasboxNav() {
    return(
        <div className="navbar-nav navbar-nav-scroll">
            <NavDropdown className="sb-dropdown-menu" title="Blog" id="dropdown4">
                <Link to="/blog-2">Blog Two</Link>
            </NavDropdown>
        </div>
    )
}
