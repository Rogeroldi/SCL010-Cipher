window.cipher = {
  encode: (toEncode, offSet) => {
    let ascii;
    ""; /*guarda el texto cifrado aun en ascii*/
    let code;
    ""; /*convierte el ascii en alfabeto normal*/
    for (let i = 0; i < toEncode.length; i++) {
      ascii = toEncode[i].charCodeAt();
      //MINUSCULAS
      if ((ascii >= 97) && (ascii <= 122)) {

        code += String.fromCharCode((ascii - 97 + offSet) % 26 + 97);

      }
    }
    return code;
  },

  // decode: (toDecode, offSet) => {}

};























//
//   messageascii;
//   let messageDecode;""
//   for (let i = 0; i <= toDecode.length; i++) {//charCodeAt es un metodo que devuelve un valor unicode  del carácter en el índice especificado.
//     let messageascii = toDecode.charCodeAt(i);
//     //cifrando mayúsculas
//     if (messageascii >= 65 && messageascii <= 90) {
//       messageascii = (messageascii - 65 + offSet) % 26 + 65;
//       messageDeCode = String.fromCharCode(messageascii);
//       resultCode += messagedeCode;
//       //cifrando minusculas 32 a 64
//     if (messageascii >= 97 && messageascii <= 122) {
//         messageascii = (messageascii - 97 + offSet) % 26 + 97;
//         messageDeCode = String.fromCharCode(messageascii);
//         resultCode += messageDeCode;
//     //cifrando caracteres especiales 97 a 122
//     if (messageascii >= 32 && messageascii <= 64) {
//       messageascii = (messageascii - 32 + offSet) % 26 + 32;
//       messageDeCode = String.fromCharCode(messageascii);
//       resultCode += messageDeCode;

// };return resultCode;
//     };
//   }
