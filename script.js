let string = "";
const buttons = document.querySelectorAll('.btn');
const inputDisplay = document.getElementById('inputDisplay');

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      inputDisplay.value = string;
    }
    else if (e.target.innerHTML === "C") {
      string = "";
      inputDisplay.value = string;
    }
    else {
      string += e.target.innerHTML;
      inputDisplay.value = string;
    }
  });
});

const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener("click", function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeBtn.textContent = "Light Mode";
    darkModeBtn.style.color = "#1a1a19";
    darkModeBtn.style.backgroundColor = "white";
  } else {
    darkModeBtn.textContent = "Dark Mode";
    darkModeBtn.style.color = "white";
    darkModeBtn.style.backgroundColor ="#1a1a19";
  }
});
