import React from 'react'
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
                <div className="secondary__container">
                    <label htmlFor="schoolName">Name of the School</label>
                    <input type="text" name="schoolName" placeholder="Enter School Name" />
                    <label htmlFor="percentage">Percentage %</label>
                    <input type="text" name="percentage" placeholder="Enter Here" />
                    <label htmlFor="boardX">Board Name</label>
                    <input type="text" name="boardX" placeholder="Enter Here" />
                    <label htmlFor="startDateX">Starting Date</label>
                    <input type="date" name="startDateX" placeholder="Enter Here" />
                    <label htmlFor="startDateX">Starting Date</label>
                    <input type="date" name="startDateX" placeholder="Enter Here" />
                </div>
            </div>

        </div>
    )
}

export default MainFile
