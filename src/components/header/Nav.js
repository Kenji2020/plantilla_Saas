import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function SaasboxNav() {
    return(
        <div className="navbar-nav navbar-nav-scroll">

            <NavDropdown className="sb-dropdown-menu" title="Home" id="dropdown1">
                <Link to="/creative-agency">Creative Agency</Link>
                <Link to="/business-studio">Business Studio</Link>
                <Link to="/saas-landing">Saas Landing</Link>
                <Link to="/seo-business">SEO &amp; Business</Link>
            </NavDropdown>

            <NavDropdown className="sb-dropdown-menu" title="Portfolio" id="dropdown2">
                <Link to="/portfolio-standard">Portfolio 1</Link>
                <Link to="/portfolio-creative">Portfolio 2</Link>
                <Link to="/portfolio-full-width">Portfolio 3</Link>
                <Link to="/portfolio-details/1">Portfolio Details 1</Link>
                <Link to="/portfolio-details2/1">Portfolio Details 2</Link>
            </NavDropdown>

            <NavDropdown className="sb-dropdown-menu" title="Shop" id="dropdown3">
                <Link to="/shop-fullwidth">Shop Fullwidth</Link>
                <Link to="/shop-sidebar">Shop Sidebar</Link>
                <Link to="/product-details/1">Product Details</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/checkout">Checkout</Link>
            </NavDropdown>

            <NavDropdown className="sb-dropdown-menu" title="Blog" id="dropdown4">
                <Link to="/blog-1">Blog One</Link>
                <Link to="/blog-2">Blog Two</Link>
                <Link to="/blog-3">Blog Three</Link>
                <Link to="/blog-details-1">Blog Details One</Link>
                <Link to="/blog-details-2">Blog Details Two</Link>
            </NavDropdown>

            <NavDropdown className="sb-dropdown-menu" title="Pages" id="dropdown5">
                <NavDropdown className="sb-dropdown-menu" title="About" id="dropdown5-1" drop="end">
                    <Link to="/about-standard">About Standard</Link>
                    <Link to="/about-creative">About Creative</Link>
                </NavDropdown>

                <NavDropdown className="sb-dropdown-menu" title="Service" id="dropdown5-2" drop="end">
                    <Link to="/service-standard">Service Standard</Link>
                    <Link to="/service-creative">Service Creative</Link>
                </NavDropdown>

                <NavDropdown className="sb-dropdown-menu" title="Authentification" id="dropdown5-3" drop="end">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/forget-password">Forget Password</Link>
                </NavDropdown>

                <Link to="/pricing-plan">Pricing Plan</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/coming-soon">Coming Soon</Link>
                <Link to="/newsletter">Newsletter</Link>
                <Link to="/not-found">404</Link>
            </NavDropdown>
        </div>
    )
}