// Display the current day at the top of the calender when a user opens the planner.

var currentDay = $("#currentDay");//document.getElementById("currentDay");

var today = moment();
console.log(today);

$("#currentDay").text(today.format("dddd, MMMM Do"));

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

/*function timeblockColour() {

var currentTime = moment().format('H');
//var timeBlockElements = $(".textarea");

console.log(currentTime);

//if (currentTime)
// isAfter();?
/*let ID = $(".time-block").attr('id')

if (ID > currentTime) {
    $(".time-block").addClass("future");
} else if (ID === currentTime) {
    $(".time-block").addClass("present");
} else {
    $(".time-block").addClass("past");
}
}*/

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


// .textArea content is what we want saved
function save() {
    var text = {time: ($(this).siblings('div').text()), text: ($(this).siblings('textarea').val())}
    console.log(text);
   // var text = ($(this).siblings('textarea').val()); //targeting button 
  // var time = ($(this).siblings('div').text());

    //console.log(text);
   // console.log(time);

   localStorage.setItem("input", JSON.stringify(text));

   var text = JSON.parse(localStorage.getItem("input")) || {};
   console.log(text);

    
}



// add event listener so event saved when save button clicked.

$(".saveBtn").on("click", save); 
 