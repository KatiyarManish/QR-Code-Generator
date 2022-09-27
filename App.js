const textData = document.querySelector(".data");
const Btn = document.querySelector(".submit");
const imge = document.querySelector("#img");
const main = document.querySelector(".main");
Btn.addEventListener("click", generateCode);

function generateCode() {
  imge.classList.add("active");
  main.classList.add("active");
  Btn.innerText = "Please wait....";
  Btn.style.backgroundColor = "blue";
  let inputValue = textData.value;
  imge.src = `http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=200x200`;
  imge.addEventListener("load", () => {
    Btn.innerText = "Generate QR Code";
    Btn.style.backgroundColor = "#1b98f5";
  });
}
