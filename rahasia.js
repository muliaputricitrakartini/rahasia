function bukaUcapan() {

    document.getElementById("awal").classList.add("hidden");

    document.getElementById("ucapan").classList.remove("hidden");

    buatConfetti();
}


function kejutan() {

    alert("🎉 Surpriseee! Semoga harimu menyenangkan! 💗");

    buatConfetti();
}


function buatConfetti() {

    for (let i = 0; i < 100; i++) {

        let confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            ["#ff4f91", "#9b59b6", "#3498db", "#f1c40f", "#2ecc71"][
                Math.floor(Math.random() * 5)
            ];

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.width =
            (Math.random() * 8 + 5) + "px";

        confetti.style.height =
            (Math.random() * 8 + 5) + "px";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}