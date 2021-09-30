import React from 'react'
import './PersonalInfo.css'

function PersonalInfo() {
    return (
        <div className="personalInfo">
            <h1>Personal Information</h1>
            <div className="main__container">
                <form className="infoContainer">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" placeholder="Enter Here " />
                    <label htmlFor="bio">Bio :</label>
                    <textarea id="bio" placeholder="Tell Something about Yourself" />
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="Enter Here" />
                    <label htmlFor="text">Address :</label>
                    <input type="text" id="address" placeholder="Enter Here" />
                </form>
                <form className="infoContainer">
                    <label htmlFor="phone">Phone :</label>
                    <input type="tel" id="phone" placeholder="Enter Here " />
                    <label htmlFor="bio">Bio :</label>
                    <textarea id="bio" placeholder="Tell Something about Yourself" />
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="Enter Here" />
                    <label htmlFor="text">Address :</label>
                    <input type="text" id="address" placeholder="Enter Here" />
                </form>
            </div>
        </div>
    )
}

export default PersonalInfo
