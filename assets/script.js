var currentDay = document.getElementById("currentDay");

var today = moment();
console.log(today);

$("#currentDay").text(today.format("dddd, MMMM Do"));