const zero = document.getElementById("btn-zero");
const one = document.getElementById("btn-one");
const two = document.getElementById("btn-two");
const three = document.getElementById("btn-three");
const four = document.getElementById("btn-four");
const five = document.getElementById("btn-five")
const six = document.getElementById("btn-six");
const seven = document.getElementById("btn-seven");
const eight = document.getElementById("btn-eight");
const nine = document.getElementById("btn-nine");
const sum = document.getElementById("btn-plus")
const difference = document.getElementById("btn-minus");
const delenie = document.getElementById("btn-rasdel");
const proisvedenie = document.getElementById("btn-ymnosh");
const delite = document.getElementById("btn-delet");
const resEqally = document.getElementById("btn-equally");
const divRes = document.getElementById("div-res");
let strNumOne = '';
let strNumTwo = '';
let operation = 0;
let res = 0;
function result (){
    switch(operation){
        case 1:
            return Number(strNumTwo) + Number(strNumOne);
            break;
        case 2:
            return Number(strNumTwo) - Number(strNumOne);
            break;
        case 3:
            return Number(strNumTwo) / Number(strNumOne);
            break;
        case 4:
            return Number(strNumTwo) * Number(strNumOne);
    }
}
zero.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '0';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
one.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '1';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
two.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '2';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
three.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '3';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
four.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '4';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
five.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '5';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
six.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '6';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
seven.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '7';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
eight.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '8';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
nine.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '9';
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    divRes.appendChild(hNum);
});
sum.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '+';
    hNum.className = 'res-h';
    strNumTwo = strNumOne;
    strNumOne = '';
    operation = 1;
    divRes.appendChild(hNum);
    result ();
});
difference.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '-';
    hNum.className = 'res-h';
    strNumTwo = strNumOne;
    strNumOne = '';
    operation = 2;
    divRes.appendChild(hNum);
    result ();
});
delenie.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '/';
    hNum.className = 'res-h';
    strNumTwo = strNumOne;
    strNumOne = '';
    operation = 3;
    divRes.appendChild(hNum);
    result ();
});
proisvedenie.addEventListener("click", (event) => {
    const hNum = document.createElement("h1");
    hNum.textContent = '*';
    hNum.className = 'res-h';
    strNumTwo = strNumOne;
    strNumOne = '';
    operation = 4;
    divRes.appendChild(hNum);
    result ();
});
resEqally.addEventListener("click", (event) => {
    res = result();
    const hNum = document.createElement("h1");
    hNum.textContent = "=" + String(res);
    hNum.className = 'res-h';
    divRes.appendChild(hNum);
});