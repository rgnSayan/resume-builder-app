import React, { useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Button from '@material-ui/core/Button';
import './MainFile.css'
// import db from '../firebase'
// import firebase from 'firebase'
import Resume from './Resume';

function MainFile() {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [bio, setBio] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [bday, setBday] = useState("")
    const [githubInput, setGithubInput] = useState("")
    const [linkedinInput, setLinkedinInput] = useState("")
    const [schoolNameX, setSchoolNameX] = useState("")
    const [percentageX, setPercentageX] = useState("")
    const [boardX, setBoardX] = useState("")
    const [startDateX, setStartDateX] = useState("")
    const [endDateX, setEndDateX] = useState("")
    const [schoolNameXII, setSchoolNameXII] = useState("")
    const [percentageXII, setPercentageXII] = useState("")
    const [boardXII, setBoardXII] = useState("")
    const [startDateXII, setStartDateXII] = useState("")
    const [endDateXII, setEndDateXII] = useState("")
    const [universityName, setUniversityName] = useState("")
    const [cgpa, setCgpa] = useState("")
    const [universityBranch, setUniversityBranch] = useState("")
    const [universityStartDate, setUniversityStartDate] = useState("")
    const [universityEndDate, setUniversityEndDate] = useState("")
    const [sk1, setSk1] = useState("")
    const [sk2, setSk2] = useState("")
    const [sk3, setSk3] = useState("")
    const [sk4, setSk4] = useState("")
    const [sk5, setSk5] = useState("")
    const [prName, setPrName] = useState("")
    const [prLink, setPrLink] = useState("")
    const [prDetails, setPrDetails] = useState("")
    const [prNameI, setPrNameI] = useState("")
    const [prLinkI, setPrLinkI] = useState("")
    const [prDetailsI, setPrDetailsI] = useState("")
    const [expIName, setExpIName] = useState("")
    const [expIPos, setExpIPos] = useState("")
    const [expIMon, setExpIMon] = useState("")
    const [expIDescription, setExpIDescription] = useState("")
    const [expIIName, setExpIIName] = useState("")
    const [expIIPos, setExpIIPos] = useState("")
    const [expIIMon, setExpIIMon] = useState("")
    const [expIIDescription, setExpIIDescription] = useState("")

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
                        <h2>Secondary(X)</h2>
                        <label htmlFor="schoolName">Name of the School ➤</label>
                        <input type="text" name="schoolName" placeholder="Enter School Name" value={schoolNameX}
                            onChange={e => setSchoolNameX(e.target.value)} />
                        <label htmlFor="percentage">Percentage % ➤</label>
                        <input type="text" name="percentage" placeholder="Enter Here" value={percentageX}
                            onChange={e => setPercentageX(e.target.value)} />
                        <label htmlFor="boardX">Board Name ➤</label>
                        <input type="text" name="boardX" placeholder="Enter Here" value={boardX}
                            onChange={e => setBoardX(e.target.value)} />
                        <label htmlFor="startDateX">Starting Date ➤</label>
                        <input type="date" name="startDateX" placeholder="Enter Here" value={startDateX}
                            onChange={e => setStartDateX(e.target.value)} />
                        <label htmlFor="endDateX">Ending Date ➤</label>
                        <input type="date" name="endDateX" placeholder="Enter Here" value={endDateX}
                            onChange={e => setEndDateX(e.target.value)} />
                    </div>
                    <div className="highSecondary__container">
                        <h2>High Secondary(XII)</h2>
                        <label htmlFor="schoolNameXII">Name of the School ➤</label>
                        <input type="text" name="schoolNameXII" placeholder="Enter School Name" value={schoolNameXII}
                            onChange={e => setSchoolNameXII(e.target.value)} />
                        <label htmlFor="percentageXII">Percentage % ➤</label>
                        <input type="text" name="percentageXII" placeholder="Enter Here" value={percentageXII}
                            onChange={e => setPercentageXII(e.target.value)} />
                        <label htmlFor="boardXII">Board Name ➤</label>
                        <input type="text" name="boardXII" placeholder="Enter Here" value={boardXII}
                            onChange={e => setBoardXII(e.target.value)} />
                        <label htmlFor="startDateXII">Starting Date ➤</label>
                        <input type="date" name="startDateXII" placeholder="Enter Here" value={startDateXII}
                            onChange={e => setStartDateXII(e.target.value)} />
                        <label htmlFor="endDateXII">Ending Date ➤</label>
                        <input type="date" name="endDateXII" placeholder="Enter Here" value={endDateXII}
                            onChange={e => setEndDateXII(e.target.value)} />
                    </div>

                    <div className="university__container">
                        <h2>University </h2>
                        <label htmlFor="universityName">University Name ➤</label>
                        <input type="text" name="university" placeholder="Enter School Name" value={universityName} onChange={e => setUniversityName(e.target.value)} />
                        <label htmlFor="universityPercentage">CGPA ➤</label>
                        <input type="text" name="universityPercentage" placeholder="Enter Here" value={cgpa} onChange={e => setCgpa(e.target.value)} />
                        <label htmlFor="branch">Branch ➤</label>
                        <input type="text" name="branch" placeholder="Enter Here" value={universityBranch}
                            onChange={e => setUniversityBranch(e.target.value)} />
                        <label htmlFor="startDateU">Starting Date ➤</label>
                        <input type="date" name="startDateU" placeholder="Enter Here" value={universityStartDate}
                            onchange={e => setUniversityStartDate(e.target.value)} />
                        <label htmlFor="endDateU">Ending Date ➤</label>
                        <input type="date" name="endDateU" placeholder="Enter Here" value={universityEndDate}
                            onChange={e => setUniversityEndDate(e.target.value)} />
                    </div>
                </div>
            </div>

            {/* Skills Details */}

            <div className="skills">
                <h1>Skills</h1>
                <div className="skills__container">
                    <div className="skills__one">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 1st Skill" value={sk1}
                            onChange={e => setSk1(e.target.value)} />
                    </div>
                    <div className="skills__two">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 2nd Skill" value={sk2}
                            onChange={e => setSk2(e.target.value)} />
                    </div>
                    <div className="skills__three">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 3rd Skill" value={sk3}
                            onChange={e => setSk3(e.target.value)} />
                    </div>
                    <div className="skills__four">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 4th Skill" value={sk4}
                            onChange={e => setSk4(e.target.value)} />
                    </div>
                    <div className="skills__five">
                        <AddCircleOutlineIcon />
                        <input type="text" placeholder="Enter Your 5th Skill" value={sk5}
                            onChange={e => setSk5(e.target.value)} />
                    </div>
                </div>
            </div>

            {/* Internship Details */}

            <div className="project">
                <div className="project__container">
                    <h1>Projects</h1>
                    <div className="project__one">
                        <div className="projectOne__header">
                            <h2> Project 1</h2>
                            <CreateIcon />
                        </div>
                        <input type="text" placeholder="Enter 1st  Project Name" value={prName}
                            onChange={e => setPrName(e.target.value)} />
                        <input type="text" placeholder="Enter Github Link " value={prLink}
                            onChange={e => setPrLink(e.target.value)} />
                        <textarea placeholder="Enter Project Details" value={prDetails}
                            onChange={e => setPrDetails(e.target.value)} />
                    </div>
                    <div className="project__two">
                        <div className="projectTwo__header">
                            <h2>Project 2</h2>
                            <CreateIcon />
                        </div>
                        <input type="text" placeholder="Enter 2nd Project Name" value={prNameI}
                            onChange={e => setPrNameI(e.target.value)} />
                        <input type="text" placeholder="Enter Github Link " value={prLinkI}
                            onChange={e => setPrLinkI(e.target.value)} />
                        <textarea placeholder="Enter Project Details" value={prDetailsI}
                            onChange={e => setPrDetailsI(e.target.value)} />
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
                            <input type="text" placeholder="Organization Name" value={expIName}
                                onChange={e => setExpIName(e.target.value)} />
                            <input type="text" placeholder="Position Offered" value={expIPos}
                                onChange={e => setExpIPos(e.target.value)} />
                            <input type="text" placeholder="Duration (in Months)" value={expIMon}
                                onChange={e => setExpIMon(e.target.value)} />
                            <textarea type="text" placeholder="Experience Description In Details"
                                value={expIDescription} onChange={e => setExpIDescription(e.target.value)} />
                        </div>
                    </div>

                    <div className="experience__content">
                        <div className="experience__header">
                            <LocalMallIcon />
                            <h2>Experience 2</h2>
                        </div>
                        <div className="experience__input">
                            <input type="text" placeholder="Organization Name" value={expIIName}
                                onChange={e => setExpIIName(e.target.value)} />
                            <input type="text" placeholder="Position Offered" value={expIIPos}
                                onChange={e => setExpIIPos(e.target.value)} />
                            <input type="text" placeholder="Duration (in Months)" value={expIIMon}
                                onChange={e => setExpIIMon(e.target.value)} />
                            <textarea type="text" placeholder="Experience Description In Details"
                                value={expIIDescription} onChange={e => setExpIIDescription(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="btn" >
                <Button variant="contained" color="primary" disabled={!name} onClick={() => setOpen(!open)}>View CV</Button>
            </div>

            {open ? (
                <div className="resume__container">
                    <Resume
                        name={name} bio={bio} email={email} address={address} phone={phone} bday={bday}
                        githubInput={githubInput} linkedinInput={linkedinInput} schoolNameX={schoolNameX}
                        percentageX={percentageX} boardX={boardX} endDateX={endDateX} startDateX={startDateX}
                        schoolNameXII={schoolNameXII} percentageXII={percentageXII} boardXII={boardXII}
                        endDateXII={endDateXII} startDateXII={startDateXII} universityName={universityName} cgpa={cgpa}
                        universityBranch={universityBranch} universityStartDate={universityStartDate}
                        universityEndDate={universityEndDate}
                    />
                </div>
            ) : null}

        </div >
    )
}

export default MainFile

// const [name, setName] = useState('')
//     const [bio, setBio] = useState("")
//     const [email, setEmail] = useState("")
//     const [address, setAddress] = useState("")
//     const [phone, setPhone] = useState("")
//     const [bday, setBday] = useState("")
//     const [githubInput, setGithubInput] = useState("")
//     const [linkedinInput, setLinkedinInput] = useState("")
//     const [schoolNameX, setSchoolNameX] = useState("")
//     const [percentageX, setPercentageX] = useState("")
//     const [boardX, setBoardX] = useState("")
//     const [startDateX, setStartDateX] = useState("")
//     const [endDateX, setEndDateX] = useState("")
//     const [schoolNameXII, setSchoolNameXII] = useState("")
//     const [percentageXII, setPercentageXII] = useState("")
//     const [boardXII, setBoardXII] = useState("")
//     const [startDateXII, setStartDateXII] = useState("")
//     const [endDateXII, setEndDateXII] = useState("")
//     const [universityName, setUniversityName] = useState("")
//     const [cgpa, setCgpa] = useState("")
//     const [universityBranch, setUniversityBranch] = useState("")
//     const [universityStartDate, setUniversityStartDate] = useState("")
//     const [universityEndDate, setUniversityEndDate] = useState("")
//     const [sk1, setSk1] = useState("")
//     const [sk2, setSk2] = useState("")
//     const [sk3, setSk3] = useState("")
//     const [sk4, setSk4] = useState("")
//     const [sk5, setSk5] = useState("")
//     const [prName, setPrName] = useState("")
//     const [prLink, setPrLink] = useState("")
//     const [prDetails, setPrDetails] = useState("")
//     const [prNameI, setPrNameI] = useState("")
//     const [prLinkI, setPrLinkI] = useState("")
//     const [prDetailsI, setPrDetailsI] = useState("")
//     const [expIName, setExpIName] = useState("")
//     const [expIPos, setExpIPos] = useState("")
//     const [expIMon, setExpIMon] = useState("")
//     const [expIDescription, setExpIDescription] = useState("")
//     const [expIIName, setExpIIName] = useState("")
//     const [expIIPos, setExpIIPos] = useState("")
//     const [expIIMon, setExpIIMon] = useState("")
//     const [expIIDescription, setExpIIDescription] = useState("")
