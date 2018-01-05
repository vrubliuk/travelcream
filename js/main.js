'use strict';

$("#header-button-menu").click(function(){

 
  var x = document.getElementById("header-links");
    if (x.className === "") {
        x.className += " header-links-responsiv";
    } else {
        x.className = "";
    }


});



