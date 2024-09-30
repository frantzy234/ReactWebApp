import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './../.././App.css/';

function Contact({ logo }) {

    const switchPic = () => {
        setCurrentPic("https://static.wixstatic.com/media/fa1267_8d5e4df280eb42f496d1c6544a8eee8b~mv2.gif")
    }

const [currentPic, setCurrentPic] = useState("https://www.revechat.com/wp-content/uploads/2022/02/Great-Customer-Support-jpg.webp")
return (


    <div>
      <img src={currentPic}  alt=""  className="topImg" onClick={switchPic}/>

    
    
        <h1>Contact Us</h1>


  
      <div className="info">Phone: 555-555-5555 <br />
      Email: 123MovieszSupport@123Moviez.com
    

      </div>
      
    </div>
  );
}

export default Contact;