import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
var boton = document.getElementById("reset-button")
const textarea = document.querySelector('textarea[name="user-input"]')

const wordCount = document.querySelector('li.lista:nth-child(1)')
const characterCount = document.querySelector('li.lista:nth-child(2)')
const characterSpaces = document.querySelector('li.lista:nth-child(3)')
const numberCount = document.querySelector('li.lista:nth-child(4)')
const numberSum = document.querySelector('li.lista:nth-child(5)')
const wordLength = document.querySelector('li.lista:nth-child(6)')



textarea.addEventListener("keyup", function(){
    const wordsOne =analyzer.getWordCount(textarea.value);
    wordCount.innerHTML='Recuento de palabras: ' + wordsOne;

    const wordsTwo =analyzer.getCharacterCount(textarea.value);
    characterCount.innerHTML='Recuento de caracteres: ' + wordsTwo;

    const wordsThree =analyzer.getCharacterCountExcludingSpaces(textarea.value);
    characterSpaces.innerHTML='Recuento de caracteres excluyendo espacios y signos de puntuación: ' + wordsThree;

    const wordsFour = analyzer.getNumberCount(textarea.value);
    numberCount.innerHTML= 'Recuento de números: ' + wordsFour;
})

boton.addEventListener("click", function(){
    textarea.value='';
    wordCount.innerHTML='Recuento de palabras: ';
    characterCount.innerHTML= 'Recuento de caracteres: ';
    characterSpaces.innerHTML= 'Recuento de caracteres excluyendo espacios y signos de puntuación: ';
    numberCount.innerHTML= 'Recuento de números: ';
    numberSum.innerHTML= 'Suma total de números: ';
    wordLength.innerHTML= 'Longitud media de las palabras: ';

})
