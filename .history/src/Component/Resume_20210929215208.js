import React, { Fragment, useEffect } from "react";
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import "./Resume.css";
import Pdf from "react-to-pdf";
import { Button } from "@material-ui/core";
import db from '../firebase'
import firebase from 'firebase'
const ref = React.createRef();

function Resume() {
    useEffect(() => {
        db.collection('resumeDetails')
    }, [])
    return (
        <Fragment>
            <div className="resume" ref={ref}>
                <div className="resume__header">
                    <h2></h2>
                    <p>

                    </p>
                </div>
                <div className="resume__media">
                    <div className="media__containerLeft">
                        <div className="resume__mail">
                            <MailIcon />
                            <label></label>
                        </div>
                        <div className="resume__location">
                            <RoomIcon />
                            <label></label>
                        </div>
                        <div className="resume__linkedin">
                            <LinkedInIcon />
                            <a href="" target="_blank" rel="noreferrer"><label></label></a>
                        </div>
                    </div>
                    <div className="media__containerRight">
                        <div className="resume__phone">
                            <PhoneAndroidIcon />
                            <label></label>
                        </div>
                        <div className="resume__date">
                            <CalendarTodayIcon />
                            <label></label>
                        </div>
                        <div className="resume__github">
                            <GitHubIcon />
                            <a href="" target="_blank" rel="noreferrer"><label></label></a>
                        </div>
                    </div>
                </div>

                <div className="resume__body">
                    <div className="resume__bodyLeft">
                        <div className="resume__education">
                            <div className="university__container">
                                <h1>Education</h1>
                                <div className="university__details">
                                    <h2></h2>
                                    <h3></h3>
                                    <div className="university__cgpa">
                                        <h3>CGPA - </h3>
                                    </div>
                                    <div className="university__date">
                                        <p> -</p>
                                        <p>- </p>
                                    </div>
                                </div>
                                <div className="highSecondary__details">
                                    <h2></h2>
                                    <h3></h3>
                                    <div className="highSecondary__percentage">
                                        <h3>Percentage - %</h3>
                                    </div>
                                    <div className="highSecondary__date">
                                        <p> -</p>
                                        <p>- </p>
                                    </div>
                                </div>
                                <div className="secondary__details">
                                    <h2></h2>
                                    <h3></h3>
                                    <div className="secondary__percentage">
                                        <h3>Percentage - %</h3>
                                    </div>
                                    <div className="secondary__date">
                                        <p> -</p>
                                        <p>- </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="resume__experience">
                            <div className="experience__details">
                                <h1>Experience</h1>
                                <div className="experience__content">
                                    <h2></h2>
                                    <h3><b></b></h3>
                                    <h3>Duration -  months</h3>
                                    <div className="experience__task">
                                        <h3>Tasks</h3>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="experience__content">
                                    <h2></h2>
                                    <h3><b></b></h3>
                                    <h3>Duration -  months</h3>
                                    <div className="experience__task">
                                        <h3>Tasks</h3>
                                        <p></p>
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
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>

                        <div className="resume__projects">
                            <div className="projects__details">
                                <h1>Projects</h1>
                                <div className="projects__content">
                                    <div className="projects__title">
                                        <h2></h2>
                                        <a href="" target="_blank" rel="noreferrer"><LaunchIcon />
                                        </a>
                                    </div>
                                    <p> </p>
                                </div>
                                <div className="projects__content">
                                    <div className="projects__title">
                                        <h2></h2>
                                        <a href="" target="_blank" rel="noreferrer"><LaunchIcon />
                                        </a>
                                    </div>
                                    <p> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="download">
                <Pdf targetRef={ref} filename="resume.pdf">
                    {({ toPdf }) => <Button variant="contained" color="primary" onClick={toPdf}>Download Resume
                    </Button>}
                </Pdf>
            </div>
        </Fragment>
    );
}

export default Resume;
