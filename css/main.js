const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

menuBtn.addEventListener("click", () => {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
    window.addEventListener("click", closeMenu);
  } else {
    menuList.style.display = "none";
    window.removeEventListener("click", closeMenu);
  }
});

function closeMenu(event) {
  if (!event.target.matches("#menu-btn, #menu-list *")) {
    menuList.style.display = "none";
    window.removeEventListener("click", closeMenu);
  }
}

// var bn = document.querySelector()
// flag = 1
// function f1(){
//     alert("I LOVE U")
// }
// function f(){
//     if (flag == 1)
//     {
//         bn.style.top=365
//         bn.style.left=300
//         flag=2
//     }
// }