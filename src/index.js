document.getElementById("codeBtn").addEventListener("click", () => {
  const toEncode = document.getElementById("textForCode").value;
  const offSet = parseInt(document.getElementById("offset").value);
  let result = cipher.encode(toEncode, offSet);
  document.getElementById("textForCode").innerHTML = result;
});

document.getElementById("decodeBtn").addEventListener("click", () => {
  const toDecode = document.getElementById("textForCode").value;
  const offSet = parseInt(document.getElementById("offset").value);
  let result = cipher.encode(toDecode, offSet);
  document.getElementById("textForCode").innerHTML = result;
});
