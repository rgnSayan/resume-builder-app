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
                        <a href="https://www.linkedin.com/in/sayan-mondal-9145731ba/">
                            <label>https://www.linkedin.com/in/sayan-mondal-9145731ba/</label></a>
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
                        <a href="https://www.github.com/rgnSayan"><label>https://www.github.com/rgnSayan</label></a>
                    </div>
                </div>
            </div>
            <div className="resume__body">
                <div className="resume__bodyLeft">

                    <div className="resume__education">
                        <div className="university__container">
                            <h1>Education</h1>
                            <div className="university__details">
                                <h2>Kalinga Institute of Industrial Technology </h2>
                                <h3>Computer Science & Engineering</h3>
                                <div className="university__cgpa">
                                    <h3>CGPA - 8.48</h3>
                                </div>
                                <div className="university__date">
                                    <p>09/07/2018 -</p>
                                    <p>- 02/05/2022</p>
                                </div>
                            </div>
                            <div className="highSecondary__details">
                                <h2>Hem Sheela Model School</h2>
                                <h3>CBSE</h3>
                                <div className="highSecondary__percentage">
                                    <h3>Percentage - 80%</h3>
                                </div>
                                <div className="highSecondary__date">
                                    <p>05/07/2017 -</p>
                                    <p>- 04/05/2018</p>
                                </div>
                            </div>
                            <div className="secondary__details">
                                <h2>Hem Sheela Model School</h2>
                                <h3>CBSE</h3>
                                <div className="secondary__percentage">
                                    <h3>Percentage - 83.6%</h3>
                                </div>
                                <div className="secondary__date">
                                    <p>05/07/2015 -</p>
                                    <p>- 04/05/2016</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
}

export default Resume;
