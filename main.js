const smiley1 = document.getElementById('un');
const smiley2 = document.getElementById('dos');
const smiley3 = document.getElementById('tres');
const smiley4 = document.getElementById('quatre');
const smiley5 = document.getElementById('cinc');
const canvas = document.getElementById('canvas');

const arrSmiley = [smiley1, smiley2, smiley3, smiley4, smiley5];
arrSmiley.reverse();

// optimització del codi posant un sol addEventListener
arrSmiley.forEach(elem => elem.addEventListener("click", checkingSmiley));

// cada cop que es clica a un element, crida a la funció checkingSmiley. Aquesta funció primer elimina la class 'checked' de tots els elements de la array, després mira quin és l'element seleccionat i busca la coincidència a l'array. Un cop trobada, crea una nova array amb els elements que han de ser colorejats i afegeix la class 'checked' a la nova array.
function checkingSmiley(element){
    arrSmiley.forEach(smiley => smiley.classList.remove('checked'));
    for (let i = 0; i < arrSmiley.length; i++) {
        if (element.currentTarget === arrSmiley[i]) {
            let checkSmiley = arrSmiley.slice(0, i+1);
            checkSmiley.forEach(el => el.classList.toggle('checked'));
        }
    }
}

// cada cop que es clica al div i sempre i quant no siguin els smiley, esborrarà la class 'checked'
canvas.addEventListener("click", (e) => {
    let outsideSmiley = canvas.contains(e.target.querySelector('i')); // això retorna true si clica al canvas. Si es clica al smiley retorna false
    if (outsideSmiley) {
        arrSmiley.forEach(smiley => smiley.classList.remove('checked'));
    }
});