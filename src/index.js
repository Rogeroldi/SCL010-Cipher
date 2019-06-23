
const toCodebtn= document.getElementById("codeBtn");
toCodebtn.addEventListener("click", () => {
  let toEncode = document.getElementById("textForCode").value;
  let offSet = parseInt(document.getElementById("offset").value);
  document.getElementById("textForCode").innerHTML = window.cipher.encode(toEncode, offSet);
});

// document.getElementById("decodeBtn").addEventListener("click", () => {
//   const toDecode = document.getElementById("textForCode").value;
//   const offSet = parseInt(document.getElementById("offset").value);
//   let result = cipher.encode(toDecode, offSet);
//   document.getElementById("textForCode").innerHTML = result;
// });
