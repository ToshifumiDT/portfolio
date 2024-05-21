document.getElementById('Button1').addEventListener('click', function() {
    document.querySelector('.AboutMe').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Button2').addEventListener('click', function() {
    document.querySelector('.ProjectContainer').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Button3').addEventListener('click', function() {
    document.querySelector('.ContactForm').scrollIntoView({ behavior: 'smooth' });
});