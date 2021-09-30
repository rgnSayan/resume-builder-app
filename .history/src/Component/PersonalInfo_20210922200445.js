import React from 'react'
import './PersonalInfo.css'

function PersonalInfo() {
    return (
        <div className="personalInfo">
            <h1>Personal Information</h1>
            <form>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" placeholder="Enter Here " />
                <label htmlFor="bio">Bio :</label>
                <textarea rows="5" cols="100" id="bio" placeholder="Enter HereTell Something about Yourself" />
                <input type="email" id="email" placeholder="Please Enter Your Email Here" />
            </form>
        </div>
    )
}

export default PersonalInfo
