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

// document.body.onscroll = () => {
//     if (Number(document.body.scrollHeight) > 0) {
//        document.getElementsByTagName("header")[0].style.backgroundColor = "red";
//     } else {
//         document.getElementsByTagName("header")[0].style.backgroundColor = "transparent";
//     }
// }
