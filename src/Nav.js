import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { useHistory } from 'react-router-dom';


function Nav() {
const [show, handleshow] = useState(false)
const history = useHistory()
const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleshow(true)
    }else {
        handleshow(false)
    }
}
useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return() => window.removeEventListener("scroll", transitionNavBar)
})


  return (
    <div className= {`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
        <img onClick={() => history.push("/")} className='nav_logo'
         src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
         alt="netlix"
         />
        
        <img
        onClick={() => history.push("/profile")}
         className='nav_avatar' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
         alt="pfp" 
        />
        </div>
    </div>
  )
}

export default Nav