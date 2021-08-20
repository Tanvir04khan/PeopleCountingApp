const defaultNo = 0;
let count = defaultNo;
    
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

function increment(){
    count = count + 1;
    countEl.textContent = count;
}

function save(){
    let countstr = count + " - ";
    saveEL.textContent = saveEL.textContent + countstr;
    countEl.textContent = defaultNo;
    count = 0;
}