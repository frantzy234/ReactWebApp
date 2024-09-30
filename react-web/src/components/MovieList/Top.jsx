import React, { useState } from "react";
import './../../App.css';

function Top({ logo }) {
  const [currentPic, setCurrentPic] = useState("https://media0.giphy.com/media/l0Iy5Wa8fkAewhfW0/giphy.gif?cid=6c09b95236j4po8aivw2ea6934kxlgy885qdi5oq27phripw&ep=v1_gifs_search&rid=giphy.gif&ct=g");
  const [showMessage, setShowMessage] = useState(false); 
  const switchPic = () => {
      setCurrentPic("https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/02/gatsby-2.jpg");
  };

  const handleClick = () => {
      switchPic();
      setShowMessage(true); 
  };

  return (
      <div>
          <h2>Movie Quote of The Day</h2>
          <img src={currentPic} alt="" className="topImg" onClick={handleClick} />
          {showMessage && (
              <div className="info">
                  See You Tomorrow!
              </div>
          )}
      </div>
  );
}

export default Top;
