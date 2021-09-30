import React, { Fragment, useState, useEffect } from "react";
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import "./Resume.css";
import Pdf from "react-to-pdf";
import db from "../firebase"
import { Button } from "@material-ui/core";
const ref = React.createRef();

function Resume() {
    const [resume, setResume] = useState([])
    useEffect(() => {
        db.collection('resumeDetails').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setResume(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
    }, [])

    return (
        <Fragment>
            {resume.map(items => (
                <div className="resume" ref={ref}>
                    <div className="resume__header">
                        <h2>{items.data.name}</h2>
                        <p>
                            {items.data.bio}
                        </p>
                    </div>
                    <div className="resume__media">
                        <div className="media__containerLeft">
                            <div className="resume__mail">
                                <MailIcon />
                                <label>{items.data.email}</label>
                            </div>
                            <div className="resume__location">
                                <RoomIcon />
                                <label>{items.data.address}</label>
                            </div>
                            <div className="resume__linkedin">
                                <LinkedInIcon />
                                <a href={items.data.items.data.linkedinInput} target="_blank" rel="noreferrer"><label>{items.data.linkedinInput}</label></a>
                            </div>
                        </div>
                        <div className="media__containerRight">
                            <div className="resume__phone">
                                <PhoneAndroidIcon />
                                <label>{items.data.phone}</label>
                            </div>
                            <div className="resume__date">
                                <CalendarTodayIcon />
                                <label>{items.data.bday}</label>
                            </div>
                            <div className="resume__github">
                                <GitHubIcon />
                                <a href={items.data.githubInput} target="_blank" rel="noreferrer"><label>
                                    {items.data.githubInput}</label></a>
                            </div>
                        </div>
                    </div>

                    <div className="resume__body">
                        <div className="resume__bodyLeft">
                            <div className="resume__education">
                                <div className="university__container">
                                    <h1>Education</h1>
                                    <div className="university__details">
                                        <h2>{items.data.universityName}</h2>
                                        <h3>{items.data.universityBranch}</h3>
                                        <div className="university__cgpa">
                                            <h3>CGPA - {items.data.cgpa}</h3>
                                        </div>
                                        <div className="university__date">
                                            <p>{items.data.universityStartDate} -</p>
                                            <p>- {items.data.universityEndDate}</p>
                                        </div>
                                    </div>
                                    <div className="highSecondary__details">
                                        <h2>{items.data.schoolNameXII}</h2>
                                        <h3>{items.data.boardXII}</h3>
                                        <div className="highSecondary__percentage">
                                            <h3>Percentage - {items.data.percentageXII}%</h3>
                                        </div>
                                        <div className="highSecondary__date">
                                            <p>{items.data.startDateXII} -</p>
                                            <p>- {items.data.endDateXII}</p>
                                        </div>
                                    </div>
                                    <div className="secondary__details">
                                        <h2>{items.data.schoolNameX}</h2>
                                        <h3>{items.data.boardX}</h3>
                                        <div className="secondary__percentage">
                                            <h3>Percentage - {items.data.percentageX}%</h3>
                                        </div>
                                        <div className="secondary__date">
                                            <p>{items.data.startDateX} -</p>
                                            <p>- {items.data.endDateX}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="resume__experience">
                                <div className="experience__details">
                                    <h1>Experience</h1>
                                    <div className="experience__content">
                                        <h2>{items.data.expIName}</h2>
                                        <h3><b>{items.data.expIPos}</b></h3>
                                        <h3>Duration - {items.data.expIMon} months</h3>
                                        <div className="experience__task">
                                            <h3>Tasks</h3>
                                            <p>{items.data.expIDescription}</p>
                                        </div>
                                    </div>
                                    <div className="experience__content">
                                        <h2>{items.data.expIIName}</h2>
                                        <h3><b>{items.data.expIIPos}</b></h3>
                                        <h3>Duration - {items.data.expIIMon} months</h3>
                                        <div className="experience__task">
                                            <h3>Tasks</h3>
                                            <p>{items.data.expIIDescription}</p>
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
                                        <li>{items.data.sk1}</li>
                                        <li>{items.data.sk2}</li>
                                        <li>{items.data.sk3}</li>
                                        <li>{items.data.sk4}</li>
                                        <li>{items.data.sk5}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="resume__projects">
                                <div className="projects__details">
                                    <h1>Projects</h1>
                                    <div className="projects__content">
                                        <div className="projects__title">
                                            <h2>{items.data.prName}</h2>
                                            <a href={items.data.prLink} target="_blank" rel="noreferrer"><LaunchIcon />
                                            </a>
                                        </div>
                                        <p>{items.data.prDetails} </p>
                                    </div>
                                    <div className="projects__content">
                                        <div className="projects__title">
                                            <h2>{items.data.prNameI}</h2>
                                            <a href={items.data.prLinkI} target="_blank" rel="noreferrer"><LaunchIcon />
                                            </a>
                                        </div>
                                        <p>{items.data.prDetailsI} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            ))}

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
