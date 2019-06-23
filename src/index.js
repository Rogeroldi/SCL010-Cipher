const codeButton = document.getElementById("codeButton");
codeButton.addEventListener("click", () => {
  let offSet = document.getElementById("offset").value;
  let message = document.getElementById("message").value;
  let result = cipher.encode(offSet, message);
  document.getElementById("resulHTML").value =;
})

const decodeButton = document.getElementById("decodeButton");
decodeButton.addEventListener("click", () => {
  let offSet = document.getElementById("offset").value;
  let message = document.getElementById("message").value;
  let result = cipher.decode(offSet, message);
  document.getElementById("message").value = result;
})
