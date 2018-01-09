'use strict';
$(document).ready(function () {
    // SMOOTH SCROLLING ANCHOR LINKS
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
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
            buttonMenuIcon.innerHTML = "expand_less";
        } else {
            navigationLinks.className = "header-links";
            buttonMenuIcon.innerHTML = "expand_more";
        }
    }

    window.onscroll = () => {
        let header = document.getElementsByTagName("header")[0];
        let logo = document.getElementById('website-logo');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            header.style.backgroundColor = "rgba(0, 0,0, 0.8)";
            header.style.padding = "10px 0";
        } else {
            header.style.backgroundColor = "";
            header.style.padding = "";
        }
    }

    // Change color for active tab
    $(".section-tabs > li").click(function() {
        if (!$(this).hasClass("tab-active")) {
            $(this).addClass("tab-active");
        }
        $(this).siblings().removeClass("tab-active");
    });
});