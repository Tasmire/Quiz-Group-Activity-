//Answer variables
function calculateScore() {
    var answer1 = document.form1.op1.value;
    var answer2 = document.form1.op2.value;
    var answer3 = document.form1.op3.value;
    var answer4 = document.form1.op4.value;
    var answer5 = document.form1.op5.value;
    var name = document.getElementById("username").value;
    var score = 0;
}

//Answer validation
if (answer1 == "") { document.getElementById("message").innerHTML = "Please answer question 1."; }
    else if (answer2 == "") { document.getElementById("message").innerHTML = "Please answer question 2."; }
    else if (answer3 == "") { document.getElementById("message").innerHTML = "Please answer question 3."; }
    else if (answer4 == "") { document.getElementById("message").innerHTML = "Please answer question 4."; }
    else if (answer5 == "") { document.getElementById("message").innerHTML = "Please answer question 5."; }
        
//Score calculation from asnwers
else {
    if (answer1 == "Strongly Disagree") { score = 0; }
    if (answer1 == "Disagree") { score = 1; }
    if (answer1 == "Neutral") { score = 2; }
    if (answer1 == "Agree") { score = 3; }
    if (answer1 == "Strongly Agree") { score = 4; }

    if (answer2 == "Disagree") { score += 1; }
    if (answer2 == "Neutral") { score += 2; }
    if (answer2 == "Agree") { score += 3; }
    if (answer2 == "Strongly Agree") { score += 4; }

    if (answer3 == "Disagree") { score += 1; }
    if (answer3 == "Neutral") { score += 2; }
    if (answer3 == "Agree") { score += 3; }
    if (answer3 == "Strongly Agree") { score += 4; }

    if (answer4 == "Disagree") { score += 1; }
    if (answer4 == "Neutral") { score += 2; }
    if (answer4 == "Agree") { score += 3; }
    if (answer4 == "Strongly Agree") { score += 4; }

    if (answer5 == "Disagree") { score += 1; }
    if (answer5 == "Neutral") { score += 2; }
    if (answer5 == "Agree") { score += 3; }
    if (answer5 == "Strongly Agree") { score += 4; }
}

//Results from score
var remarks = ["Excellent", "Good", "Average", "Poor", "Very poor"];
var images = ["images/excellent.gif", "images/good.gif", "images/average.gif", "images/poor.gif", "images/very poor.gif"];
var range;

//Range value
if (score <= "20" && score >= "16") { range = 0; }
    if (score <= "15" && score >= "12") { range = 1; }
    if (score <= "11" && score >= "10") { range = 2; }
    if (score <= "9" && score >= "6") { range = 3; }
    if (score <= "5") { range = 4; }
    
//Modal output
document.getElementById("message").innerHTML = remarks[range];
document.getElementById("result").innerHTML = "Hi " + name + ", your score is: " + score;
document.getElementById("img").src = images[range];