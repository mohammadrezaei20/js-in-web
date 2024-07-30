document.querySelector("body").addEventListener("contextmenu",(e)=>{
    e.preventDefault()
})
// let items = document.getElementsByClassName("to-do-item")
// for(let i=0;i<items.length;i++){
//     console.log(items[i]);
// }
// let newspan = document.createElement("span");
// newspan.className = "to-do-span";
// newspan.innerText = "dummy item five";
// let newli = document.createElement("li");
// newli.className = "to-do-item";
// newli.appendChild(newspan)
// document.querySelector("ul").appendChild(newli)
// document.querySelector("#to-do-list").addEventListener("touchstart", (e) => {
//     console.log(e)
// })
// document.querySelector(".goftar").addEventListener("click", (event) => {
//      document.querySelector("footer").remove()
//      document.querySelector("main").style.backgroundColor = "blue";
//     console.log(event)
// }
// )
// document.querySelector("ul").addEventListener("click",()=>{
// console.log("ul")
// })
addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop >= 180) {
        document.querySelector("main").style.backgroundColor = "aqua";

    }
})