import React from 'react';
import '../css/header.css';




function Header(probs){
    return(
    <>
    <header> <nav className="nav">
        <ul>
            <li className="home">Home</li>
            <li>Styles</li>
            <li>Contact</li>


        </ul>
        </nav></header>
    </>
    );
}

export default Header;
