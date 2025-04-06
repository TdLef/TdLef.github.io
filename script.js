

function buttonClicked() {
    alert("ボタンが押されました");
}

const greetings = [
    "こんにちは",
    "当サイトを閲覧いただきありがとうございます",
    "ネットの旅、お疲れ様でした",
    "どうぞ、ゆっくりしていってください"
]

function changeGreetingTest() {
    let index = 0;
    return function() {
        document.getElementById('greeting').innerText = greetings[index];
        index = (++index) % greetings.length;
    }
}

const updateGreeting = changeGreetingTest();
updateGreeting();
setInterval(updateGreeting, 1750);