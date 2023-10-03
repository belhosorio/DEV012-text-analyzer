import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
var boton = document.getElementById("reset-button") //boton 
const textarea = document.querySelector('textarea[name="user-input"]') // caja de texto
// lista
const wordCount = document.querySelector('li.lista:nth-child(1)')
const characterCount = document.querySelector('li.lista:nth-child(2)')
const characterSpaces = document.querySelector('li.lista:nth-child(3)')
const numberCount = document.querySelector('li.lista:nth-child(4)')
const numberSum = document.querySelector('li.lista:nth-child(5)')
const wordLength = document.querySelector('li.lista:nth-child(6)')

// el evento para traer la operaciones de los contadores del analyzer js 

textarea.addEventListener("keyup", function(){
    const wordsOne =analyzer.getWordCount(textarea.value);
    wordCount.innerHTML='Recuento de palabras: ' + wordsOne;

    const wordsTwo =analyzer.getCharacterCount(textarea.value);
    characterCount.innerHTML='Recuento de caracteres: ' + wordsTwo;

    const wordsThree =analyzer.getCharacterCountExcludingSpaces(textarea.value);
    characterSpaces.innerHTML='Recuento de caracteres excluyendo espacios y signos de puntuación: ' + wordsThree;

    const wordsFour = analyzer.getNumberCount(textarea.value);
    numberCount.innerHTML= 'Recuento de números: ' + wordsFour;

    const wordsFive = analyzer.getNumberSum(textarea.value);
    numberSum.innerHTML= 'Suma total de números: ' + wordsFive;

    const wordsSix = analyzer.getAverageWordLength(textarea.value);
    wordLength.innerHTML= 'Longitud media de las palabras: ' + wordsSix;
})
// evento al clickear el boton, los contadores quedaran en cero
boton.addEventListener("click", function(){
    textarea.value='';
    wordCount.innerHTML='Recuento de palabras: 0';
    characterCount.innerHTML= 'Recuento de caracteres: 0';
    characterSpaces.innerHTML= 'Recuento de caracteres excluyendo espacios y signos de puntuación: 0';
    numberCount.innerHTML= 'Recuento de números: 0';
    numberSum.innerHTML= 'Suma total de números: 0';
    wordLength.innerHTML= 'Longitud media de las palabras: 0';

})
