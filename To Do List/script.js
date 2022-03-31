let addvar = document.querySelector(".add")
let todovar = document.querySelector(".todo")
let headervar = document.querySelector(".header")
let tablevar = document.querySelector(".table")
let xvar = document.querySelector(".x-font")

addvar.addEventListener('click',addf)
function addf(){
    tablevar.style.display='block';
}
xvar.addEventListener('click',xfunc)
function xfunc(){
    tablevar.style.display='none';
}


let btnvar = document.querySelector(".btn-add")
btnvar.addEventListener('click',btfunc)
function btfunc(){
    let mvar = document.querySelector(".all main")
    let oldhtml = mvar.innerHTML;
    let boxvar = document.querySelector("#title")
    let convar = document.querySelector("#content")
    mvar.innerHTML = oldhtml + ` <div class="add-detail">
    <header>
        <div class="add-heading">${boxvar.value}</div>
        <div class="icon color-1">-</div>
        <div class="icon color-2">E</div>
        <div class="icon color-3">X</div>
    </header>
    <main>
        <textarea cols="31" rows="10">${convar.value}</textarea>
    </main>
</div>` 
boxvar.value = ""
convar.value = ""
xfunc();
addDelLogic()
}
function addDelLogic(){

let iconvar = document.querySelectorAll(".icon.color-3")
// console.log(iconvar)
for(let i=0;i<iconvar.length;i++){
    iconvar[i].addEventListener("click", closepop)
}

function closepop(e){
    // console.log(lgcai)
    let advar = e.target.closest(".add-detail")
    advar.style.display ='none'
}

let minvar = document.querySelectorAll(".icon.color-1")
for(let i=0;i<minvar.length;i++){
    minvar[i].addEventListener("click", minpop)
}
function minpop(e){
    let mvar = e.target.closest(".add-detail");
    if(mvar.querySelector("main").style.display !== "none"){
        mvar.querySelector("main").style.display = "none"
    }else{
        mvar.querySelector("main").style.display = "flex"
    }
}

}
