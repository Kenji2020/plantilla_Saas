import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroOne from "../components/hero/HeroOne";
import Divider from "../components/divider/Divider";
import AboutOne from "../components/about/AboutOne";
import CoolFacts from "../components/cool-facts/CoolFacts";
import Features from "../components/features/Features";
import Services from "../components/services/Services";
import SaasboxTab from "../components/tab/Tab";
import PricingTableOne from "../components/pricing/PricingOne";
import Team from "../components/team/Team";
import PartnerOne from "../components/partner/PartnerOne";
import Cta1 from "../components/cta/CtaOne";
import PortfolioOne from "../components/portfolio/PortfolioOne";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import BlogOne from "../components/blog/BlogOne";
import SEO from "../components/common/SEO";

export default function CreativeAgency() {
    return(
        <div className="creative-agency-wrap">
            <SEO title="Creative Agency" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <HeroOne 
                heroThumb = "assets/img/illustrator/hero-3.png" 
                catagory = {["Idea", "Development", "Branding"]} 
                heading = "Awesome <br /> Creative Agency." 
                para = "It's crafted with the latest trend of design <br /> &amp; coded with all modern approaches." 
                buttons = {[
                    {
                        buttonColor: "btn-warning", 
                        url: "https://themeforest.net/item/saasbox-multipurpose-html-template-for-saas/25607146", 
                        text: "Buy Now"
                    },
                    {
                        buttonColor: "btn-light", 
                        url: "/", 
                        text: "See More"
                    }
                ]}
            />

            <Divider />

            <AboutOne />

            <Divider />

            <CoolFacts />

            <Divider />

            <Services />

            <Divider />

            <Features />
            
            <Divider />

            <SaasboxTab />

            <Divider />

            <PricingTableOne />

            <Divider />

            <PortfolioOne />

            <Divider />

            <Team 
                subTitle="Creative Sailors" 
                title="Our world class experienced team members." 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches." 
                btnLink="/team" 
                btnText="View All Members"
            />

            <TestimonialOne />

            <Divider />

            <PartnerOne />

            <Divider />

            <BlogOne />

            <Divider />

            <Cta1 
                CtaThumb={'assets/img/bg-img/1.jpg'}
                title="Build a beautiful website very easily within few hours, not a day."
                btnUrl="/contact"
                btnText="Get started now" 
            />

            <Footer 
                footerLogo="assets/img/core-img/logo.png"
                footerStyle="" 
            />
        </div>
    )
}