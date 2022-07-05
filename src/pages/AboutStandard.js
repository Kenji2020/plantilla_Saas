import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Divider from "../components/divider/Divider";
import FeatureTwo from "../components/features/FeatureTwo";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import PartnerOne from "../components/partner/PartnerOne";
import Footer from "../components/footer/Footer";
import AboutFour from "../components/about/AboutFour";
import SEO from "../components/common/SEO";

export default function AboutStandard() {
    return(
        <div>
            <SEO title="About Standard" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="About Standard" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="About" 
            />

            <Divider />

            <AboutFour />
            
            <Divider />

            <FeatureTwo />

            <TestimonialOne />

            <Divider />

            <PartnerOne />

            <Divider />

            <div className="container">
                <div className="border" />
            </div>

            <Footer 
                footerLogo="assets/img/core-img/logo.png" 
                footerStyle=""
            />
        </div>
    )
}