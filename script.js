//declare var for save button
var saveBtn = $(".save-btn");
// function savebtn to save the text in the middle column
$(document).ready(function () {
  saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var input = $(this).siblings(".Note").val();

    localStorage.setItem(time, input);
  });
  // function with time track  past,present,future
  function timeUpdate() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
      var currtime = parseInt($(this).attr("id").split("hour")[1]);

      if (currtime > currentTime) {
        $(this).addClass("future");
      } else if (currtime < currentTime) {
        $(this).removeClass("future");
        $(this).addClass("past");
      } else {
        $(this).addClass("present");
      }
    });
  }
//   save every single box of input to localstorage
  $("#hour9 .Note").val(localStorage.getItem("hour9"));
  $("#hour10 .Note").val(localStorage.getItem("hour10"));
  $("#hour11 .Note").val(localStorage.getItem("hour11"));
  $("#hour12 .Note").val(localStorage.getItem("hour12"));
  $("#hour1 .Note").val(localStorage.getItem("hour1"));
  $("#hour2 .Note").val(localStorage.getItem("hour2"));
  $("#hour3 .Note").val(localStorage.getItem("hour3"));
  $("#hour4 .Note").val(localStorage.getItem("hour4"));
  $("#hour5 .Note").val(localStorage.getItem("hour5"));

  timeUpdate();
});
