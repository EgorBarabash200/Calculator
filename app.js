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
function result() {
    switch (operation) {
        case 1:
            if (er()) return "Ошибка: ввдите число ";
            return Number(strNumTwo) + Number(strNumOne);
            break;
        case 2:
            if (er()) return "Ошибка: ввдите число ";
            return Number(strNumTwo) - Number(strNumOne);
            break;
        case 3:
            if (er()) return "Ошибка: ввдите число ";
            if (Number(strNumOne) === 0) {
                return "Делить на ноль нельзя";
            }
            return Number(strNumTwo) / Number(strNumOne);
            break;
        case 4:
            if (er()) return "Ошибка: ввдите число ";
            return Number(strNumTwo) * Number(strNumOne);
            break;
    }
}
function er() {
    if (strNumOne === '' || strNumTwo === '') {
        return true;
    }
    return false;
}
function printChisla(value) {
    const hNum = document.createElement("h1");
    hNum.textContent = value;
    hNum.className = 'res-h';
    strNumOne += hNum.textContent;
    console.log(strNumOne);
    return divRes.appendChild(hNum);
}
function arithmeticOperations(value, num) {
    const hNum = document.createElement("h1");
    hNum.textContent = value;
    hNum.className = 'res-h';
    strNumTwo = strNumOne;
    strNumOne = '';
    operation = num;
    divRes.appendChild(hNum);
    result();
}
zero.addEventListener("click", (event) => {
    printChisla('0');
});
one.addEventListener("click", (event) => {
    printChisla('1');
});
two.addEventListener("click", (event) => {
    printChisla('2');
});
three.addEventListener("click", (event) => {
    printChisla('3');
});
four.addEventListener("click", (event) => {
    printChisla('4');
});
five.addEventListener("click", (event) => {
    printChisla('5');
});
six.addEventListener("click", (event) => {
    printChisla('6');
});
seven.addEventListener("click", (event) => {
    printChisla('7');
});
eight.addEventListener("click", (event) => {
    printChisla('8');
});
nine.addEventListener("click", (event) => {
    printChisla('9');
});
sum.addEventListener("click", (event) => {
    arithmeticOperations('+', 1);
});
difference.addEventListener("click", (event) => {
    arithmeticOperations('-', 2);
});
delenie.addEventListener("click", (event) => {
    arithmeticOperations('/', 3);
});
proisvedenie.addEventListener("click", (event) => {
    arithmeticOperations('*', 4);
});
delite.addEventListener("click", (event) => {
    while (divRes.firstChild) {
        divRes.removeChild(divRes.firstChild);
    }
    strNumOne = '';
    strNumTwo = '';
});
resEqally.addEventListener("click", (event) => {
    res = result();
    const hNum = document.createElement("h1");
    hNum.textContent = "=" + String(res);
    hNum.className = 'res-h';
    divRes.appendChild(hNum);
});