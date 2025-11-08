const minVal = document.getElementById("min");
const maxVal = document.getElementById("max");
const guessVal = document.getElementById("guess");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let count = 0;
let answer;

submit.onclick = function () {
  const min = Number(minVal.value);
  const max = Number(maxVal.value);
  const guess = Number(guessVal.value);

  if (count === 0) {
    if (min >= max) {
      result.textContent = "Please enter a valid range (min < max)";
      return;
    }
    answer = Math.floor(Math.random() * (max - min)) + min;
    minVal.readOnly = true;
    maxVal.readOnly = true;
    console.log("Answer is:", answer);
  }
    count++;

  if (guess < min || guess > max) {
    result.textContent = `Enter a guess within ${min} and ${max}.`;
  } else if (guess < answer) {
    result.textContent = `Too low! Try again. Attempts: ${count}`;
  } else if (guess > answer) {
    result.textContent = `Too high! Try again. Attempts: ${count}`;
  } else {
    result.textContent = `You guessed number (${answer}) in ${count} attempts. Restarting in 3sec...`;
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}