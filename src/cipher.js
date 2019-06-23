window.cipher = {
  encode: (offSet,message) => {
    let textCipher="";//cada caracer del message
    let textASCII="";// se ejecutara en el for dando un numero ascii
    let codeAscii="";//letra que devuelve el texASCII
    let keyNumber= parseInt(offSet);// let que contiene el numero desplazamiento

    for (let i = 0; i < message.length; i++) {
      textASCII= message.charCodeAt(i);
      //MAYUSCULAS, si es true true
      if (textASCII>=65 && textASCII<= 90) {
      //se calcula el  residuo para acotar los ciclos
        codeAscii=(textASCII-65+keyNumber)%26+65;
      //se devuelve una cadena de texto a partir de la secuencia anterior
        textCipher+= String.fromCharCode(codeAscii);
      }
      //rango en minuscula 97 a 122
      else if(textASCII>=97 && textASCII <=122) {
        codeAscii=(textASCII-97+keyNumber)%26+97;
        textCipher+=String.fromCharCode(codeAscii);
      }
    }
    return textCipher;
  },
  decode: (offSet,message) => {
  let textCipher="";
  let textASCII="";
  let codeAscii="";
  let keyNumber=parseInt(offSet);


     }
   }

//};























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
