window.cipher = {
  encode: (toEncode, offSet) => {
    let messageAscii; /*guarda el texto cifrado aun en Ascii*/
    let messageCode; /*convierte el Ascii en alfabeto normal*/
    let resultCode = "";

    for (let i = 0; i <= toEncode.length; i++) {
      let toAscii = toEncode.charCodeAt(i);
      //cifrando mayúsculas
      if (toAscii >= 65 && toAscii <= 90) {
        messageAscii = (toAscii - 65 + offSet) % 26 + 65;
        messageCode = String.fromCharCode(messageAscii);
        resultCode += messageCode;
      }
    } return resultCode
  },

  //decode: (toDecode, offSet) => {
  };
