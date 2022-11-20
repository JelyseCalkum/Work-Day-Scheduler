$(document).ready(function () {
  //Dayjs code for current date and time
  let NowDayjs = dayjs().format("dddd, MMMM D, YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowDayjs;
  let currentHour = dayjs().format("HH");

  // Button function clears local storage and contents
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  //Compares each time block to the current time:
  //if current time, add class and style "present"
  //if current time is less than timeDiv, add class and style "future"
  //if current time is greater than timeDiv, add class and style "past"
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //Grabs values from time and divs, saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //Retrieves items from local storage, sets them in proper places
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
})

