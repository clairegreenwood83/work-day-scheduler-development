

// // function to run when page loads

// // function loadFunction() {
//     var text = ($(this).siblings('textarea').val()); //targeting button 
//     var time = ($(this).siblings('div').text());

//     const input = {
//         text: text,
//         time: time,
//     }
//     data.push(input)
//     var data = JSON.parse(localStorage.getItem('input')) || {};
//    // console.log(text);
//  }
// //
//  window.onload = loadFunction();

// Display the current day at the top of the calender when a user opens the planner.

var currentDay = $("#currentDay");//document.getElementById("currentDay");

var today = moment();
console.log(today);

$("#currentDay").text(today.format("dddd, MMMM Do"));

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

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

/*// pseudocode
// if time-block row is less than the current time, colour will equal grey
// if time-block row is more than current time, colour will equal green
// if time-block row is equal to the current time, colour will equal red */


// Save the event in local storage when the save button is clicked in that timeblock.

// .textArea content is what we want saved to local storage 
function save() {

   var text = ($(this).siblings('textarea').val()); //targeting button 
   var time = ($(this).siblings('div').text());

   localStorage.setItem(time, JSON.stringify(text));
  
   }


// add event listener so event saved when save button clicked.

$(".saveBtn").on("click", save); 
 