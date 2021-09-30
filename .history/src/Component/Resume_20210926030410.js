import React from "react";
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
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
                <div className="resume__mail">
                    <MailIcon />
                    <label>1805603@kiit.ac.in</label>
                </div>
                <div className="resume__location">
                    <RoomIcon />
                </div>
            </div>
        </div>
    );
}

export default Resume;