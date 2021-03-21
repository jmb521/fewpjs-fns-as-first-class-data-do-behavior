/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let hour = parseInt(time.split(":")[0])
  console.log(hour)
  if(hour < 12) {
    return "Good Morning"
  }else if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  } else if (hour > 17) {
    return "Good Evening"
  }
}

function displayMessage(greeting) {
  let showGreeting = document.getElementById("greeting")
  showGreeting.innerText = greeting
}