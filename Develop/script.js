$(document).ready(
  $(function () {
    var timeBlockEl = $(".time-block");
    var today = dayjs();
    var currentHour = today.format("H");
    //console.log('in 12 hour',today.format('h'))
    console.log(currentHour);
    //currentHour = "hour-" + currentHour;
    $("#currentDay").text(today.format("dddd, MMMM D YYYY"));
    var bussnesTime = [
      
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
     
    ];
    $.each(timeBlockEl, function (i, v) {
      let hourIndex = $.inArray(currentHour, bussnesTime);
      console.log(i, hourIndex);
      if (hourIndex < 0) {
        $(this).addClass("notbusnesHour");
      }
      if (i === hourIndex) {
        $(this).addClass("present");
      }
      if (i > hourIndex) {
        $(this).addClass("future");
      }
      if (i < hourIndex) {
        $(this).addClass("past");
      }
    });
    timeBlockEl.on("click", ".saveBtn", function (event) {
      //console.log($(this).attr('aria-label'))
      var eventDes = $(this).parent().children(".description").val();
      var eventTime = $(this).parent().children(".hour").html();

      events = JSON.parse(localStorage.getItem("events") || "[]");

      events.push({
        eventDes: eventDes,
        eventTime: eventTime,
      });
      localStorage.setItem("events", JSON.stringify(events));
      console.log(events);
      //console.log($(this).parent().attr('id'))

      //console.log(events)
      //console.log(eventDes)
      //console.log(eventTime)
    });
  })
);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
