//declare var for save button
var saveBtn = $(".save-btn")
// function savebtn to save the text in the middle column
  saveBtn.on("click", function () {

      var time = $(this).siblings("#hour").text();
    var input = $(this).siblings(".Note").val();
    

    localStorage.setItem(time, input);
  });
  // function with time track  past,present,future
  function timeUpdate() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
      var currtime = parseInt($(this).attr("id"));

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

