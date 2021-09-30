import React from 'react'
import './Home.css'

function Home() {
    return (
        <React.Fragment>
            <div className="home">
                <h1>Hello Folks !</h1>
                <h3>Welcome To My Resume Building App</h3>
                <div className="home__container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
