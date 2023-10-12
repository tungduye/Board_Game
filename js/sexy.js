document.addEventListener('DOMContentLoaded', () => {
    const playerHand = document.querySelector('.player-hand');
    const challenge = document.querySelector('.challenge');
    const drawButton = document.getElementById('draw-button');
    const challengeButton = document.getElementById('challenge-button');
    const resetButton = document.getElementById('reset-button');

    let playerCards = [
        "Bạn thích làm tình với một người khóc (điều khiến bạn khó chịu) mỗi khi họ đạt cực khoái hay người chửi bới bạn khi quan hệ? Bỏ phiếu cùng lúc, người thua phải uống 3 ly",
        "Bạn muốn thú cưng của mình ở trong phòng hay ra khỏi phòng khi bạn làm tình? Bỏ phiếu cùng lúc, bên thua phải uống 3 ly",
        "Bài 3",
        "Bài 4",
        "Bài 5"
    ];
    let challengeCards = [
        "Hãy tặng 2 ly cho người quyến rũ nhất phòng. (Đúng, bạn rất gợi cảm, nhưng hãy chọn một người khác ngoài bạn.)",
        "Nếu bạn đã từng liếm tai người ngồi cùng bàn thì hãy uống 2 ngụm. Nếu không hãy chọn người bạn muốn làm điều đó hoặc 2 bạn cùng uống 2 ly",
        "Nếu ai từng cạo vùng kín thì uống 1 ly",
        "Những việc chúng ta thường làm ngay sau khi ân ái, người đầu tiên hết ý tưởng, uống 2 ly.",
        "Hãy để người nào đó bạn chọn cho bạn một dấu hôn ở nơi bạn muốn. Từ chối nghĩa là 1 ly",
        "Người cuối cùng quan hệ tình dục cởi bỏ một mảnh quần áo",
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
            "Bạn thích làm tình với một người khóc (điều khiến bạn khó chịu) mỗi khi họ đạt cực khoái hay người chửi bới bạn khi quan hệ? Bỏ phiếu cùng lúc, người thua phải uống 3 ly",
            "Bạn muốn thú cưng của mình ở trong phòng hay ra khỏi phòng khi bạn làm tình? Bỏ phiếu cùng lúc, bên thua phải uống 3 ly",
            "Bài 3",
            "Bài 4",
            "Bài 5"
        ];
        challengeCards = [
            "Hãy tặng 2 ly cho người quyến rũ nhất phòng. (Đúng, bạn rất gợi cảm, nhưng hãy chọn một người khác ngoài bạn.)",
            "Nếu bạn đã từng liếm tai người ngồi cùng bàn thì hãy uống 2 ngụm. Nếu không hãy chọn người bạn muốn làm điều đó hoặc 2 bạn cùng uống 2 ly",
            "Nếu ai từng cạo vùng kín thì uống 1 ly",
            "Những việc chúng ta thường làm ngay sau khi ân ái, người đầu tiên hết ý tưởng, uống 2 ly.",
            "Hãy để người nào đó bạn chọn cho bạn một dấu hôn ở nơi bạn muốn. Từ chối nghĩa là 1 ly",
            "Người cuối cùng quan hệ tình dục cởi bỏ một mảnh quần áo",
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
