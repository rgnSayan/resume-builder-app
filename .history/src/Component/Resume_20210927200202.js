import React from "react";
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import "./Resume.css";

function Resume({ name, bio, email, address, phone, bday, githubInput, linkedinInput, schoolNameX,
    percentageX, boardX, endDateX, startDateX, schoolNameXII, percentageXII, boardXII,
    endDateXII, startDateXII, universityName, cgpa, universityBranch, universityStartDate,
    universityEndDate, sk1, sk2, sk3, sk4, sk5, prDetails, prName, prLink, prDetailsI, prNameI, prLinkI, expIName, expIPos, expIMon, expIDescription, expIIName, expIIPos, expIIMon, expIIDescription }) {
    return (
        <div className="resume">
            <div className="resume__header">
                <h2>{name}</h2>
                <p>
                    {bio}
                </p>
            </div>
            <div className="resume__media">
                <div className="media__containerLeft">
                    <div className="resume__mail">
                        <MailIcon />
                        <label>{email}</label>
                    </div>
                    <div className="resume__location">
                        <RoomIcon />
                        <label>{address}</label>
                    </div>
                    <div className="resume__linkedin">
                        <LinkedInIcon />
                        <label>{linkedinInput}</label>
                    </div>
                </div>
                <div className="media__containerRight">
                    <div className="resume__phone">
                        <PhoneAndroidIcon />
                        <label>{phone}</label>
                    </div>
                    <div className="resume__date">
                        <CalendarTodayIcon />
                        <label>{bday}</label>
                    </div>
                    <div className="resume__github">
                        <GitHubIcon />
                        <label>{githubInput}</label>
                    </div>
                </div>
            </div>

            <div className="resume__body">
                <div className="resume__bodyLeft">
                    <div className="resume__education">
                        <div className="university__container">
                            <h1>Education</h1>
                            <div className="university__details">
                                <h2>{universityName}</h2>
                                <h3>{universityBranch}</h3>
                                <div className="university__cgpa">
                                    <h3>CGPA - {cgpa}</h3>
                                </div>
                                <div className="university__date">
                                    <p>{universityStartDate} -</p>
                                    <p>- {universityEndDate}</p>
                                </div>
                            </div>
                            <div className="highSecondary__details">
                                <h2>{schoolNameXII}</h2>
                                <h3>{boardXII}</h3>
                                <div className="highSecondary__percentage">
                                    <h3>Percentage - {percentageXII}</h3>
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

                    <div className="resume__experience">
                        <div className="experience__details">
                            <h1>Experience</h1>
                            <div className="experience__content">
                                <h2>Prime Vogue</h2>
                                <h3><b>Front End Developer</b></h3>
                                <h3>Duration - 2 months</h3>
                                <div className="experience__task">
                                    <h3>Tasks</h3>
                                    <p>I worked as an front end developer and my job was to design websites and fix bugs and giving certain functionality.</p>
                                </div>
                            </div>
                            <div className="experience__content">
                                <h2>Oye Beauty</h2>
                                <h3><b>Front End Developer</b></h3>
                                <h3>Duration - 4 months</h3>
                                <div className="experience__task">
                                    <h3>Tasks</h3>
                                    <p>I worked as an front end developer and my job was to design websites and fix bugs and giving certain functionality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="resume__bodyRight">
                    <div className="skills__details">
                        <h1>Skills</h1>
                        <div className="skills__content">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                    </div>

                    <div className="resume__projects">
                        <div className="projects__details">
                            <h1>Projects</h1>
                            <div className="projects__content">
                                <div className="projects__title">
                                    <h2>Portfolio</h2>
                                    <a href="https://www.github.com/" target="_blank" rel="noreferrer"><LaunchIcon />
                                    </a>
                                </div>
                                <p>I build my own portfolio with React and Firebase. I have provided my details about my education, project and internships and also my certificates. </p>
                            </div>
                            <div className="projects__content">
                                <div className="projects__title">
                                    <h2>Resume Builder App</h2>
                                    <a href="https://www.github.com/" target="_blank" rel="noreferrer"><LaunchIcon />
                                    </a>
                                </div>
                                <p>I build resume building app with React and Firebase. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Resume;
