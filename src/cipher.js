window.cipher = {
  encode: (toEncode, offSet) => {
    let messageAscii; /*guarda el texto cifrado aun en Ascii*/
    let messageCode; /*convierte el Ascii en alfabeto normal*/
    let resultCode = "";

    for (let i = 0; i <= toEncode.length; i++) {
      let toAscii = toEncode.charCodeAt(i);

      if (toAscii >= 32 && toAscii <= 125) {
        messageAscii = (toAscii - 32 + offSet) % 94 + 32;
        messageCode = String.fromCharCode(messageAscii);
        resultCode += messageCode;
      }
    } return resultCode
  },

  decode: (toDecode, offSet) => {
  }
};
