import {React, useContext} from 'react'
// import cyno from "../images/cyno.jpg"
import {signOut} from "firebase/auth"
import {auth} from "../firebase"
import {AuthContext} from "../context/AuthContext"
import { db } from "../firebase";
import { updateDoc, doc } from 'firebase/firestore';
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  
  return (
    <div className='navbar'>
      <span className="logo">PDBB Chat O.O</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar