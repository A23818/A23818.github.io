var question1 = {
	question: "Quốc gia vô địch World Cup 2014 ?",
	ans1: "Việt Nam",
	ans2: "Đức",
	ans3: "Pháp",
	result: "ans2"
};


var question2 = {
	question: "Quốc gia vô địch World Cup 2010 ?",
	ans1: "Tây Ban Nha",
	ans2: "Hà Lan",
	ans3: "Nam Phi",
	result: "ans1"
};

var question3 = {
	question: "Quốc gia vô địch World Cup 2006 ?",
	ans1: "Ý",
	ans2: "Đức",
	ans3: "Bồ Đào Nha",
	result: "ans1"
};

var question4 = {
	question: "Quốc gia vô địch World Cup 2002 ?",
	ans1: "Hàn Quốc",
	ans2: "Anh",
	ans3: "Brazil",
	result: "ans3"
};

var question5 = {
	question: "Việt Nam vô địch World Cup năm nào?",
	ans1: "2027",
	ans2: "2037",
	ans3: "2047",
	result: "ans1"
};

var arrQues = [question1, question2, question3, question4, question5];

var flag;
var score = 0;
var count = 1;
var lastScore = 0;
var numberClick = 0;
var max = 5;
var answer = document.querySelectorAll(".answer span");

function start() {
	window.location.href = "index.html";
}

function resetColor() {
	for (var i = 0; i < answer.length; i++) {
		answer[i].style.backgroundColor = "#cccccc";
	}
}

function changeColor(button) {
		resetColor();
		button.style.backgroundColor = " #66CCFF";
		flag = button.id;
}

function correctAns(dapAn) {
	if (dapAn == arrQues[count - 1].result) {
		score += 1;
	}
	return score;
}

function nextQuestion() {
	lastScore = correctAns(flag);
	resetColor();
	numberClick++;
	if (numberClick <= max) {
		document.getElementById("ques").innerHTML = arrQues[count].question;
		document.getElementById("ans1").innerHTML = arrQues[count].ans1;
		document.getElementById("ans2").innerHTML = arrQues[count].ans2;
		document.getElementById("ans3").innerHTML = arrQues[count].ans3;

		if(count == max)
			document.getElementById("next").innerHTML = "Kết quả";
		count++;
	} else {
		if (lastScore == arrQues.length) {
			window.location.href = "win.html";
		} else {
			window.location.href = "lose.html";
		}
	}
}
