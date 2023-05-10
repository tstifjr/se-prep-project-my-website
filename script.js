const h2 = document.createElement('h2');
h2.textContent = "Hello... my Name is...";

document.querySelector('body').appendChild(h2);

const div2 = document.createElement('div');
div2.textContent = "I was added in by a Script :)"
document.querySelector('body').appendChild(div2);

const input = document.getElementById('button');
input.addEventListener('click', function(){
    alert('Hi');
});