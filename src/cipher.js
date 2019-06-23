window.cipher = {
  encode: (offSet, message) => {
    /* declara variables */
    let textCipher = "";
    let textASCII = "";
    let codeAscii = "";
    let keyNumber = parseInt(offSet);

    for (let i = 0; i < message.length; i++) {
      // charCodeAt() es un metodo que devuelve un valor Unicode
      // del caracter en el indice proporcionado
      textASCII = message.charCodeAt(i);

      // en el rango de las mayusculas
      if (textASCII >= 65 && textASCII <= 90) {
        codeAscii = (textASCII - 65 + keyNumber) % 26 + 65;
        textCipher += String.fromCharCode(codeAscii);
      }

      // rango en minuscula 97 a 122
      else if (textASCII >= 97 && textASCII <= 122) {
        codeAscii = (textASCII - 97 + keyNumber) % 26 + 97;
        textCipher += String.fromCharCode(codeAscii);
      }

      // pasa por el rango de  numeros y caracteres especiales entre 32 y 64
      else if (textASCII >= 32 && textASCII <= 64) {
        // aplicando formula michille en rango de caracter especiales
        codeAscii = (textASCII - 32 + keyNumber) % 33 + 32;
        // fromCharCode()crea cadena con valores unicode
        textCipher += String.fromCharCode(codeAscii);
      }


    }
    return textCipher;

  },
  decode: (offSet, message) => {
    let textCipher = "";
    let textASCII = "";
    let codeAscii = "";
    let keyNumber = parseInt(offSet);

    for (let i = 0; i < message.length; i++) {
      textASCII = message.charCodeAt(i);

      // en el rango de las mayusculas de 65 a 90
      if (textASCII >= 65 && textASCII <= 90) {
        // para descifrar el tope esta en 90
        codeAscii = (textASCII - 90 - keyNumber) % 26 + 90;
        textCipher += String.fromCharCode(codeAscii);
      }
      // rango de minusculas 97 a 122
      else if (textASCII >= 97 && textASCII < 122) {
        codeAscii = (textASCII - 122 - keyNumber) % 26 + 122;
        textCipher += String.fromCharCode(codeAscii);
      }
      // números y caracteres especiales
      else if (textASCII >= 32 && textASCII <= 64) {
        codeAscii = (textASCII - 64 - keyNumber) % 33 + 64;
        textCipher += String.fromCharCode(codeAscii);
      }


    }
    return textCipher;

  }
};
