const header = document.getElementById('header')
const buttonNavbar = document.getElementById('mobile_menu')
const navBar = document.getElementById('header__nav')
const linksButtonNavBar = document.getElementsByClassName('header__nav__link')

buttonNavbar.addEventListener('click',activeNavBar)

for (link of linksButtonNavBar){
    link.addEventListener('click',activeNavBar)
}

function activeNavBar(){
    // console.log(linksButtonNavBar)
    navBar.classList.toggle('header__nav-activate')
    buttonNavbar.classList.toggle('mobile_menu-activate')
    if(navBar.classList[1] == 'header__nav-activate'){
        // console.log('Ativo')
        header.style.backgroundColor = '#363636'
    }else{
        // console.log('Desativo')
        header.style.backgroundColor = '#363636cc'
    }

    
}