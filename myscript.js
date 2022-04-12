alert("Welcome to Samans weather interpreter")

var hot = false
var temp = prompt("Please enter todays temperature in Fahrenheit")

if (temp>80) {
  console.log("Hot Outside!");
  alert("Its hot outside! Stay hydrated and walk in shade when possible.");
}else if (temp <= 80 && temp >= 50) {
  console.log("Average temp outside");
  alert("Average temp outside. If youre brave you can pull off wearing shorts!");
}else if (temp < 50 && temp >= 32) {
  console.log("Its pretty cold out!");
  alert("Its pretty cold out! You may want to wear a sweater today!");
}else {
  console.log("It is very cold out");
  alert("It is very cold out! Be sure to wear a jacket and long socks!");
}
