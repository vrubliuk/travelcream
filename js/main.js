'use strict';

// HEADER
document.getElementById("header-button-menu").onclick = () => {
    let navigationLinks = document.getElementById("header-links");
    let buttonMenuIcon = document.getElementById("header-button-menu-icon");


    if (navigationLinks.className === "header-links") {
        navigationLinks.className += " responsive";
        buttonMenuIcon.setAttribute("data-icon", "angle-up");
    } else {
        navigationLinks.className = "header-links";
        buttonMenuIcon.setAttribute("data-icon", "angle-down");
    }
}





window.onscroll = () => {
    let header = document.getElementsByTagName("header")[0];
    let logo = document.getElementById('website-logo');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //    header.style.backgroundColor = "#1f2336";
       header.style.backgroundColor = "rgba(0, 0,0, 0.75)";
        // header.style.padding = "10px 0";
  


      } else {
        header.style.backgroundColor = "";
        // header.style.padding = "";
   
      }


    // if (Number(document.body.scrollHeight) > 0) {
    //    document.getElementsByTagName("header")[0].style.backgroundColor = "red";
    // } else {
    //     document.getElementsByTagName("header")[0].style.backgroundColor = "transparent";
    // }
}
