'use strict';
$(document).ready(function () {
    // SMOOTH SCROLLING ANCHOR LINKS
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
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
            header.style.backgroundColor = "rgba(0, 0,0, 0.75)";
        } else {
            header.style.backgroundColor = "";
        }
    }

    // CUSTOM SCROLLBAR
    // let ps = new PerfectScrollbar('#table-container');






});