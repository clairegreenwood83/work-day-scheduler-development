

// // function to run when page loads

 function loadFunction() {
   
         $("#textArea1").val(localStorage.getItem("9AM"));
         $("#textArea2").val(localStorage.getItem("10AM"));
         $("#textArea3").val(localStorage.getItem("11AM"));
         $("#textArea4").val(localStorage.getItem("12AM"));
         $("#textArea5").val(localStorage.getItem("1PM"));
         $("#textArea6").val(localStorage.getItem("2PM"));
         $("#textArea7").val(localStorage.getItem("3PM"));
         $("#textArea8").val(localStorage.getItem("4PM"));
         $("#textArea9").val(localStorage.getItem("5PM"));

 }

 window.onload = loadFunction();

// Display the current day at the top of the calender when a user opens the planner.

var currentDay = $("#currentDay");//document.getElementById("currentDay");

var today = moment();
console.log(today);

$("#currentDay").text(today.format("dddd, MMMM Do"));

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

/*// pseudocode
// if time-block row is less than the current time, colour will equal grey
// if time-block row is more than current time, colour will equal green
// if time-block row is equal to the current time, colour will equal red */

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = $(this).attr("id");

        console.log(hour, currHour)
         //console.log(this); //each time-block

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour == hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })

};

timeBlockColor();

// Save the event in local storage when the save button is clicked in that timeblock.

// .textArea content is what we want saved to local storage 
function save(text) {

   var text = ($(this).siblings('textarea').val()); //targeting the save button, this is equal to the save button
   var time = ($(this).siblings('div').text());

   //console.log(this);

   localStorage.setItem(time, (text));

   alert("Event saved!");
  
   }


// add event listener so event saved when save button clicked.

$(".saveBtn").on("click", save); 
 