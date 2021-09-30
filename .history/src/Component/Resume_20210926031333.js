import React from "react";
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Resume.css";

function Resume() {
    return (
        <div className="resume">
            <div className="resume__header">
                <h2>Sayan Mondal</h2>
                <p>
                    My Strength is takes Initiative to work independently, Good leadership
                    skill, Adaptable to any kind of situation in estranged group & Helping
                    tendency. My Short term goal is to get the job in reputed company and
                    my Long term goal is to become more responsible and knowledgeable
                    personality and on respectable position on my company.
                </p>
            </div>
            <div className="resume__media">
                <div className="media__containerLeft">
                    <div className="resume__mail">
                        <MailIcon />
                        <label>1805603@kiit.ac.in</label>
                    </div>
                    <div className="resume__location">
                        <RoomIcon />
                        <label>Durgapur,Paschim Bardhaman,West Bengal</label>
                    </div>
                    <div className="resume__linkedin">
                        <LinkedInIcon />
                        <label>https://www.linkedin.com/in/sayan-mondal-9145731ba/</label>
                    </div>
                </div>
                <div className="media__containerRight">
                    <div className="resume__phone">
                        <PhoneAndroidIcon />
                        <label>8967697371</label>
                    </div>
                    <div className="resume__date">
                        <CalendarTodayIcon />
                        <label>28/07/2000</label>
                    </div>
                    <div className="resume__github">
                        <GitHubIcon />
                        <label></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
