var btn_ctnr = document.querySelector(".btn-container");
var istatus = document.querySelector("h5");
var add = document.querySelector("#Add")
var remove = document.querySelector("#Remove")

var flag = 0;
var signal = 0;

add.addEventListener("click", function(){
    if (flag == 0) {
        add.style.backgroundColor = "darkblue";
        add.style.color = "white";
        add.innerHTML = "Added";
        istatus.innerHTML = "Friends";
        istatus.style.color = "lightgreen";

        remove.style.backgroundColor = "buttonface";
        remove.style.color = "black";
        remove.innerHTML = "Remove";
    }  
})

remove.addEventListener("click",function(){
    if (signal == 0) {
        
        remove.style.backgroundColor = "darkred";
        remove.style.color = "white";
        remove.innerHTML = "Removed";
        istatus.innerHTML = "Friend Removed";
        istatus.style.color = "red";

        add.style.backgroundColor = "buttonface";
        add.style.color = "black";
        add.innerHTML = "Add Friend";

        flag = 1; //if friend request removed cannot be recovered;
    }
})