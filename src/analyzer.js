const analyzer = {  
  getWordCount: (text) => {
    const words = text.split(/\s/).filter( word => isNaN(word) && word.trim() !==""); //separa por un espacio, filtra para que no tome los numeros y elimina los espacios al inicio y al final.
    return words.length
    
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length; //retorna la cantidad de caracteres que hay

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const wordsSpace = text.replace(/[^a-zA-Z0-9]/g, ''); //no toma(elimina) los signos especiales y espacios
    return wordsSpace.length;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const regex = /[0-9]/g; // identifica solo los numeros
    const count = text.match(regex); 

    if (count){
      return count.length; //retorna cuantos numeros hay
    }
    else 
    return 0; // y si no hay numeros retorna cero

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const regex = /[0-9]/g; // identifica solo los numeros
    const numberCount = text.match(regex); //retornara los numeros de regex

    let summ = 0; // la suma partira en 0

    if (numberCount){
      for (let i = 0; i < numberCount.length; i ++){ //el contador partira en 0 para luego los numeros seran mayor a cero incrementando en 1
        summ = summ + parseFloat(numberCount[i]); // la suma sera igual a la suma + (de numero entero) el contador de numeros
      }
      return summ; //retornara la suma(actualizada)
    }
    else
    return 0; //si no sera cero
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {  
   const lengthWords = text.split(/\s/); //que lo separe por espacio
   
   let summLength = 0; //la suma de longitud parte es cero (inicialmente)
   
   if(lengthWords){ 
   for (let i = 0; i < lengthWords.length; i ++){ // si la longitud de palabras parte el contador en cero, la condicion es que el contador sea menor que la longitud de palabras y se modificara incrementando en 1
    summLength = summLength + lengthWords[i].length; // la suma de longitud(actualizada) sera igual a la suma de longitud mas el contador de la suma de palabras
  }
  const lengthAverage = summLength/lengthWords.length; // el promedio de longitud es igual a la suma de longitud(actualizada) dividido por la longitud de palabras. Es decir un promedio cualquiera (la suma de los valores dividido por la cantidad de aquellos valores)
  return parseFloat(lengthAverage.toFixed(3)); // retornara el promedio de longitud (en un numero decimal) y lo aproximara a un numero con 3 decimales solamente
   }

   else lengthWords.length === 0  //si la longitud es cero retornara cero
      return 0
    
  
  },
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
};

export default analyzer;
