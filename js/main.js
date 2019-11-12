var grid = document.getElementById("grid");
grid.addEventListener("click", function(){
   var holi = document.querySelector(".grid--list");
   holi.classList.remove("grid--list");
   holi.classList.add("grid");
});

var list = document.getElementById("list");
list.addEventListener("click",function(){
    var holi = document.querySelector(".grid");
    holi.classList.add("grid--list");
    holi.classList.remove("grid")
});