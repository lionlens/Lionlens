const sliderWrapper = document.querySelector('.slider-wrapper');
const totalImages = sliderWrapper.children.length;
const slideWidth = 395; // width of one image
let currentIndex = 0;

function slideImages() {
    currentIndex++;
    if(currentIndex >= totalImages) {
        currentIndex = 0;
    }
    sliderWrapper.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

setInterval(slideImages, 2000);


function goHome() {
    window.location.href = "index.html"; // replace with your home page
}

// alart 

function sendName() {
  const username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Please enter your name!");
    return;
  }
  
  const botToken = "7332056218:AAHBeOYPKvLTvAieuOuDX_KtvP2b5nS364M"; // Replace with your bot token
  const chatId = "6981597316"; // Replace with your chat ID
  const message = `New visitor name: ${username}`;
  
  // Send message to Telegram
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
    .then(data => {
      // ✅ Hide the overlay form
      document.getElementById("overlay").style.display = "none";
      
      // ✅ Show a quick thank-you popup
      const popup = document.createElement("div");
      popup.classList.add("popup-card");
      popup.innerHTML = `
            <h2>✅ Subscribed!</h2>
            <p>Thank you, ${username}!</p>
        `;
      document.body.appendChild(popup);
      
      // ⏳ Remove popup after 3 seconds
      setTimeout(() => {
        popup.remove();
      }, 3000);
    })
    .catch(error => {
      document.getElementById("overlay").style.display = "none";
      alert("❌ Failed to send. Try again.");
      console.error(error);
    });
}
//subscribers

// Replace with your Telegram bot credentials
const BOT_TOKEN = "7332056218:AAHBeOYPKvLTvAieuOuDX_KtvP2b5nS364M";
const CHAT_ID = "6981597316";

// Replace with your Telegram bot credentials

document.querySelector(".subscribe").addEventListener("click", function () {
  const name = document.getElementById("subname").value.trim();
  const email = document.getElementById("subemail").value.trim();

  if (!name || !email) {
    alert("Please enter both name and email/number.");
    return;
  }

if (email=== "editor") {
    window.location.href = "https://lionlens.github.io/Devi-sadhna/";
    return;
  }


  // Send message to Telegram
  const message = `🔔 New Subscriber!\n👤 Name: ${name}\n📧 Contact: ${email}`;
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
  });

  // Create popup card
  const card = document.createElement("div");
  card.classList.add("popup-card");
  card.innerHTML = `
    <h2>✅ Subscribed!</h2>
    <div class="bell">🔔</div>
    <p>Thank you, ${name}!</p>
  `;

  document.body.appendChild(card);

  // Play sound
  const audio = new Audio("videoplayback (3).mp3");
  audio.play();

  // Confetti 🎉
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor =
      ["#ff0", "#f0f", "#0ff", "#0f0", "#f00", "#00f"][
        Math.floor(Math.random() * 6)
      ];

    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => confetti.remove(), 4000);
  }

  // Remove card after 4s
  setTimeout(() => card.remove(), 4000);
});

document.querySelector(".subscribe").addEventListener("click", function() {
});
