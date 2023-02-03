const bar = document.getElementById("bar");
const menu = document.getElementById("menu")
const showMenu = () => {
    if(menu.style.right=="100%")
    {
        menu.style.right="0%"
    }
    else{
        menu.style.right="100%"
    }
}
bar.addEventListener('click',showMenu)