import React, { Fragment } from "react";
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import "./Resume.css";
import { saveAs } from "file-saver";
import { Button } from "@material-ui/core";

function Resume({ name, bio, email, address, phone, bday, githubInput, linkedinInput, schoolNameX,
    percentageX, boardX, endDateX, startDateX, schoolNameXII, percentageXII, boardXII,
    endDateXII, startDateXII, universityName, cgpa, universityBranch, universityStartDate,
    universityEndDate, sk1, sk2, sk3, sk4, sk5, prDetails, prName, prLink, prDetailsI, prNameI, prLinkI, expIName, expIPos, expIMon, expIDescription, expIIName, expIIPos, expIIMon, expIIDescription }) {
    const saveFile = () => {
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
    };

    return (
        <Fragment>
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
                            <a href={linkedinInput} target="_blank" rel="noreferrer"><label>{linkedinInput}</label></a>
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
                            <a href={githubInput} target="_blank" rel="noreferrer"><label>{githubInput}</label></a>
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
                                        <h3>Percentage - {percentageXII}%</h3>
                                    </div>
                                    <div className="highSecondary__date">
                                        <p>{startDateXII} -</p>
                                        <p>- {endDateXII}</p>
                                    </div>
                                </div>
                                <div className="secondary__details">
                                    <h2>{schoolNameX}</h2>
                                    <h3>{boardX}</h3>
                                    <div className="secondary__percentage">
                                        <h3>Percentage - {percentageX}%</h3>
                                    </div>
                                    <div className="secondary__date">
                                        <p>{startDateX} -</p>
                                        <p>- {endDateX}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="resume__experience">
                            <div className="experience__details">
                                <h1>Experience</h1>
                                <div className="experience__content">
                                    <h2>{expIName}</h2>
                                    <h3><b>{expIPos}</b></h3>
                                    <h3>Duration - {expIMon} months</h3>
                                    <div className="experience__task">
                                        <h3>Tasks</h3>
                                        <p>{expIDescription}</p>
                                    </div>
                                </div>
                                <div className="experience__content">
                                    <h2>{expIIName}</h2>
                                    <h3><b>{expIIPos}</b></h3>
                                    <h3>Duration - {expIIMon} months</h3>
                                    <div className="experience__task">
                                        <h3>Tasks</h3>
                                        <p>{expIIDescription}</p>
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
                                    <li>{sk1}</li>
                                    <li>{sk2}</li>
                                    <li>{sk3}</li>
                                    <li>{sk4}</li>
                                    <li>{sk5}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="resume__projects">
                            <div className="projects__details">
                                <h1>Projects</h1>
                                <div className="projects__content">
                                    <div className="projects__title">
                                        <h2>{prName}</h2>
                                        <a href={prLink} target="_blank" rel="noreferrer"><LaunchIcon />
                                        </a>
                                    </div>
                                    <p>{prDetails} </p>
                                </div>
                                <div className="projects__content">
                                    <div className="projects__title">
                                        <h2>{prNameI}</h2>
                                        <a href={prLinkI} target="_blank" rel="noreferrer"><LaunchIcon />
                                        </a>
                                    </div>
                                    <p>{prDetailsI} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="download">
                <Button variant="contained" color="secondary" disabled={!email}>Download Resume</Button>
            </div>
        </Fragment>
    );
}

export default Resume;
