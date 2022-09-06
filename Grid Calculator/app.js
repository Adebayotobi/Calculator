let light = document.querySelectorAll(".chang");
let black = document.querySelectorAll(".box");
let black2 = document.querySelectorAll(".hinge");
let shad = document.querySelectorAll(".box-02");
let top1 = document.querySelectorAll(".box-01");
let solution1 = document.querySelectorAll(".cal-01");
let solution2 = document.querySelectorAll(".cal-01");
let red = document.querySelectorAll(".red-me");
let green = document.querySelectorAll(".green-me");
// let sunIcon = document.querySelector(".sun-me");
let sunIcon = document.querySelector(".btn");

let setBlack = true
sunIcon.addEventListener('click', function () {

    if (setBlack) {

        light.forEach(el => {
            el.style.color = 'black';
        });
        black.forEach(el => {
            el.style.background = 'white';
            el.style.color = 'black';
        });
        black2.forEach(el => {
            el.style.background = 'grey';
        });


        shad.forEach(el => {
            el.style.background = 'white';
        });

        top1.forEach(el => {
            el.style.background = 'white';
        });

        red.forEach(el => {
            el.style.color = 'red';
        });

        green.forEach(el => {
            el.style.color = 'green';
        });

        setBlack = false;
    }

    else {
        light.forEach(el => {
            el.style.color = 'white';
        });
        black.forEach(el => {
            el.style.background = 'black';
            el.style.background = '#2C2D37';
        });
        black2.forEach(el => {
            el.style.background = 'grey';
        });


        shad.forEach(el => {
            el.style.background = '#292D36';
        });

        top1.forEach(el => {
            el.style.background = '#2C2D37 ';
        });

        setBlack = true;

    }
}) 

const age = 23
if (age >= 24) {
    console.log('You are too old for this');
}

else{
alert("Are you sure you want to check the calculator")
}