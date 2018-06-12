var questions = [
    {
        question: "The Vikings finished with a total record of 16-6 (including Pre/post Season)",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "True"
    },

    {
        question: "The Vikings won all of their division games",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "False"
    },

    {
        question: "Adrian Peterson got 103 Yards against the Vikings in Game 1",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "False"
    },

    {
        question: "The Vikings out scored the Packers by 29 Points",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "True"
    },

    {
        question: "The Vikings had the 2nd best overall team defense",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "False"
    },

    {
        question: "Adam Thielen had four games with 100+ yards receiving",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "True"
    },

    {
        question: "The Vikings had 3 players tied with a team high of 8 TDs",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "True"
    },

    {
        question: "The Vikings gave up five touchdowns off turn overs",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "False"
    },

    {
        question: "Case Keenum forced 2 fumbles",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "True"
    },

    {
        question: "Diggs made a last second catch to win the second round of the playoffs",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswers: "True"
    },

];
var currentQuestion = 0;
var score = 0;
function presentQuestion() {
    if (currentQuestion < questions.length) {
        $("#question").fadeOut(function () {
            $(this).text(questions[currentQuestion].question)
        }).fadeIn(function () {
            $("#true").removeClass("correct wrong")
            $("#false").removeClass("correct wrong")
        });
    } else {
        $("#quiz").addClass("hidden")
        if (score > 6) { $("#winner").removeClass("hidden") }
        else { $("#loser").removeClass("hidden") }
        $("#score").text("You got " + score + " questions right out of 10")
    }
}

presentQuestion()
$("#true").click(function () {
    if ("True" === questions[currentQuestion].correctAnswers) {
        score++
        $(this).addClass("correct")
    }
    else {
        $(this).addClass("wrong")
    }
    currentQuestion++
    presentQuestion();
});
$("#false").click(function () {
    if ("False" === questions[currentQuestion].correctAnswers) {
        score++
        $(this).addClass("correct")
    }
    else {
        $(this).addClass("wrong")
    }
    currentQuestion++
    presentQuestion();
});
var timer = 120

setInterval(function () {
    timer--
    $("#timer").text(timer + " seconds")
    if (timer === 0) {
        currentQuestion = 10
        presentQuestion()
    }
}, 1000)
