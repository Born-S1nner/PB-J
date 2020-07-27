import React from 'react'

function Profile() {
    return (
    <section style={ ATab }>
        <h4>Profile</h4>
        <input 
            className='urName' 
            placeholder="Username" 
            style={inputStyle}
        /> <br/>
        <input 
            placeholder="Religion"
            style={inputStyle}
        /> <br/> 
        <button className='log'>
        </button>
    </section>
    )
}

const log = document.getElementsByClassName('log')
const user = document.getElementsByClassName('urName')

if (log === user) {
    document.createElement("div")
    

} else {
    console.log('Sign In')
}

const ATab = {
    background: 'gold',
    border: '3px solid black',
    fontSize: '30px',
    padding: '10px'
}
const inputStyle = {
    padding: '5px 9px',
    width: '80%'
}

export default Profile