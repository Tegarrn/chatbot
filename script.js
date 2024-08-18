document.getElementById("send-btn").addEventListener("click", function() {
    let messageInput = document.getElementById("message-input");
    let messageText = messageInput.value.trim();

    if (messageText) {
        // Tambahkan pesan dari user ke chat body
        addMessage("user", messageText);

        // Clear input
        messageInput.value = "";

        // Respons bot berdasarkan pesan user
        setTimeout(() => {
            let botResponse = getBotResponse(messageText);
            addMessage("bot", botResponse);
        }, 1000);
    }
});


    // Definisikan kata kunci dan respons
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
    
        // Definisikan kata kunci dan respons
        const responses = {
            greetings: ["halo", "hi", "hello", "selamat pagi", "selamat siang", "selamat sore"],
            farewells: ["selamat tinggal", "bye", "goodbye", "sampai jumpa", "dadah"],
            thanks: ["terima kasih", "thanks", "makasih"],
            inquiries: ["apa kabar", "how are you", "siapa kamu", "what's your name", "bagaimana kabar", "kabar baik"],
            help: ["bantuan", "help", "butuh bantuan", "tolong"],
            goodnight: ["selamat malam", "good night"],
            time: ["jam berapa", "what time is it", "sekarang jam berapa"],
            jokes: ["lelucon", "joke", "cerita lucu"],
            whatis: ["apa itu", "what is", "apa maksudnya"],
            weather: ["cuaca hari ini", "how's the weather", "ramalan cuaca", "prakiraan cuaca"],
            news: ["berita terbaru", "news", "info terbaru", "update berita"],
            activities: ["apa yang bisa dilakukan", "what can I do", "aktivitas apa yang ada", "kegiatan apa yang bisa dilakukan"],
            compliments: ["kamu keren", "you are great", "terima kasih atas bantuannya", "thanks for your help"],
            complaints: ["saya tidak puas", "complain", "masalah", "ada yang salah"],
            locations: ["di mana", "where", "lokasi", "letak"],
            recommendations: ["rekomendasi", "saran", "what do you recommend", "apa yang bisa direkomendasikan"]
        };
    
        // Cek pesan dan kembalikan respons yang sesuai
        if (responses.greetings.some(keyword => message.includes(keyword))) {
            return "Halo! Ada yang bisa saya bantu hari ini?";
        } else if (responses.farewells.some(keyword => message.includes(keyword))) {
            return "Selamat tinggal! Semoga harimu menyenangkan!";
        } else if (responses.thanks.some(keyword => message.includes(keyword))) {
            return "Sama-sama! Jika ada yang lain yang bisa saya bantu, silakan beritahu saya.";
        } else if (responses.inquiries.some(keyword => message.includes(keyword))) {
            return "Saya hanya bot, tetapi saya di sini untuk membantu kamu!";
        } else if (responses.help.some(keyword => message.includes(keyword))) {
            return "Tentu! Apa yang bisa saya bantu?";
        } else if (responses.goodnight.some(keyword => message.includes(keyword))) {
            return "Selamat malam! Semoga tidurmu nyenyak.";
        } else if (responses.time.some(keyword => message.includes(keyword))) {
            return "Saya tidak dapat mengakses waktu saat ini, tetapi kamu bisa memeriksa perangkatmu untuk mengetahui waktu.";
        } else if (responses.jokes.some(keyword => message.includes(keyword))) {
            return "Kenapa ilmuwan tidak percaya pada atom? Karena mereka menyusun segala sesuatu!";
        } else if (responses.whatis.some(keyword => message.includes(keyword))) {
            return "Silakan beri tahu saya apa yang ingin kamu ketahui, dan saya akan mencoba membantu.";
        } else if (responses.weather.some(keyword => message.includes(keyword))) {
            return "Saya tidak dapat memberikan informasi cuaca langsung, tetapi kamu bisa memeriksa aplikasi cuaca di perangkatmu.";
        } else if (responses.news.some(keyword => message.includes(keyword))) {
            return "Saya tidak memiliki akses ke berita terbaru, tapi kamu bisa memeriksa situs berita atau aplikasi berita di perangkatmu.";
        } else if (responses.activities.some(keyword => message.includes(keyword))) {
            return "Ada banyak aktivitas yang bisa dilakukan. Misalnya, kamu bisa berolahraga, membaca buku, atau menjelajahi tempat baru.";
        } else if (responses.compliments.some(keyword => message.includes(keyword))) {
            return "Terima kasih! Senang mendengar itu dari kamu.";
        } else if (responses.complaints.some(keyword => message.includes(keyword))) {
            return "Maaf mendengar itu. Bagaimana saya bisa membantu memperbaiki masalah tersebut?";
        } else if (responses.locations.some(keyword => message.includes(keyword))) {
            return "Kamu bisa menggunakan aplikasi peta di perangkatmu untuk mencari lokasi.";
        } else if (responses.recommendations.some(keyword => message.includes(keyword))) {
            return "Apa yang kamu cari? Saya bisa memberikan beberapa rekomendasi berdasarkan kebutuhanmu.";
        } else {
            return "Maaf, saya tidak mengerti maksud kamu. Bisa jelaskan lebih lanjut?";
        }
    }
    



function addMessage(sender, text) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;

    document.getElementById("chat-body").appendChild(messageDiv);
    document.getElementById("chat-body").scrollTop = document.getElementById("chat-body").scrollHeight;
}
