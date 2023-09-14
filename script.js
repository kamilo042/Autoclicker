document.addEventListener('DOMContentLoaded', function () {
    // Initialize variables
    let points = 0;
    let clickPower = 1;
    let autoPower = 1;

    // DOM elements
    const pointsDisplay = document.getElementById('points');
    const clickButton = document.getElementById('clickButton');

    // Function to update the points display
    function updatePointsDisplay() {
        pointsDisplay.textContent = points;
    }

    // Function to handle the click event
    function handleButtonClick() {
        points += clickPower;
        updatePointsDisplay();
    }

    // Function to increase points automatically
    function autoIncrementPoints() {
        points += autoPower;
        updatePointsDisplay();
    }

    // Click event listener
    clickButton.addEventListener('click', handleButtonClick);

    // Set up automatic point increment every second
    setInterval(autoIncrementPoints, 500);
});