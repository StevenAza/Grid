var grid = document.getElementById("grid");
grid.addEventListener("click", function(){
   var list_grid = document.querySelector(".grid__list");
   list_grid.classList.remove("grid__list");
   list_grid.classList.add("grid");
});

var list = document.getElementById("list");
list.addEventListener("click",function(){
    var grid_l = document.querySelector(".grid");
    grid_l.classList.add("grid__list");
    grid_l.classList.remove("grid")
});