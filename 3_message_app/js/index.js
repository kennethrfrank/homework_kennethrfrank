var questions = ["What is your name?", "How's your day?", "What can I help you with today?", "OK. Give me a second to look into that."];
var answers = [];
var responses = ["That's great to hear!", ":( I'm sorry to hear that."];
var intCurrentQuestion = 0;

// Step 1 - Write a jQuery on page load anonymous function

    $(function(){
        askQuestion(intCurrentQuestion);
         
        $('#conversationForm').submit(function(submitEvent){

            submitEvent.preventDefault();
            var answer = $('#answer').val();
            sendAnswer(answer);

        });




    });


    // Step 2 - Call the askQuestion function below and pass it the global intCurrentQuestion variable

    // Step 3 - Select #conversationForm, use the submit event to capture submitEvent with an anonymous function and then .preventDefault()
        
        // Declare a variable "answer" and select #answer get the input value
        
        // Call sendAnswer() and pass it the local answer variable 


function askQuestion(questionNumber)
{
    console.log("Inside askQuestion:", questionNumber);
    // Declare a variable called "question" and use the global questions array and the local questionNumber to assign the value
    var question = questions[questionNumber];
    // Write an if(question) statement

        if(question){
            $('#conversation').append('<li class="list-group-item ai">' + questions[questionNumber] + '</li>');

            intCurrentQuestion = intCurrentQuestion + 1;

        }else{
            console.log(answers);
        }
        
        // Select #conversation and append the following string:
        // '<li class="list-group-item ai">' + questions[questionNumber] + '</li>'

        // Re-assign the global variable intCurrentQuestion to equal the local questionNumber variable
}

function sendAnswer(answer)
{
    console.log("Inside sendAnswer", answer);
    // Write an if(answer) statement

        if(answer){
            var good = "g";
            var bad = "b";

            $('#answer').val('');
            answers.push(answer);

          /*  

          
          if (intCurrentQuestion = 1){
                if (answer.contains(good)){
                    $('#conversation').append('<li class="list-group-item ai">' + answer + '</li>');
                }else if (answer.contains(bad)){
                    $('#conversation').append('<li class="list-group-item ai">' + answer + '</li>');
                }
            } */
            
            $('#conversation').append('<li class="list-group-item human">' + answer + '</li>');
            
            askQuestion(intCurrentQuestion);

            
        }
        // Select #answer and set the value to ''
        
        // Select #conversation and append the following string:
        // '<li class="list-group-item human">' + answer + '</li>'

        //  use answers.push() to add the local variable answer to the answers array

        //  call askQuestion() and pass: intCurrentQuestion + 1
}

