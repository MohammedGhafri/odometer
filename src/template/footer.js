import React from 'react';
import '../css/footer.css'



function Footer(props){
    return(
    <>
    <footer className="Footer">
      <p>All rights are reserved for {props.name} &#xA9;</p>
      <span>{props.company}</span>
    </footer>
    </>
    );
}

export default Footer;