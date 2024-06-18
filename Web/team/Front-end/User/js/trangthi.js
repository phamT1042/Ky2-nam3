let timer;
let timeRemaining = 10;
let quizOver = false;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    document.getElementById('countdown').innerText = `${minutes}:${seconds}`;

    if (timeRemaining === 0) {
        clearInterval(timer);
        quizOver = true;
        alert("Hết giờ! Bài đã tự động được nộp.");
        displayResult("Hết giờ! Bài đã tự động được nộp.","<br>");
        document.getElementById('result-btn').style.display = 'block';
        disableQuiz(); 
    } else {
        timeRemaining--;
    }
}

function submitQuiz() {
    if (!quizOver) {
        clearInterval(timer);
        quizOver = true;
        alert("Bài đã được nộp!");
        displayResult("Bài đã được nộp!");
        document.getElementById('result-btn').style.display = 'block';
        disableQuiz(); 
    }
}

function disableQuiz() {
    for (let i = 1; i <= 5; i++) {
        let radioButtons = document.getElementsByName('choice' + i);
        for (let j = 0; j < radioButtons.length; j++) {
            radioButtons[j].disabled = true;
        }
    }
}

function viewResult() {
    var ans = []
    for (var j = 1; j <= 5; j++) {
        var radioButtons = document.getElementsByName('choice' + j);
        var check = 0;
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                var selectedValue = radioButtons[i].value;
                ans.push(selectedValue);
                check = 1;
                break;
            }
        }
        if (check == 0) ans.push("No")
    }
    localStorage.setItem("answer", ans);

    window.location.href = "result.html";
}

function displayResult(message) {
    document.getElementById('result').innerText = message;
}

startTimer();