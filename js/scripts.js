$(document).ready(function() {
  $(".dropDownZone").submit(function(event) {

    var answer1 = parseInt($("#q1").val());
    var answer2 = parseInt($("#q2").val());
    var answer3 = parseInt($("#q3").val());
    var answer4 = parseInt($("#q4").val());
    var answer5 = parseInt($("#q5").val());
    var result = answer1 + answer2 + answer3 + answer4 + answer5;
    console.log(result);

    event.preventDefault();


    if (result <= 5) {
      $("#firstAnswer").show();
    }
    else if (result <= 10 && result > 5) {
      $("#secondAnswer").show();
    }
    else if (result <= 15 && result > 10) {
      $("#thirdAnswer").show();
    }
    // else {
    //   $("#fourthAnswer").show();
    // }
  });
});




// $(document).ready(function() {
//   $("form.dropDownZone").submit(function(event) {
//     var first = $(".choice1").length();
//     var second = $(".choice2").length();
//     var third = $(".choice3").length();
//     var fourth = $(".choice4").length();
//
//     if (first >= second && first >= third && first >= forth) {
//       $("#firstAnswer").show();
//     }
//     event.preventDefault();
//   });
// });
