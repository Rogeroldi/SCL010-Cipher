const codeButton=document.getElementById("codeButton");
codeButton.addEventListener("click", ()=>{
	let offSet=document.getElementById("offset").value;
  let message=document.getElementById("message").value;
  let result=cipher.encode(offSet,message);
  document.getElementById(message).value=result;
})
