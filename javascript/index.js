
let result = document.getElementById("result");

function getResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  }  catch (error) {
    result.value = "Error";
  }
}

// // THIS IS FOR KEYBOARD INPUT

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    getResult(key);
  } else if (key === ".") {
    getResult(".");
  } else if (key === "+") {
    getResult("+");
  } else if (key === "-") {
    getResult("-");
  } else if (key === "*") {
    getResult("*");
  } else if (key === "/") {
    getResult("/");
  } else if (key === "%") {
    getResult("%");
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key === "Escape") {
    clearResult();
  }
});