$(document).ready(function () {
  var timer = 60;
  var goodAnswer = 0;
  var badAnswer = 0;
  function countdown() {
    setTimeout(countdown, 1000);
    if (timer == -1) {
      clearTimeout;
      alert("Time up");
    } else {
      $("#timerDiv").html("<p>You have " + timer + " seconds left</p>");
      timer--;
    }
  }
  $("#start").on("click", function () {
    $("#introDiv").hide();
    countdown();
    $("#questionDiv").show();
    $("#questionOne").show();
  });

  $(".answer1").on("click", function () {
    goodAnswer++;
    $("#questionOne").hide();
    $("#questionTwo").show();
    //$(".answer1").css("color", "white");
    //$(".answer1").css("background-color", "green");
  });
  $(".wrong1").on("click", function () {
    badAnswer++;
    $("#questionOne").hide();
    $("#questionTwo").show();
  });

  $(".answer2").on("click", function () {
    goodAnswer++;
    $("#questionTwo").hide();
    $("#questionThree").show();

    //$(".answer2").css("color", "white");
    //$(".answer2").css("background-color", "green");
  });
  $(".wrong2").on("click", function () {
    badAnswer++;
    $("#questionTwo").hide();
    $("#questionThree").show();
  });

  $(".answer3").on("click", function () {
    goodAnswer++;
    $("#questionThree").hide();
    $("#questionFour").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong3").on("click", function () {
    badAnswer++;
    $("#questionThree").hide();
    $("#questionFour").show();
  });

  $(".answer4").on("click", function () {
    goodAnswer++;
    $("#questionFour").hide();
    $("#questionFive").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong4").on("click", function () {
    badAnswer++;
    $("#questionFour").hide();
    $("#questionFive").show();
  });

  $(".answer5").on("click", function () {
    goodAnswer++;
    $("#questionFive").hide();
    $("#questionSix").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong5").on("click", function () {
    badAnswer++;
    $("#questionFive").hide();
    $("#questionSix").show();
  });

  $(".answer6").on("click", function () {
    goodAnswer++;
    $(".questionSix").hide();
    $(".questionSeven").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong6").on("click", function () {
    badAnswer++;
    $("#questionSix").hide();
    $("#questionSeven").show();
  });

  $(".answer7").on("click", function () {
    goodAnswer++;
    $(".questionSeven").hide();
    $(".questionEight").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong7").on("click", function () {
    badAnswer++;
    $("#questionSeven").hide();
    $("#questionEight").show();
  });

  $(".answer8").on("click", function () {
    goodAnswer++;
    $(".questionEight").hide();
    $(".alertDiv").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong8").on("click", function () {
    badAnswer++;
    $("#questionEight").hide();
    $("#alertDiv").show();
  });
});
