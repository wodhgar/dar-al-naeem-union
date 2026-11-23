
// تحديد غرف الدردشة
let rooms = document.querySelectorAll(".room");

// تحديد عنوان الغرفة
let roomTitle = document.getElementById("roomTitle");

// تحديد مساحة الرسائل
let messages = document.getElementById("messages");

// تحديد نموذج إرسال الرسائل
let messageForm = document.getElementById("messageForm");

// تحديد مربع الكتابة
let messageInput = document.getElementById("messageInput");


// التنقل بين الغرف
rooms.forEach(function(room) {

    room.addEventListener("click", function() {

        // إزالة التحديد من جميع الغرف
        rooms.forEach(function(r) {
            r.classList.remove("active");
        });

        // تحديد الغرفة المختارة
        room.classList.add("active");

        // تغيير عنوان الغرفة
        roomTitle.textContent = room.dataset.name;

        // عرض رسالة ترحيبية
        messages.innerHTML = "";

        let welcome = document.createElement("div");

        welcome.className = "message received";

        welcome.textContent = room.dataset.message;

        messages.appendChild(welcome);

    });

});


// إرسال الرسائل
messageForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let text = messageInput.value.trim();

    if (text === "") {
        return;
    }

    let message = document.createElement("div");

    message.className = "message sent";

    message.textContent = text;

    messages.appendChild(message);

    messageInput.value = "";

    messages.scrollTop = messages.scrollHeight;

});
