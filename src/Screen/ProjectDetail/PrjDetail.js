import React, { useState, useEffect } from "react";
import './PrjDetail.css';
import Profile from "../../Components/Profile/Profile";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import Project1 from '../../Images/RestaurantBookingHome.jpg';
import SkillPage from "../../Components/Skills/Skill";
import Contact from "../../Components/Contact/Contact";
import ProjectData from "../../Project.json";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        if(/^\d+$/.test(id) && id>=0 && id<ProjectData?.projects.length){
        setData(ProjectData.projects[id]);
        }else{
            navigate('/')
        }
    })
    console.log(data);
    return (
        <div className="ProjectDetailPage">
            <div className="LeftSideProjectDetail">
                <Profile />
            </div>
            <div className="RightSideProjectDetail">
                <div className="ProjectDetailRightSide">
                    <div />
                    <div className="Title">Project</div>
                    <div className="HomeRefIntro"><span className='SpamColor'>{data?.name.split(' ')[0]}</span> {data?.name.split(" ").slice(1, data?.name.length - 1).join(" ")}</div>
                    <div className="DetailIntro">{data?.desc}
                    </div>
                    <div className="ProjectImageDetails">
                        <img src={data?.mainImg} className="ProjectImg" />
                    </div>
                    <div className="ProjectImageDetails">
                        <img src={data?.imgLink1} className="ProjectImg" />
                    </div>
                    <div className="ProjectImageDetails">
                        <img src={data?.imgLink2} className="ProjectImg" />
                    </div>
                    <div className="ProjectImageDetails">
                        <img src={data?.imgLink3} className="ProjectImg" />
                    </div>
                    <div className="ProjectImageDetails">
                        <img src={data?.imgLink4} className="ProjectImg" />
                    </div>
                    <div className="ProjectImageDetails">
                        <img src={data?.imgLink5} className="ProjectImg" />
                    </div>
                    <div className="ProjectImageDetails">
                        <img src={data?.imgLink6} className="ProjectImg" />
                    </div>
                    <div className="ProjectLink">
                        <span className="ProjectLinkSpan"><GitHubIcon className="GitHubIcon" />Git-Hub-Link</span>
                        <a href="https://github.com/Sourabh-st-2412">https://github.com/Sourabh-st-2412 </a>
                    </div>
                </div>
                <div className="EducationBlock">
                    <div className="EducationTitle">Technology</div>
                    <div className="EducationContent"><spam className='SpamColor'>Project</spam> Technology used</div>
                    <div className="SkillBlock">
                        <SkillPage skill={data?.technology} />
                        <SkillPage skill={data?.Software} />
                        <SkillPage skill={data?.Reference} />
                    </div>

                </div>
                <Contact />

            </div>
        </div>
    )
}

export default ProjectDetail