import React from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import './MainFile.css'

function MainFile() {
    return (
        <div className="mainFile">
            <div className="personalInfo">
                <h1>Personal Information</h1>
                <div className="main__container">
                    <form className="infoContainer">
                        <label htmlFor="name">Name ➤ </label>
                        <input type="text" id="name" placeholder="Enter Here " />
                        <label htmlFor="bio">Bio ➤</label>
                        <textarea id="bio" placeholder="Tell Something about Yourself" />
                        <label htmlFor="email">Email ➤</label>
                        <input type="email" id="email" placeholder="Enter Here" />
                        <label htmlFor="text">Address ➤</label>
                        <input type="text" id="address" placeholder="Enter Here" />
                    </form>
                    <form className="infoContainer">
                        <label htmlFor="phone">Phone ➤</label>
                        <input type="tel" id="phone" placeholder="[0-9]{4}-[0-9]{3}-[0-9]{3}" />
                        <label htmlFor="date">Birth Date ➤</label>
                        <input type="date" id="date" placeholder="Enter Here" />
                        <label htmlFor="Github">Github Link ➤</label>
                        <input type="text" id="Github" placeholder="Enter Here" />
                        <label htmlFor="Linkedin">Linkedin Link ➤</label>
                        <input type="text" id="Linkedin" placeholder="Enter Here" />
                    </form>
                </div>
            </div>
            {/* Education Details */}
            <div className="educationDetails">
                <h1>Education Details</h1>
                <div className="main__education">
                    <div className="secondary__container">
                        <h2>Secondary(X) Details</h2>
                        <label htmlFor="schoolName">Name of the School ➤</label>
                        <input type="text" name="schoolName" placeholder="Enter School Name" />
                        <label htmlFor="percentage">Percentage % ➤</label>
                        <input type="text" name="percentage" placeholder="Enter Here" />
                        <label htmlFor="boardX">Board Name ➤</label>
                        <input type="text" name="boardX" placeholder="Enter Here" />
                        <label htmlFor="startDateX">Starting Date ➤</label>
                        <input type="date" name="startDateX" placeholder="Enter Here" />
                        <label htmlFor="endDateX">Ending Date ➤</label>
                        <input type="date" name="endDateX" placeholder="Enter Here" />
                    </div>
                    <div className="highSecondary__container">
                        <h2>High Secondary(XII) Details</h2>
                        <label htmlFor="schoolNameXII">Name of the School ➤</label>
                        <input type="text" name="schoolNameXII" placeholder="Enter School Name" />
                        <label htmlFor="percentageXII">Percentage % ➤</label>
                        <input type="text" name="percentageXII" placeholder="Enter Here" />
                        <label htmlFor="boardXII">Board Name ➤</label>
                        <input type="text" name="boardXII" placeholder="Enter Here" />
                        <label htmlFor="startDateXII">Starting Date ➤</label>
                        <input type="date" name="startDateXII" placeholder="Enter Here" />
                        <label htmlFor="endDateXII">Ending Date ➤</label>
                        <input type="date" name="endDateXII" placeholder="Enter Here" />
                    </div>
                    <div className="university__container">
                        <h2>University Details</h2>
                        <label htmlFor="universityName">University Name ➤</label>
                        <input type="text" name="university" placeholder="Enter School Name" />
                        <label htmlFor="universityPercentage">Cgpa ➤</label>
                        <input type="text" name="universityPercentage" placeholder="Enter Here" />
                        <label htmlFor="branch">Branch ➤</label>
                        <input type="text" name="branch" placeholder="Enter Here" />
                        <label htmlFor="startDateU">Starting Date ➤</label>
                        <input type="date" name="startDateU" placeholder="Enter Here" />
                        <label htmlFor="endDateU">Ending Date ➤</label>
                        <input type="date" name="endDateU" placeholder="Enter Here" />
                    </div>
                </div>
            </div>
            {/* Skills Details */}
            <div className="skills">
                <h1>Skills</h1>
                <div className="skills__container">
                    <div className="skills__one">
                        <CheckCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 1st Skill" />
                    </div>
                    <div className="skills__two">
                        <CheckCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 2nd Skill" />
                    </div>
                    <div className="skills__three">
                        <CheckCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 3rd Skill" />
                    </div>
                    <div className="skills__four">
                        <CheckCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 4th Skill" />
                    </div>
                    <div className="skills__five">
                        <CheckCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 5th Skill" />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default MainFile
