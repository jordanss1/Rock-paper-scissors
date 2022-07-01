//Build a rock, paper, scissors game. The user plays against the computer, so give them three buttons (rock, paper, scissors) to click
//Every time the user plays/clicks a button, display the winner. A user can play as many times as they want 

/*
1. Initialise an array "rockPaperScissors" with all three values and pulled all buttons to be used within the game logic. Also added all <p> tags 
that have to be used within the script.

2. Initialised "randomChoice" to function expression which returns a random element from the array of values. It takes a rounded, random number 
and multiplies it by the length of the array, stores it in variable "index" and in the next line returns that random index of the passed array and
is referenced in "sign". 

3. Since querySelectorAll stores the elements in an array, forEach method is used to apply the code in the curly brackets to each button. 
I added an event listener for every button "onclick". So every time the buttons are clicked the code is executed. The first function in the
event handler "timeForVisible" is to be used in the "setTimeout" method to turn the <p> elements invisible as well as enable the buttons
again, as they are disabled on every click.

4. Within the event handler (on every click) the function "randomChoice" is called to find the random index of the passed array and whatever button 
is clicked is also passed the the function and the logic within is executed. It finds which button is clicked and which random index that was returned
and runs the code block under that condition. This shows the user on the webpage whether they win with a special message and some styling.

*/

const rockPaperScissors = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll("button");

const rockText1 = document.getElementsByClassName("rock-p1")[0];

const rockText2 = document.getElementsByClassName("rock-p2")[0];

const paperText1 = document.getElementsByClassName("paper-p1")[0]

const paperText2 = document.getElementsByClassName("paper-p2")[0];

const scissorsText1 = document.getElementsByClassName("scissors-p1")[0]

const scissorsText2 = document.getElementsByClassName("scissors-p2")[0];

const mobileText1 = document.getElementsByClassName("all-p1")[0];

const mobileText2 = document.getElementsByClassName("all-p2")[0];



const randomChoice = (arr, button) => {
	const index = Math.floor(Math.random() * arr.length);
	let sign = arr[index];

	if(button.className === "rock" && sign === "Rock" ) {
		rockText2.setAttribute("style", "text-shadow: none; visibility: visible;")
		rockText2.innerText = "draw";
		rockText1.style.visibility = "visible";
		rockText1.innerText = "rock";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "rock";
		mobileText2.setAttribute("style", "text-shadow: none; visibility: visible;")
		mobileText2.innerText = "draw";
	} else if (button.className === "rock" && sign === "Paper") {
		rockText2.setAttribute("style", "text-shadow: 2px 2px 5px red; visibility: visible;")
		rockText2.innerText = "game over";
		rockText1.style.visibility = "visible";
		rockText1.innerText = "paper";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "paper";
		mobileText2.setAttribute("style", "text-shadow: 2px 2px 5px red; visibility: visible;")
		mobileText2.innerText = "game over";
	} else if (button.className === "rock" && sign === "Scissors") {
		rockText2.setAttribute("style", "text-shadow: 5px 5px 5px green; visibility: visible;")
		rockText2.innerText = "you win";
		rockText1.style.visibility = "visible";
		rockText1.innerText = "scissors";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "scissors";
		mobileText2.setAttribute("style", "text-shadow: 5px 5px 5px green; visibility: visible;")
		mobileText2.innerText = "you win";
	};

	if (button.className === "paper" && sign === "Rock") {
		paperText2.setAttribute("style", "text-shadow: 5px 5px 5px green; visibility: visible;")
		paperText2.innerText = "you win";
		paperText1.style.visibility = "visible";
		paperText1.innerText = "rock";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "rock";
		mobileText2.setAttribute("style", "text-shadow: 5px 5px 5px green; visibility: visible;")
		mobileText2.innerText = "you win";
	} else if (button.className === "paper" && sign === "Paper") {
		paperText2.setAttribute("style", "text-shadow: none; visibility: visible;")
		paperText2.innerText = "draw";
		paperText1.style.visibility = "visible";
		paperText1.innerText = "paper";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "paper";
		mobileText2.setAttribute("style", "text-shadow: none; visibility: visible;")
		mobileText2.innerText = "draw";
	} else if (button.className === "paper" && sign === "Scissors") {
		paperText2.setAttribute("style", "text-shadow: 2px 2px 5px red; visibility: visible;")
		paperText2.innerText = "game over";
		paperText1.style.visibility = "visible";
		paperText1.innerText = "scissors";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "scissors";
		mobileText2.setAttribute("style", "text-shadow: 2px 2px 5px red; visibility: visible;")
		mobileText2.innerText = "game over";
	};

	if (button.className === "scissors" && sign === "Rock") {
		scissorsText2.setAttribute("style", "text-shadow: 2px 2px 5px red; visibility: visible;")
		scissorsText2.innerText = "game over";
		scissorsText1.style.visibility = "visible";
		scissorsText1.innerText = "rock";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "rock";
		mobileText2.setAttribute("style", "text-shadow: 2px 2px 5px red; visibility: visible;")
		mobileText2.innerText = "game over";
	} else if (button.className === "scissors" && sign === "Paper") {
		scissorsText2.setAttribute("style", "text-shadow: 5px 5px 5px green; visibility: visible;")
		scissorsText2.innerText = "you win";
		scissorsText1.style.visibility = "visible";
		scissorsText1.innerText = "paper";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "paper";
		mobileText2.setAttribute("style", "text-shadow: 5px 5px 5px green; visibility: visible;")
		mobileText2.innerText = "you win";
	} else if (button.className === "scissors" && sign === "Scissors") {
		scissorsText2.setAttribute("style", "text-shadow: none; visibility: visible;")
		scissorsText2.innerText = "draw";
		scissorsText1.style.visibility = "visible";
		scissorsText1.innerText = "scissors";
		mobileText1.style.visibility = "visible";
		mobileText1.innerText = "scissors";
		mobileText2.setAttribute("style", "text-shadow: none; visibility: visible;")
		mobileText2.innerText = "draw";
	};

}; 



buttons.forEach(button => {
	button.addEventListener("click", e => {
		
		const arrayOfText = [rockText1, rockText2, paperText1, paperText2, scissorsText1, 
		scissorsText2, mobileText1, mobileText2];

		const timeForVisible = () => {
			arrayOfText.forEach(text => {
				text.style.visibility = "hidden";
			})

			buttons.forEach(button => {
				button.disabled = false;
			})
		};

		buttons.forEach(button => {
		button.disabled = true;
		});

    	randomChoice(rockPaperScissors, button);
    	setTimeout(timeForVisible, 2000);

	})
});



