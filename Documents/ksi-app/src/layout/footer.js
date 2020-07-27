import React from 'react'

function Footer() {
    return (
        <div style={footStyle}>
            <h3>
                Copyright &copy; 2020, World Destiny<br/>
                I'd hope you enjoy it
            </h3>
        </div>
    )
}

const footStyle = {
    paddingBottom: '1em',
    background:'black',
    color: 'gold'
}

export default Footer
