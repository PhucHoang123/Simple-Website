var img = document.createElement("img"); 



     
// Generating random value between 1 to 99
var y;
function playagain()
{
	document.getElementById("submitguess").className = "show";
	document.getElementById("Playagain").className = "hide";
	document.getElementById("x").src = "img/play.jpg";
	document.getElementById("message").innerHTML = "Enter your number here:";
	document.getElementById("textdisp").innerHTML = "Give it your best shot";
	sec = 60;
	guess = 1;
	time = undefined;
	document.getElementById("list").innerHTML = " ";
	document.getElementById("guessbox").value ="";
	y = Math.ceil(Math.random() * 99 + 1);
}      


// Counting the number of guesses made till correct guess


var guess = 1;
function playgame()
{     
// Storing user guessed number     
var x = document.getElementById("guessbox").value;
var li = document.createElement("li");
var node = document.createTextNode(x);
  
if(x == y)
{    
document.getElementById("textdisp").innerHTML = "We got a lucky winner!! <br> Total number of Guesses: " + guess;
document.getElementById("x").src="img/winner.jpg";
document.getElementById("submitguess").className = "hide";
document.getElementById("Playagain").className = "show";
}
   
else if(x > y) /* if guessed number is greater than actual number */
{    
guess++;
document.getElementById("textdisp").innerHTML = "WRONGGG!! Try a lower number";
li.appendChild(node);
document.getElementById("list").appendChild(li);
document.getElementById("x").src="img/low.jpg";
}
   
else if(isNaN(x)) /* if guessed number is not a valid number */
{    
guess++;
document.getElementById("textdisp").innerHTML = "Are you dumb that is not a number";
li.appendChild(node);
document.getElementById("list").appendChild(li);
document.getElementById("x").src="img/error.jpg";
}
                        
else   /* if guessed number is less than actual number */
{
guess++;
document.getElementById("textdisp").innerHTML = "WRONGGG!! Try a GREATER number";
li.appendChild(node);
document.getElementById("list").appendChild(li);
document.getElementById("x").src="img/high.jpg";
}
}
var time = setInterval(myTimer, 1000);
var sec = 60
function myTimer() {
    document.getElementById("timer").innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {

        clearInterval(time);
        alert("Time out!!");
		document.getElementById("textdisp").innerHTML = "TIME OUT, GAME OVER!!!!!!!!!!!";
        document.getElementById("x").src="img/game-over.jpg";
        document.getElementById("submitguess").className = "hide";
        document.getElementById("Playagain").className = "show";
    }
} 
