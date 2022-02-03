var checking = document.getElementById("output");
var shaaa; 
function thing(){
    if(document.getElementById("vegan").checked){
        shaaa = document.querySelectorAll("last-name");
        checking.innerHTML =( "checked "+ shaaa);

    }
}
document.getElementById("submit").addEventListener("click",thing);