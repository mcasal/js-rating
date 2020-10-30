const smiley1 = document.getElementById('un');
const smiley2 = document.getElementById('dos');
const smiley3 = document.getElementById('tres');
const smiley4 = document.getElementById('quatre');
const smiley5 = document.getElementById('cinc');
// const canvas = document.getElementById('canvas');
// const children = document.getElementById('canvas').children[0];

// recorda que està row-reverse
console.log(smiley3.nextElementSibling);

smiley1.addEventListener("click", function(){
    smiley1.classList.toggle('checked');
});

smiley2.addEventListener("click", function(){
    smiley2.classList.toggle('checked');
});

smiley3.addEventListener("click", function(){
    smiley3.classList.toggle('checked');
});

smiley4.addEventListener("click", function(){
    smiley4.classList.toggle('checked');
});

smiley5.addEventListener("click", function(){
    smiley5.classList.toggle('checked');
});