// start header
let nav=document.querySelector("nav")
let list=document.querySelector(".list")
let open=document.querySelector(".open")
let close=document.querySelector("header .list .close")
// let navs=document.querySelectorAll("a");

open.addEventListener("click",()=>{
  nav.classList.add("change");
  nav.style.cssText=("display:flex")
  open.style.cssText=("display:none")
  close.style.cssText=("display:flex")
})
close.addEventListener("click",()=>{
  nav.classList.remove("change");
  nav.style.cssText=("display:none")
  open.style.cssText=("display:flex")
  close.style.cssText=("display:none")
})
// navs.forEach((item)=>{
//   item.addEventListener("click",()=>{
//     item.classList.add("active");
//   })
// })

// end header 