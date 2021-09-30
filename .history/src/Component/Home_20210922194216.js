import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <h1>Hello Folks !</h1>
            <h3>Welcome To My Resume Building App</h3>
            <div className="home__container">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </div>
    )
}

export default Home
