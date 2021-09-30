import React, { useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Button from '@material-ui/core/Button';
import './MainFile.css'

function MainFile() {
    const [name, setName] = useState('')
    const [bio, setBio] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [bday, setBday] = useState("")
    const [githubInput, setGithubInput] = useState("")
    const [linkedinInput, setLinkedinInput] = useState("")
    const [schoolNameX, setSchoolNameX] = useState("")
    return (
        <div className="mainFile">
            <div className="personalInfo">
                <h1>Personal Information</h1>
                <div className="main__container">
                    <form className="infoContainer">
                        <label htmlFor="name">Name ➤ </label>
                        <input type="text" id="name" placeholder="Enter Here " value={name}
                            onChange={e => setName(e.target.value)} />
                        <label htmlFor="bio">Bio ➤</label>
                        <textarea id="bio" placeholder="Tell Something about Yourself"
                            value={bio} onChange={e => setBio(e.target.value)} />
                        <label htmlFor="email">Email ➤</label>
                        <input type="email" id="email" placeholder="Enter Here" value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="text">Address ➤</label>
                        <input type="text" id="address" placeholder="Enter Here" value={address}
                            onChange={e => setAddress(e.target.value)} />
                    </form>
                    <form className="infoContainer">
                        <label htmlFor="phone">Phone ➤</label>
                        <input type="tel" id="phone" placeholder="[0-9]{4}-[0-9]{3}-[0-9]{3}" value={phone}
                            onChange={e => setPhone(e.target.value)} />
                        <label htmlFor="date">Birth Date ➤</label>
                        <input type="date" id="date" placeholder="Enter Here" value={bday}
                            onChange={e => setBday(e.target.value)} />
                        <label htmlFor="Github">Github Link ➤</label>
                        <input type="text" id="Github" placeholder="Enter Here" value={githubInput}
                            onChange={e => setGithubInput(e.target.value)} />
                        <label htmlFor="Linkedin">Linkedin Link ➤</label>
                        <input type="text" id="Linkedin" placeholder="Enter Here" value={linkedinInput}
                            onChange={e => setLinkedinInput(e.target.value)} />
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
                        <input type="text" name="schoolName" placeholder="Enter School Name" value={schoolNameX}
                            onChange={e => setSchoolNameX(e.target.value)} />
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
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 1st Skill" />
                    </div>
                    <div className="skills__two">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 2nd Skill" />
                    </div>
                    <div className="skills__three">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 3rd Skill" />
                    </div>
                    <div className="skills__four">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 4th Skill" />
                    </div>
                    <div className="skills__five">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 5th Skill" />
                    </div>
                </div>
            </div>

            {/* Internship Details */}

            <div className="internship">
                <div className="project__container">
                    <h1>Projects</h1>
                    <div className="project__one">
                        <div className="projectOne__header">
                            <h2> Project 1</h2>
                            <CreateIcon />
                        </div>
                        <input type="text" placeholder="Enter 1st  Project Name" />
                        <input type="text" placeholder="Enter Github Link " />
                        <textarea placeholder="Enter Project Details" />
                    </div>
                    <div className="project__two">
                        <div className="projectTwo__header">
                            <h2>Project 2</h2>
                            <CreateIcon />
                        </div>
                        <input type="text" placeholder="Enter 2nd Project Name" />
                        <input type="text" placeholder="Enter Github Link " />
                        <textarea placeholder="Enter Project Details" />
                    </div>
                </div>
            </div>

            {/*Experience  Details*/}

            <div className="experience">
                <h1>Experience (Internships)</h1>
                <div className="experience__container">
                    <div className="experience__content">
                        <div className="experience__header">
                            <LocalMallIcon />
                            <h2>Experience 1</h2>
                        </div>
                        <div className="experience__input">
                            <input type="text" placeholder="Organization Name" />
                            <input type="text" placeholder="Position Offered" />
                            <input type="text" placeholder="Duration (in Months)" />
                            <textarea type="text" placeholder="Experience Description In Details" />
                        </div>
                    </div>
                    <div className="experience__content">
                        <div className="experience__header">
                            <LocalMallIcon />
                            <h2>Experience 2</h2>
                        </div>
                        <div className="experience__input">
                            <input type="text" placeholder="Organization Name" />
                            <input type="text" placeholder="Position Offered" />
                            <input type="text" placeholder="Duration (in Months)" />
                            <textarea type="text" placeholder="Experience Description In Details" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="btn">
                <Button variant="contained" color="secondary">Preview CV</Button>
            </div>
        </div >
    )
}

export default MainFile
