const minus = document.querySelector(".minus")
const pilus = document.querySelector(".pilus")
const sonelement = document.querySelector(".son")
let son = 0;
pilus.addEventListener("click", ()=>{
    son ++;
    sonelement.textContent = son;
})
minus.addEventListener("click", ()=>{
    if(son>0){
        son --;
        sonelement.textContent = son;
    }
})