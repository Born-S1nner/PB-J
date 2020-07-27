import React from 'react'

function About() {
    return (
        <div style={ATab}>
            <h4>About us</h4>
            <p> Online connection is the big thing in Social Media. However, nobody got time to send their time devoting on their religion. No one wants to admit their own religion as they fear that they would be judge.
                <br/>
            The time of hiding is no more. This web server will allow you to speak out your Religion without the fear of being judged.
            </p>
        </div>

    )
}

const ATab = {
    background: 'gold',
    border: '3px solid black',
    fontSize: '30px',
    padding: '10px'
}

export default About;