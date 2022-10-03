let array = [];

var number = getRandomNumber(20);

check.addEventListener("click", function () {
  if (document.getElementById("user").innerHTML == "") {
    alert("Login!");
    return;
  }
  array.push(document.getElementById("input-number").value);
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string = string + " " + array[i];
  }
  console.log(string);

  if (document.getElementById("score").innerHTML == 0) {
    alert("You lost");
    return (document.getElementById("score").innerHTML = 10);
  }
  if (document.getElementById("input-number").value == number) {
    document.getElementById("text").innerHTML = "You Won!";
    document.getElementById("highscore").innerHTML++;
    document.getElementById("text").style.color = "green";
    document.getElementById("score").innerHTML = 10;
    number = getRandomNumber(20);
  } else if (document.getElementById("input-number").value < number) {
    document.getElementById("text").innerHTML = "Too low";
    document.getElementById("score").innerHTML--;
    document.getElementById("text").style.color = "white";
  } else {
    document.getElementById("text").innerHTML = "Too high";
    document.getElementById("score").innerHTML--;
    document.getElementById("text").style.color = "white";
  }
});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
loginBtn.addEventListener("click", function () {
  document.getElementById("user").innerHTML =
    "Hello " + document.getElementById("login").value;
  document.getElementById("login").value = "";
  document.getElementById("login").style.display = "none";
  document.getElementById("loginBtn").style.display = "none";

  document.getElementById("user").style.display = "inline-block";
  document.getElementById("logoutBtn").style.display = "inline-block";
});
logoutBtn.addEventListener("click", function () {
  document.getElementById("user").innerHTML = "";
  document.getElementById("login").style.display = "inline-block";
  document.getElementById("loginBtn").style.display = "inline-block";

  document.getElementById("user").style.display = "none";
  document.getElementById("logoutBtn").style.display = "none";
});
