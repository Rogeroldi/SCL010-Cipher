document.getElementById("codeBtn").addEventListener("click", () => {
  const toEncode = document.getElementById("textForCode").value;
  const offSet = Math.abs(parseInt(document.getElementById("codeOffset").value));
  let result = cipher.encode(toEncode, offSet);
  document.getElementById("textEncode").innerHTML = result;
});
