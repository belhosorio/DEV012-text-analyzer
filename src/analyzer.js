const analyzer = {
  getWordCount: (text) => {
    const words = text
      .split(/\s/)
      .filter((word) => isNaN(word) && word.trim() !== "");
    return words.length;
  },
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`: separa por un espacio, filtra para que no tome los numeros y elimina los espacios al inicio y al final.
  getCharacterCount: (text) => {
    return text.length;
  },
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`: retorna la cantidad de caracteres que hay
  getCharacterCountExcludingSpaces: (text) => {
    const wordsSpace = text.replace(/[^a-zA-Z0-9]/g, "");
    return wordsSpace.length;
  },
  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`: no toma(elimina) los signos especiales y espacios
  getNumberCount: (text) => {
    const regex = /[0-9]/g;
    const count = text.match(regex);
    if (count) {
      return count.length;
    } else return 0;
  },
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`: identifica solo los numeros. retorna cuantos numeros hay. y si no hay numeros retorna cero
  getNumberSum: (text) => {
    const regex = /[0-9]/g;
    const numberCount = text.match(regex);
    let summ = 0;
    if (numberCount) {
      for (let i = 0; i < numberCount.length; i++) {
        summ = summ + parseFloat(numberCount[i]);
      }
      return summ;
    } else return 0;
  },
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`: identifica solo los numeros. retornara los numeros de regex. la suma partira en 0. el contador partira en 0 para luego los numeros seran mayor a cero incrementando en 1.la suma sera igual a la suma + (de numero entero) el contador de numeros. retornara la suma(actualizada). si no sera cero
  getAverageWordLength: (text) => {
    const lengthWords = text.split(/\s/);
    let summLength = 0;
    if (lengthWords) {
      for (let i = 0; i < lengthWords.length; i++) {
        summLength = summLength + lengthWords[i].length;
      }
      const lengthAverage = summLength / lengthWords.length;
      return parseFloat(lengthAverage.toFixed(3));
    } else lengthWords.length === 0;
    return 0;
  },
};
//TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`: que lo separe por espacio. la suma de longitud parte es cero (inicialmente). si la longitud de palabras parte el contador en cero, la condicion es que el contador sea menor que la longitud de palabras y se modificara incrementando en 1. la suma de longitud(actualizada) sera igual a la suma de longitud mas el contador de la suma de palabras. el promedio de longitud es igual a la suma de longitud(actualizada) dividido por la longitud de palabras. Es decir un promedio cualquiera (la suma de los valores dividido por la cantidad de aquellos valores). retornara el promedio de longitud (en un numero decimal) y lo aproximara a un numero con 3 decimales solamente. si la longitud es cero retornara cero.
export default analyzer;
