// function savebtn to save the text in the middle column
$( document ).ready(function() {
    $( ".save-btn col" ).click( function() {
        var input = $( this ).siblings( ".col-lg-6").val();
        var time = $( this ).siblings(".row").text();


        localStorage.setItem(time, input);
        console.log(ready)
    }) 
}) 
// function with time track  past,present,future
function timeUpdate(){
    var currentTime = moment().hour();

    $(".row").each(function() {
        var currtime = parseInt($(this).attr(".col"));

        if (currtime > currentTime) {
            $(this).addClass("future");
         } else if (currtime < currentTime) {
             $(this).removeClass("future");
             $(this).addClass("past");
         } else {
             $(this).addClass("present")
         }
    })


}