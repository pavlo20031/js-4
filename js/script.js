// Polygons
const polygon = prompt("enter name:");
const userPolygon = prompt("enter surname:");

if (polygon && userPolygon === "") {
    alert("Не всі поля заповнені");
} else {
    alert("Обидва поля заповнені");
}

// Numbers
const number = Number(prompt("Enter your number:"));
const userNumber = Number(prompt("Enter your number please:"));
const res = number + userNumber;

if (res > 10) {
    alert("Сума більша за 10");
} else {
    alert("Сума менша або дорівнює 10");
}

// Text
const text = prompt("Enter: 'JavaScript' ");

if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}

// Num
const num = Number(prompt("enter your num:"));

if (num > 10 && num < 20) {
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20");
}

// Login
const name = prompt("enter your name:") ;
const email = prompt("enter your email:") ;
const password = prompt("enter your password");

if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
    alert("Перенаправлення на іншу сторінку");
} else {
    alert("Помилка: неправильне заповнення");
}