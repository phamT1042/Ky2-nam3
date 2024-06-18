const userAnswers = localStorage.getItem("answer").split(",");
const correctOptions = ['B', 'C', 'A', 'B', 'A'];

let correctAnswers = sumPoint(userAnswers, correctOptions);

document.getElementById('result-summary').innerText = `Số câu trả lời đúng: ${correctAnswers} / ${correctOptions.length}`;
document.getElementById('score').innerText = `Điểm số: ${(correctAnswers / correctOptions.length * 10).toFixed(2)}`;

function sumPoint(userAnswers, correctOptions){
    let cnt = 0;
    for(let i = 0; i < correctOptions.length; i++){
        if(userAnswers[i] == correctOptions[i]) cnt++;
    }
    return cnt;
}

function reviewAnswersBack() {
    const reviewContainer = document.getElementById('review-answers-detail');
    reviewContainer.innerHTML = '';

    for (let i = 0; i < correctOptions.length; i++) {
        const questionNumber = i + 1;
        const userAnswer = userAnswers[i];
        const correctAnswer = correctOptions[i];
        const explanation = "Giải thích chi tiết về câu hỏi " + questionNumber + ".";

        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<h1><strong>Câu hỏi ${questionNumber}:</strong> Đây là câu hỏi số ${questionNumber}?</h1>`;
        reviewContainer.appendChild(questionDiv);

        const radioContainer = document.createElement('div');
        radioContainer.className = 'review-radio-container';

        for (let option of ['A', 'B', 'C']) {
            const radioLabel = document.createElement('label');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `choice${questionNumber}`;
            radioInput.value = option;
            radioInput.disabled = true;

            if (option === userAnswer) {
                radioInput.checked = true;
            }

            const radioSpan = document.createElement('span');
            radioSpan.className = 'review-radio';
            radioSpan.innerText = `Lựa chọn ${option}`;

            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioSpan);
            radioContainer.appendChild(radioLabel);
        }

        questionDiv.appendChild(radioContainer);

        const answerParagraph = document.createElement('p');
        answerParagraph.innerHTML = `<h2><strong>Đáp án đúng:</strong> Lựa chọn ${correctAnswer}</h2>`;
        answerParagraph.style.marginTop = '10px'
        questionDiv.appendChild(answerParagraph);

        const explanationParagraph = document.createElement('p');
        explanationParagraph.className = 'explanation';
        explanationParagraph.innerHTML = explanation;
        questionDiv.appendChild(explanationParagraph);

        if (userAnswer === correctAnswer) {
            answerParagraph.style.color = 'green';
        } else {
            answerParagraph.style.color = 'red';
        }
    }
}