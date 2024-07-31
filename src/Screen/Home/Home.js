import React, { useEffect, useState } from "react";
import "./Home.css"
import profileimage from '../../Images/Sadashivgad.jpeg'
import Project1 from '../../Images/RestaurantBookingHome.jpg'
import Project2 from '../../Images/GreenGroccer.jpg'
import Project3 from '../../Images/ChatbotHome.jpg'
import ProfileData from '../../Profile.json'
import { GitHub, Instagram, LinkedIn, Twitter, X } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Contact from "../../Components/Contact/Contact";
import { Link } from 'react-router-dom';
import Profile from "../../Components/Profile/Profile";
import SkillPage from "../../Components/Skills/Skill";
const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(ProfileData);
    }, [])
    return (
        <div className="Home">
            <div className="HomeLeft">
                <Profile />
            </div>
            <div className="HomeRight">
                <div className="HomeIntro">
                    <div className="TitlePortfolio">Portfolio</div>
                    <div className="HomeRefIntro"><spam className='SpamColor'>Hello,</spam> I'm Sourabh Shivaji Tupe, Persueing MCA (Masters of Computer Applications)</div>
                    <div className="DetailIntro">👨‍💻 Aspiring Computer Science Student |Currently persueing MCA | Passionate about Java web development and building intelligent applications with Python and Machine Learning with intermediate knowledge in Cloud. Built Java web applications using JSP and currently contributing to an team project on Personalized Chatbot using Php Technology.</div>
                    <div className="HomeContactDetail">
                        <div className="HomeContactDetailIcon">
                            <LocationOnIcon />
                            <div className="HomeContactDetailLocation">Karad, Maharashtra</div>
                        </div>
                        <div className="HomeContactDetailIcon">
                            <PhoneAndroidIcon />
                            <div className="HomeContactDetailLocation">+91 9823525013  </div>
                        </div>
                        <div className="HomeContactDetailIcon">
                            <EmailIcon />
                            <div className="HomeContactDetailLocation">sourabhtupe08@gmail.com</div>
                        </div>
                    </div>
                    <div className="EducationBlock">
                        <div className="EducationTitle">CAREER</div>
                        <div className="EducationContent"><spam className='SpamColor'>Educational</spam> Details</div>
                        <div className="EducationDetail">
                            <div className="CourseDuration">July 2023 - Present</div>
                            <div className="CourseName" >MCA(Master Of Computer Applications)<spam className="Marks">7.65 cgpa</spam></div>
                        </div>
                        <div className="EducationDetail">
                            <div className="CourseDuration">August 2020 - June 2023</div>
                            <div className="CourseName">BCS(Bachelor Of Computer Science)<spam className="Marks">8.93 cgpa</spam></div>
                        </div>
                        <div className="EducationDetail">
                            <div className="CourseDuration">July 2018 - March 2020</div>
                            <div className="CourseName">Intermediate Examination<spam className="Marks">62.46 %</spam></div>
                        </div>
                        <div className="EducationDetail">
                            <div className="CourseDuration">June 2006 - March 2018</div>
                            <div className="CourseName">Matriculation Examination<spam className="Marks">83.00 %</spam></div>
                        </div>
                    </div>
                    <div className="EducationBlock">
                        <div className="EducationTitle">SKILLS</div>
                        <div className="EducationContent"><spam className='SpamColor'>My Skills</spam> & Knowledge</div>

                        <SkillPage skill={data?.skills}/>

                        <div className="SkillBlock">
                            <div className="SkillCard">
                                <div className="CardTitle">Languages Spoken</div>
                                <div className="SkillTechnology">
                                    <div className="SkillName">English</div>
                                    <div className="SkillName">Marathi</div>
                                    <div className="SkillName">Hindi</div>
                                </div>
                            </div>
                            <div className="SkillCard">
                                <div className="CardTitle">Soft- Skills</div>
                                <div className="SkillTechnology">
                                    <div className="SkillName">Fast Learner</div>
                                    <div className="SkillName">Multi Tasker</div>
                                    <div className="SkillName">Team Member</div>
                                    <div className="SkillName">Leader</div>
                                    <div className="SkillName">Organized</div>
                                    <div className="SkillName">Focused</div>
                                    <div className="SkillName">Flexible</div>
                                    <div className="SkillName">Enthusiastic</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="EducationBlock">
                        <div className="EducationTitle">WORK</div>
                        <div className="EducationContent"><spam className='SpamColor'>Featured</spam> Projects</div>
                        <div className="ImageBlock">

                            {
                                data?.project?.map((item, index) => {
                                    return (
                                        <Link to={`/project/${index}`} className="ImageOpacityDiv">
                                            <div className="ImageDiv">
                                                <img src={item?.imageLink} className="ProjectImg" />
                                                <div className="ProjectImageName">{item?.name}</div>
                                            </div>
                                        </Link>);
                                })
                            }



                        </div>
                    </div>

                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Home