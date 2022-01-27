import React from 'react';
import forumImage from "./../img/vote.png";


function Header() {
    const headerStyle = {
        fontFamily: 'sans-serif',
        paddingTop: '50px',
        textAlign: "center",
        color: 'red'
    }
  return (
     <div> 
    <h1 style={headerStyle}>Forum</h1>
    <img src={forumImage} alt="An image of votes" />
    </div>
  );
}

export default Header;