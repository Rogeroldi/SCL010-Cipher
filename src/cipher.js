window.cipher = {
  encode: (toEncode, offSet) => {
    let messageAscii; /*guarda el texto cifrado aun en Ascii*/
    let messageCode; /*convierte el Ascii en alfabeto normal*/
    let resultCode = "";

    for (let i = 0; i <= toEncode.length; i++) {//charCodeAt es un metodo que devuelve un valor unicode  del carácter en el índice especificado.
      let toAscii = toEncode.charCodeAt(i);
      //cifrando mayúsculas
      if (toAscii >= 65 && toAscii <= 90) {
        messageAscii = (toAscii - 65 + offSet) % 26 + 65;
        messageCode = String.fromCharCode(messageAscii);
        resultCode += messageCode;
        //cifrando minusculas 32 a 64
      if (toAscii >= 97 && toAscii <= 122) {
          messageAscii = (toAscii - 97 + offSet) % 26 + 97;
          messageCode = String.fromCharCode(messageAscii);
          resultCode += messageCode;
      //cifrando caracteres especiales 97 a 122
      if (toAscii >= 32 && toAscii <= 64) {
        messageAscii = (toAscii - 32 + offSet) % 26 + 32;
        messageCode = String.fromCharCode(messageAscii);
        resultCode += messageCode;
      }
    } return resultCode
  }


  //decode: (toDecode, offSet) => {
  };
