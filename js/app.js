const on = document.querySelector("#on");
const sidemenu = document.querySelector("#sidemenu");

on.addEventListener("click", () => { 
    if(sidemenu.classList.contains('d-none')) {
        sidemenu.classList.toggle("d-none");
        sidemenu.classList.toggle("active");
    } else {
        sidemenu.classList.toggle("d-none");
        sidemenu.classList.toggle("active");
    }
});


//up arrow button

// window.onload.addEventListener('scroll',()=> {
//     console.log(window.screenY)
//     if(window.screenY >= 50)
//     {
//         document.querySelector('.up-btn').style.visibility="hidden"
//     }else
//     {
//         document.querySelector('.up-btn').style.visibility="visible";
//     }
// })

const up = document.querySelector('.up-btn');
up.addEventListener('click', function() {
    console.log(window.onscroll)
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
})