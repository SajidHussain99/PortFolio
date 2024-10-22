
// var icon = document.getElementById("icon");
// var changeColor=document.getElementsByClassName("header-links");
// icon.onclick = function()
//     {
//         document.body.classList.toggle("dark-theme");
//         document.body.classList.toggle("changeColor");
//         if(document.body.classList.contains("dark-theme")){
//             icon.src="images/sun.png";
                
//         }
//         else{
//              icon.src="images/moon.png";
//          }
//     }

    ////

var icon = document.getElementById("icon");
var changeColorElements = document.getElementsByClassName("header-links");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("changeColor");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }

    // If you want to change color for header links, you can do it here
    for (var i = 0; i < changeColorElements.length; i++) {
        // Apply any necessary changes to each header link element
        // Example: change the color or add a class
    }
};
