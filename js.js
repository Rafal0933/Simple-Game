    var triviaQuestions = [{
                        question: "What year did Facebook launch?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: '2004'
                    },
                    {
                        question: "What year did Apple release the first Iphone?",
                        answer: {
                            a: '2003',
                            b: '2005',
                            c: '2007',
                            d: '2009'
                        },
                        correctAnswer: '2007'
                    },
                    {
                        question: "What year did Euronotes enter circulation?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: '2004'
                    },
                    {
                        question: "What year did Huricane Katrina destroy the Gulf Coast?",
                        answer: {
                            a: '2003',
                            b: '2005',
                            c: '2007',
                            d: '2009'
                        },
                        correctAnswer: '2005'
                    },
                    {
                        question: "What year did Google purchase YouTube for '$1.65' billion?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: '2006'
                    },
                    {
                        question: "What year did Fidel Castro resign as the President of Cuba after nearly fifty years?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: '2008'
                    },
                    {
                        question: "What year did Maersk Alabama get hijacked by Somali pirates?",
                        answer: {
                            a: '2003',
                            b: '2005',
                            c: '2007',
                            d: '2009'
                        },
                        correctAnswer: '2009'
                    },
                    {
                        question: "What year did Fidel Castro resign as the President of Cuba after nearly fifty years?",
                        answer: {
                            a: '2002',
                            b: '2004',
                            c: '2006',
                            d: '2008'
                        },
                        correctAnswer: '2006'
                    }
                    ];

    var counter = 2;


    function timer() {
        var zero = 0;
        counter--;
        $('#counter').text(counter);
        if (counter <= 0) {
            scoring ();
            //Doesn't work
            clearInterval(timer);
        }
      }

    function startGame(){
        $("#target").one("click", function (){
            timer ();
            setInterval (timer, 1000);
            showQuestions ();
        })
    }

    $(document).ready(function () {
    startGame ();
        } )


            //Loop through the question array, print each question on the screen using Jquery//
   function showQuestions () {
        for ( var i = 0; i < triviaQuestions.length; i++){
            //Create a jquery object of a div and assign it to a variable a//
            var a = $("<div>");
            //Putting text from the question array into a//
            a.text(triviaQuestions[i].question);
            //Append div to show question element//
            $("#quiz").append(a);

            var theAnswersToThisQuestion = triviaQuestions[i].answer;
            // USE A FOR IN LOOP TO LOOP THROUGH AN OBJECT //
            for (ansIdx in theAnswersToThisQuestion) {
                // Answer index is the key for this property //
                //grab values inside of each answer property and index //
                var thisAnswer = theAnswersToThisQuestion[ansIdx];
                //create a radio button and add name //
                var radioButton = $('<input type="radio" name="answer-options">');
                // Set radio button value //
                radioButton.val(thisAnswer);
                //append each series of buttons to each question and name each series of buttons //
                $("#quiz").append(radioButton.attr("name", "Question"+ [i]));
                // append each answer to each button //
                $("#quiz").append(thisAnswer);
            }
        };
    };

        $("#submit").one("click", function (){
            scoring ();
        });

var correct = 0;
var incorrect = 0;

   function scoring () {

        for ( var i = 0; i < triviaQuestions.length; i++){
        // Variable for all of the correct answers //
        var theCorrectAnswer = triviaQuestions[i].correctAnswer;
        // Variable for user choices in each group of questions //
        var choice = $('input[name="Question'+i+'"]:checked').val();
        // If the correct answer is equal to the choice, Add 1 to correct //
        if (theCorrectAnswer === choice) {
            correct++;
        }
        // Otherwise, Add 1 to incorrectcorrect //
        else {
            incorrect++;
        }
        };
        // Display the number of correct answers in a concatenation //
        var correctResult = "You got " + correct + " right!";
        // Display the number of incorrect answers in a concatenation //
        var incorrectResult = "You got " + incorrect + " wrong : (";
        // Append correct results into correct Results ID //
        $('#correct-results').append(correctResult);
        // Append correct results into incorrect Results ID //
        $('#incorrect-results').append(incorrectResult);
        // create variable for a restart button //
        var restartButton = $('<input type="button" value="Restart">');
        // Append restart button to restart ID //
        $('#restart').append(restartButton);
        // Cannot get clearInterval to work //
        clearInterval(timer);
        };


        function reload () {
        window.parent.location = window.parent.location.href;
    };

        $("#restart").on("click", function (){
            reload ();
        });