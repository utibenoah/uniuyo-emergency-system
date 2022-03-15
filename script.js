let menue=document.querySelector('.togglebar')
let navlists =document.querySelector('.nav-lists')

// menue.addEventListener('onclick', function () {
//     navlists.classList.toggle('active')
// })

console.log(navlists)
menue.onclick=()=>{
    navlists.classList.toggle('active')
}