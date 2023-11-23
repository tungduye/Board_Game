document.addEventListener('DOMContentLoaded', () => {
    const playerHand = document.querySelector('.player-hand');
    const challenge = document.querySelector('.challenge');
    const drawButton = document.getElementById('draw-button');
    const challengeButton = document.getElementById('challenge-button');
    const resetButton = document.getElementById('reset-button');

    let playerCards = [
        "Bạn thích làm tình với một người khóc (điều khiến bạn khó chịu) mỗi khi họ đạt cực khoái hay người chửi bới bạn khi quan hệ? Bỏ phiếu cùng lúc, người thua phải uống 3 ly",
        "Bạn muốn thú cưng của mình ở trong phòng hay ra khỏi phòng khi bạn làm tình? Bỏ phiếu cùng lúc, bên thua phải uống 3 ly",
        "Bạn thà không bao giờ tìm được tình yêu đích thực hay không bao giờ quan hệ tình dục nữa?",
        "Bạn muốn quan hệ tình dục với một người nổi tiếng hay với người quyến rũ nhất mà bạn biết?",
        "Bạn thà không thể cảm nhận được bất cứ điều gì về mặt tình dục mà được coi là người giỏi nhất, hay không biết gì trên giường và cảm nhận được mọi thứ?",
        "Bạn muốn quan hệ tình dục ở nơi công cộng (giả sử có khoảng 20 người có thể nhìn thấy bạn) hay không quan hệ tình dục trong một năm?",
        "Uống 2 ly nếu bạn đã từng cố tình gửi tin nhắn cho ai đó giả vờ như nó dành cho người khác"
    
    ];
    let challengeCards = [
        "Hãy tặng 2 ly cho người quyến rũ nhất phòng. (Đúng, bạn rất gợi cảm, nhưng hãy chọn một người khác ngoài bạn.)",
        "Nếu bạn đã từng liếm tai người ngồi cùng bàn thì hãy uống 2 ngụm. Nếu không hãy chọn người bạn muốn làm điều đó hoặc 2 bạn cùng uống 2 ly",
        "Nếu ai từng cạo vùng kín thì uống 1 ly",
        "Những việc chúng ta thường làm ngay sau khi ân ái, người đầu tiên hết ý tưởng, uống 2 ly.",
        "Hãy để người nào đó bạn chọn cho bạn một dấu hôn ở nơi bạn muốn. Từ chối nghĩa là 1 ly",
        "Người cuối cùng quan hệ tình dục cởi bỏ một mảnh quần áo",
        "Uống 1 ly nếu thích bị cắn vào ngực",
        "Nếu bạn đã từng ngủ với ai đó nhờ trò drinking game thì uống 2 ly",
        "Đi quanh phòng và chọn người sẽ phải chạm vào háng bạn 2 ly cho mỗi lần từ chối.",
        "Nếu bạn đã từng làm tình khi tắm thì hãy uống 3 ngụm. Nếu không hãy kể về chúng",
        "Hãy chọn một bộ phận trên cơ thể bạn. Người chơi đầu tiên chạm vào phần này sẽ uống 1 ngụm",
        "Uống 1 lần nếu bạn đã từng hẹn hò với người yêu cũ của bạn mình",
        "Nếu bạn đã từng quan hệ tình dục với người đã có gia đình thì hãy uống 2 ly.",
        "Người quan hệ tình dục nhiều nhất nhờ trang web hẹn hò uống 2 ly",
        "Uống 1 ly nếu bạn đã từng bị tổn thương vì đối phương dùng răng",
        "Xung quanh phòng, hãy kể tên từng mối quan hệ hoặc mối quan hệ cũ của bạn. Người đầu tiên hết tên, uống 2 ly.",
        "Mọi người cởi 1 cái ra đi! 1 người không thì tất cả đồng khởi nào!",
        "Nếu bạn đã quan hệ tình dục với người chơi khác trong phòng, hãy uống 2 ly",
        "Massage đầu cho người bên cạnh hoặc uống 3 ly"
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
            "Bạn thà không bao giờ tìm được tình yêu đích thực hay không bao giờ quan hệ tình dục nữa?",
            "Bạn muốn quan hệ tình dục với một người nổi tiếng hay với người quyến rũ nhất mà bạn biết?",
            "Bạn thà không thể cảm nhận được bất cứ điều gì về mặt tình dục mà được coi là người giỏi nhất, hay không biết gì trên giường và cảm nhận được mọi thứ?",
            "Bạn muốn quan hệ tình dục ở nơi công cộng (giả sử có khoảng 20 người có thể nhìn thấy bạn) hay không quan hệ tình dục trong một năm?",
            "Uống 2 ly nếu bạn đã từng cố tình gửi tin nhắn cho ai đó giả vờ như nó dành cho người khác"
        
        ];
        challengeCards = [
            "Hãy tặng 2 ly cho người quyến rũ nhất phòng. (Đúng, bạn rất gợi cảm, nhưng hãy chọn một người khác ngoài bạn.)",
            "Nếu bạn đã từng liếm tai người ngồi cùng bàn thì hãy uống 2 ngụm. Nếu không hãy chọn người bạn muốn làm điều đó hoặc 2 bạn cùng uống 2 ly",
            "Nếu ai từng cạo vùng kín thì uống 1 ly",
            "Những việc chúng ta thường làm ngay sau khi ân ái, người đầu tiên hết ý tưởng, uống 2 ly.",
            "Hãy để người nào đó bạn chọn cho bạn một dấu hôn ở nơi bạn muốn. Từ chối nghĩa là 1 ly",
            "Người cuối cùng quan hệ tình dục cởi bỏ một mảnh quần áo",
            "Uống 1 ly nếu thích bị cắn vào ngực",
            "Nếu bạn đã từng ngủ với ai đó nhờ trò drinking game thì uống 2 ly",
            "Đi quanh phòng và chọn người sẽ phải chạm vào háng bạn 2 ly cho mỗi lần từ chối.",
            "Nếu bạn đã từng làm tình khi tắm thì hãy uống 3 ngụm. Nếu không hãy kể về chúng",
            "Hãy chọn một bộ phận trên cơ thể bạn. Người chơi đầu tiên chạm vào phần này sẽ uống 1 ngụm",
            "Uống 1 lần nếu bạn đã từng hẹn hò với người yêu cũ của bạn mình",
            "Nếu bạn đã từng quan hệ tình dục với người đã có gia đình thì hãy uống 2 ly.",
            "Người quan hệ tình dục nhiều nhất nhờ trang web hẹn hò uống 2 ly",
            "Uống 1 ly nếu bạn đã từng bị tổn thương vì đối phương dùng răng",
            "Xung quanh phòng, hãy kể tên từng mối quan hệ hoặc mối quan hệ cũ của bạn. Người đầu tiên hết tên, uống 2 ly.",
            "Mọi người cởi 1 cái ra đi! 1 người không thì tất cả đồng khởi nào!",
            "Nếu bạn đã quan hệ tình dục với người chơi khác trong phòng, hãy uống 2 ly",
            "Massage đầu cho người bên cạnh hoặc uống 3 ly"

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
