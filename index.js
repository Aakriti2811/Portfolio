const menu = document.querySelector('#menu')
const navbarMenu = document.querySelector('#navbar-menu')
const close = document.getElementById("close")

console.log(close)

menu.addEventListener("click" , ()=>{
    if(navbarMenu.classList.contains("open")){
      navbarMenu.classList.remove("open")
    }
    else{
        navbarMenu.classList.add("open")
    }
})

close.addEventListener("click" , ()=>{
 
    navbarMenu.classList.remove("open")

})