import React from 'react'
import './PersonalInfo.css'

function PersonalInfo() {
    return (
        <div className="personalInfo">
            <input type="text" id="name" placeholder="Please Enter Your Name Here " />
            textarea id="w3review" name="w3review" rows="100" cols="100">
            <input type="email" id="email" placeholder="Please Enter Your Email Here" />

        </div>
    )
}

export default PersonalInfo
