/*    var counter = 5;


    function timer() {
        var zero = 0;
        counter--;
        $('#counter').text(counter);
      }

    function startGame(){
        $("#target").on("click", function (event){
            console.log("event",event);
            timer ();
            setInterval (timer, 1000);
            showQuestions ();
        })
    }

    $(document).ready(function () {
    startGame ();
        } )*/

    var triviaQuestions = [{
                        question: "What year did Facebook launch?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: 'b'
                    },
                    {
                        question: "What year did Apple release the first Iphone?",
                        answer: {
                            a: '2003',
                            b: '2005',
                            c: '2007',
                            d: '2009'
                        },
                        correctAnswer: 'c'
                    },
                    {
                        question: "What year did Euronotes enter circulation?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: 'b'
                    },
                    {
                        question: "What year did Huricane Katrina destroy the Gulf Coast?",
                        answer: {
                            a: '2003',
                            b: '2005',
                            c: '2007',
                            d: '2009'
                        },
                        correctAnswer: 'b'
                    },
                    {
                        question: "What year did Google purchase YouTube for '$1.65' billion?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: 'c'
                    },
                    {
                        question: "What year did Fidel Castro resign as the President of Cuba after nearly fifty years?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: 'd'
                    },
                    {
                        question: "What year did Maersk Alabama get hijacked by Somali pirates?",
                        answer: {
                            a: '2003',
                            b: '2005',
                            c: '2007',
                            d: '2009'
                        },
                        correctAnswer: 'd'
                    },
                    {
                        question: "What year did Fidel Castro resign as the President of Cuba after nearly fifty years?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: 'c'
                    }
                    ];

var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var submitButton = $("#submit");


            //Loop through the question array, print each question on the screen using Jquery//
   function showQuestions () {
        for ( var i = 0; i < triviaQuestions.length; i++){
            //Create a jquery object of a div and assign it to a variable a//
            var a = $("<div>");
            //Putting text from the question array into a//
            a.text(triviaQuestions[i].question);
            //Append div to show question element//
            $("#quiz").append(a);
    function createButton () {
        for (var j = 0; j<4; j++) {
            var b = $('<input type="radio" name="butn">' + "test");
/*            var b = $('<input type="radio" name="butn">' + );*/
            b.val(triviaQuestions[i].answer[j]);
/*            b.text(question[i].answer);*/
            $("#quiz").append(b);
/*            $("#quiz").append(b);
/*    for (var j = 0; j<question.lenth; i++) {
            var b = $('<input type="radio" name="butn">' + questions[i].answer{});
    }*/
    }
};
    createButton ();
}
};

    showQuestions ();

