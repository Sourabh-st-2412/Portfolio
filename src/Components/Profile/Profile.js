import React from 'react'
import profileimage from '../../Images/Sadashivgad.jpeg';
import { GitHub, Instagram, LinkedIn, Twitter, X } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Contact from "../../Components/Contact/Contact";
const Profile = () =>{
    return(
        <div className="ProfileImage">
                    <img className="ProfileImgHome" src={profileimage} alt="Profile Pic" />
                    <div className="SocialLink">
                        <Instagram className="SocialMediaIcon"/>
                        <X className="SocialMediaIcon"/>
                        <GitHub className="SocialMediaIcon"/>
                        <LinkedIn className="SocialMediaIcon"/>
                    </div>
                    <div className="HireButton">
                        Hire me
                    </div>
                </div>
    )
}

export default Profile