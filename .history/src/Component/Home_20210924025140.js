import React from 'react'
import 'aos/dist/aos.css';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <h1>Hello Folks !</h1>
            <h3>Welcome To My Resume Building App</h3>
            <a href="#second">
                <div className="home__container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </a>
        </div>
    )
}

export default Home
