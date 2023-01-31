$(document).ready(
  $(function () {
   
    var timeBlockEl = $(".time-block");
    var today = dayjs();
    var currDay=$('#succes')
    
    $("#currentDay").text(today.format("dddd, MMMM D YYYY"));

    $.each(timeBlockEl, function (i, v) {
      var sethour = today.set("hour", $(this).attr("id"));

      if (sethour.isAfter(dayjs(today))) {
        $(this).addClass("future");
       
      }
      if (sethour.isBefore(dayjs(today))) {
        $(this).addClass("past");
      }
      if (sethour.isSame(dayjs(today))) {
        $(this).addClass("present");
      }
    });
    timeBlockEl.on("click", ".saveBtn", function () {

      var eventDes =
        $(this).parent().children(".description").val().trim() || " ";
      var eventTime = $(this).parent().children(".hour").html();
      if (eventDes !== " ") {
       var events = JSON.parse(localStorage.getItem("events") || "[]");

        events.push({
          oNeventDes: eventDes,
          oNeventTime: eventTime,
        });
       
      
        currDay.text('Appointment added to local storage ✅')
        setInterval(()=>currDay.text(''),5000)
      
      } else {
        window.alert("event Description is requred to save event ❌");
      }

      localStorage.setItem("events", JSON.stringify(events));
    });
  })
);
