
var icon = document.getElementById("icon");
var changeColor=document.getElementsByClassName("header-links");
icon.onclick = function()
    {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("changeColor");
        if(document.body.classList.contains("dark-theme")){
            icon.src="images/sun.png";
                
        }
        else{
             icon.src="images/moon.png";
         }
    }