const hambtn = document.getElementById("hamburgerbtn");

hambtn.addEventListener('click', (e) => {
    const iteams = document.querySelector(".hamiteams");
    const exitbtn = document.querySelector(".e");
    iteams.classList.add("show");
    exitbtn.classList.add("exitshow");
});

const exitbtn = document.querySelector(".e");

exitbtn.addEventListener("click", (e) => { 
    const iteams = document.querySelector(".hamiteams");
    iteams.classList.remove("show");
    exitbtn.classList.remove("exitshow")
});



const linked1 = document.querySelector(".linked1");
linked1.addEventListener("click", (e) => {
    const iteams = document.querySelector(".hamiteams");
    iteams.classList.remove("show");
    exitbtn.classList.remove("exitshow")
});

const linked2 = document.querySelector(".linked2");
linked2.addEventListener("click", (e) => {
    const iteams = document.querySelector(".hamiteams");
    iteams.classList.remove("show");
    exitbtn.classList.remove("exitshow")
});

const linked3 = document.querySelector(".linked3");
linked3.addEventListener("click", (e) => {
    const iteams = document.querySelector(".hamiteams");
    iteams.classList.remove("show");
    exitbtn.classList.remove("exitshow")
});

const linked4 = document.querySelector(".linked4");
linked4.addEventListener("click", (e) => {
    const iteams = document.querySelector(".hamiteams");
    iteams.classList.remove("show");
    exitbtn.classList.remove("exitshow")
});