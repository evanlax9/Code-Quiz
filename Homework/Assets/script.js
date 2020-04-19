$(document).ready(function () {
  $(".alertDiv").hide();
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
    timer = timer - 5;
    $("#questionOne").hide();
    $("#questionTwo").show();
  });

  $(".answer2").on("click", function () {
    goodAnswer++;
    timer = timer + 10;
    $("#questionTwo").hide();
    $("#questionThree").show();

    //$(".answer2").css("color", "white");
    //$(".answer2").css("background-color", "green");
  });
  $(".wrong2").on("click", function () {
    badAnswer++;
    timer = timer - 5;
    $("#questionTwo").hide();
    $("#questionThree").show();
  });

  $(".answer3").on("click", function () {
    goodAnswer++;
    timer = timer + 10;
    $("#questionThree").hide();
    $("#questionFour").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong3").on("click", function () {
    badAnswer++;
    timer = timer - 5;

    $("#questionThree").hide();
    $("#questionFour").show();
  });

  $(".answer4").on("click", function () {
    goodAnswer++;
    timer = timer + 10;
    $("#questionFour").hide();
    $("#questionFive").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong4").on("click", function () {
    badAnswer++;
    timer = timer - 5;
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
    timer = timer - 5;

    $("#questionSix").hide();
    $("#questionSeven").show();
  });

  $(".answer7").on("click", function () {
    goodAnswer++;
    timer = timer + 10;

    $(".questionSeven").hide();
    $(".questionEight").show();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong7").on("click", function () {
    badAnswer++;
    timer = timer - 5;

    $("#questionSeven").hide();
    $("#questionEight").show();
  });

  $(".answer8").on("click", function () {
    goodAnswer++;
    timer = timer + 10;

    showResults();
    //$(".answer3").css("color", "white");
    //$(".answer3").css("background-color", "green");
  });
  $(".wrong8").on("click", function () {
    badAnswer++;
    timer = timer - 5;

    showResults();
  });
  function showResults() {
    $("#questionEight").hide();
    $(".numberCorrect").html(goodAnswer);
    $(".numberIncorrect").html(badAnswer);

    $(".alertDiv").show();
  }
});
