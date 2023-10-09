document.addEventListener('DOMContentLoaded', () => {
    const playerHand = document.querySelector('.player-hand');
    const challenge = document.querySelector('.challenge');
    const drawButton = document.getElementById('draw-button');
    const challengeButton = document.getElementById('challenge-button');
    const resetButton = document.getElementById('reset-button');

    let playerCards = ["Bạn đã làm điều gì ngu ngốc nhất mà bạn cảm thấy hối hận! Không có uống 1 ly",
        "Nếu Được đổi giới tính một ngày bạn sẽ làm gì?",
        "Nói 3 điều mà bạn đang mong muốn ở hiện tại",
        "Bài 4",
        "Bài 5"];
    let currentChallenge = null; // Biến lưu câu hỏi hoặc thách thức hiện tại

    // Hàm để rút một lá bài từ bộ bài và thêm vào tay người chơi
    function drawCard() {
        if (playerCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * playerCards.length);
            const card = playerCards.splice(randomIndex, 1)[0];
            playerHand.innerHTML = `${card}`;
            playerHand.style.animation = "none"; // Tắt hiệu ứng fadeIn
            playerHand.offsetHeight; // Kích hoạt lại hiệu ứng
            playerHand.style.animation = "fadeIn 1s"; // Bật lại hiệu ứng fadeIn
        } else {
            playerHand.innerHTML = "Hết bài!";
            resetButton.style.display = "block"; // Hiển thị nút Reset khi hết bài
        }
        challengeButton.disabled = false;
    }


    // Hàm để hiển thị câu hỏi hoặc thách thức
    function showChallenge() {
        const challenges = [
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
        const randomIndex = Math.floor(Math.random() * challenges.length);
        currentChallenge = challenges[randomIndex];
        challenge.innerHTML = currentChallenge;
        challenge.style.animation = "none"; // Tắt hiệu ứng fadeIn
        challenge.offsetHeight; // Kích hoạt lại hiệu ứng
        challenge.style.animation = "fadeIn 1s";
    }

    // Hàm để khởi động lại trò chơi
    function resetGame() {
        playerCards = ["Bạn đã làm điều gì ngu ngốc nhất mà bạn cảm thấy hối hận! Không có uống 1 ly",
        "Nếu Được đổi giới tính một ngày bạn sẽ làm gì?",
        "Bài 3",
        "Bài 4",
        "Bài 5"];       
        playerHand.innerHTML = "";
        challenge.innerHTML = "";
        resetButton.style.display = "none";
    }

    drawButton.addEventListener('click', drawCard);
    challengeButton.addEventListener('click', showChallenge);
    resetButton.addEventListener('click', resetGame);
});
