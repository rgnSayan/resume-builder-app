import React from 'react'
import './PersonalInfo.css'

function PersonalInfo() {
    return (
        <div className="personalInfo">
            <input type="text" id="name" placeholder="Please Enter Your Name Here " />
            <input type="email" id="email" placeholder="Please Enter Your Email Here" />
        </div>
    )
}

export default PersonalInfo
