let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
}

mask.onclick = () => {
    nav.classList.toggle("open");
} 


document.getElementById('Button4').addEventListener('click', function() {
    document.querySelector('.AboutMe').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Button5').addEventListener('click', function() {
    document.querySelector('.ProjectContainer').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Button6').addEventListener('click', function() {
    document.querySelector('.ContactForm').scrollIntoView({ behavior: 'smooth' });
});