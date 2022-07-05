import { Link } from "react-router-dom";
import SingleTeamMember from "./SingleTeamMember";
import TeamData from "../../data/team/team-member.json";

export default function Team(props) {
    const {subTitle, title, para, btnLink, btnText} = props;

    const teamMembers = TeamData.slice(0, 2);
    const allTeamMember = teamMembers.map((item, index) => (
        <SingleTeamMember 
            key={index} 
            memberImage={item.memberImage} 
            memberName={item.memberName} 
            designation={item.designation} 
            contactUrl={item.contactUrl} 
            contactText={item.contactText} 
        />
    ))
 
    return(
        <div className="saasbox-team-area pt-120 pb-120 bg-gradient">            
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-sm-9 col-md-7 col-lg-5">
                        <div className="section-heading mb-lg-0">
                            <h6 className="text-dark">{subTitle}</h6>
                            <h2>{title}</h2>
                            <p className="text-dark">{para}</p>
                            <Link className="btn btn-light mt-5" to={btnLink} >
                                {btnText} <i className="ms-3 bi bi-arrow-right" />
                            </Link>

                            <div className="dot-pattern" style={{backgroundImage: `url(/assets/img/core-img/dot.png)`}} />
                        </div>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="team-members-area">
                            <div className="row justify-content-center g-4 g-xl-5">
                                {allTeamMember}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}