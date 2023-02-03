const bar = document.getElementById("bar");
const menu = document.getElementById("menu");
const body = document.getElementById('body');
const rootele = document.getElementsByTagName('html')
const showMenu = () => {
    if(menu.style.left=="0%")
    {
        menu.style.left="-100%"
        body.style.overflow="auto"
        rootele.style.overflow="auto"
    }
    else{
        menu.style.left="0%"
        body.style.overflow="hidden"
        rootele.style.overflow="hidden"
    }
}
bar.addEventListener('click',showMenu)