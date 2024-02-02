document.addEventListener("mousemove", (e) => {
  const cursorCircle = document.querySelector(".cursor-circle");
  cursorCircle.style.left = e.pageX - cursorCircle.clientWidth / 2 + "px";
  cursorCircle.style.top = e.pageY - cursorCircle.clientHeight / 2 + "px";
});

document.addEventListener("");

document.addEventListener("DOMContentLoaded", function () {
  // Variables to store game state
  let totalScore = 0;
  let selectedNumber = null;

  // Function to update the total score on the page
  function updateTotalScore() {
    document.querySelector(".total-score h1").textContent = totalScore;
  }

  // Function to handle number selection
  function selectNumber(number) {
    selectedNumber = number;
    document.querySelectorAll(".number-select").forEach((element) => {
      element.classList.remove("selected");
    });
    document
      .querySelector(`.number-select:nth-child(${number})`)
      .classList.add("selected");
  }

  // Function to simulate rolling the dice
  function rollDice() {
    const rolledNumber = Math.floor(Math.random() * 6) + 1;

    // Update the dice image
    const diceImage = document.querySelector(".dice img");
    diceImage.src = `./Images/dice_${rolledNumber}.png`;

    // Check if the selected number matches the rolled number
    if (selectedNumber === rolledNumber) {
      totalScore += 2;
    } else {
      totalScore -= 1;
    }

    // Update the total score on the page
    updateTotalScore();
  }

  // Event listeners for number selection
  document.querySelectorAll(".number-select").forEach((element, index) => {
    element.addEventListener("click", () => {
      selectNumber(index + 1);
    });
  });

  // Event listener for rolling the dice
  document.querySelector(".dice img").addEventListener("click", rollDice);

  // Event listener for reset score button
  document.querySelector("button").addEventListener("click", () => {
    totalScore = 0;
    selectedNumber = null;
    updateTotalScore();
  });

  // Event listener for showing rules button (assuming you have rules to display)
  document.querySelector(".diff-btn").addEventListener("click", () => {
    // Add logic to show rules (if you have them)
  });
});
