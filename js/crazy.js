document.addEventListener('DOMContentLoaded', () => {
    const playerHand = document.querySelector('.player-hand');
    const challenge = document.querySelector('.challenge');
    const drawButton = document.getElementById('draw-button');
    const challengeButton = document.getElementById('challenge-button');
    const resetButton = document.getElementById('reset-button');

    let playerCards = [
        "Bạn đã làm điều gì ngu ngốc nhất mà bạn cảm thấy hối hận! Không có uống 1 ly",
        "Nếu Được đổi giới tính một ngày bạn sẽ làm gì?",
        "Bài 3",
        "Bài 4",
        "Bài 5"
    ];
    let challengeCards = [
        "Hãy thử mặc đồ lót bên ngoài quần áo của bạn và tự hình dung mình là siêu anh hùng.",
        "Hãy tự thử thách để nói một câu chuyện hoàn toàn không liên quan và kết thúc nó một cách bất ngờ khi bạn nói: (Và đó là lý do tại sao tôi không thể ăn socola nữa.)",
        "Hãy yêu cầu bạn bè của mình phải mặc quần áo ngược (áo phải độc lập khỏi quần) và đi mua thức ăn nhanh như vậy.",
        "Múa bụng trong 30s và up story của bản thân",
        "Sủa như cún trong vòng 1 phút",
        "Thi kể tên động vật có 2 chân ai thua thì uống",
        "Mở shopee ai nhiều đơn hàng nhất thì uống",
        "Chơi một trò chơi nhỏ: mỗi người phải hát một bản nhạc độc lập cùng một lúc trong 30 giây.",
        "Thử thách một người khác trả lời mọi câu hỏi trong vòng 5 phút mà không được nói 'có' hoặc 'không' nếu thắng người bạn hỏi phải uống thua thì ngược lại."

    ];
    let currentChallenge = null;

    function drawCard() {
        if (playerCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * playerCards.length);
            const card = playerCards.splice(randomIndex, 1)[0];
            playerHand.innerHTML = `${card}`;
            playerHand.style.animation = "none";
            playerHand.offsetHeight;
            playerHand.style.animation = "fadeIn 1s";
        } else {
            playerHand.innerHTML = "Hết bài!";
            resetButton.style.display = "block";
        }
    }

    function showChallenge() {
        if (challengeCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * challengeCards.length);
            currentChallenge = challengeCards.splice(randomIndex, 1)[0];
            challenge.innerHTML = currentChallenge;
            challenge.style.animation = "none";
            challenge.offsetHeight;
            challenge.style.animation = "fadeIn 1s";
        } else {
            challenge.innerHTML = "Hết bài thử thách!";
            challengeButton.disabled = true;
        }
    }

    function resetGame() {
        playerCards = [
            "Bạn đã làm điều gì ngu ngốc nhất mà bạn cảm thấy hối hận! Không có uống 1 ly",
            "Nếu Được đổi giới tính một ngày bạn sẽ làm gì?",
            "Bài 3",
            "Bài 4",
            "Bài 5"
        ];
        challengeCards = [
            "Hãy thử mặc đồ lót bên ngoài quần áo của bạn và tự hình dung mình là siêu anh hùng.",
            "Hãy tự thử thách để nói một câu chuyện hoàn toàn không liên quan và kết thúc nó một cách bất ngờ khi bạn nói: (Và đó là lý do tại sao tôi không thể ăn socola nữa.)",
            "Hãy yêu cầu bạn bè của mình phải mặc quần áo ngược (áo phải độc lập khỏi quần) và đi mua thức ăn nhanh như vậy.",
            "Múa bụng trong 30s và up story của bản thân",
            "Sủa như cún trong vòng 1 phút",
            "Thi kể tên động vật có 2 chân ai thua thì uống",
            "Mở shopee ai nhiều đơn hàng nhất thì uống",
            "Chơi một trò chơi nhỏ: mỗi người phải hát một bản nhạc độc lập cùng một lúc trong 30 giây.",
            "Thử thách một người khác trả lời mọi câu hỏi trong vòng 5 phút mà không được nói 'có' hoặc 'không' nếu thắng người bạn hỏi phải uống thua thì ngược lại."

        ];
        playerHand.innerHTML = "";
        challenge.innerHTML = "";
        resetButton.style.display = "none";
        challengeButton.disabled = false;
    }

    drawButton.addEventListener('click', drawCard);
    challengeButton.addEventListener('click', showChallenge);
    resetButton.addEventListener('click', resetGame);
});
