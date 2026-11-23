
const chatForm = document.getElementById("chatForm");

const senderName = document.getElementById("senderName");

const messageInput = document.getElementById("messageInput");

const messages = document.getElementById("messages");

// استرجاع الرسائل المحفوظة
let savedMessages = JSON.parse(
    localStorage.getItem("publicMessages")
) || [];

// عرض الرسائل
function displayMessages() {

    messages.innerHTML = "";

    savedMessages.forEach(function(item) {

        const messageBox = document.createElement("div");
        messageBox.className = "message";

        const nameElement = document.createElement("strong");
        nameElement.textContent = item.name;

        const messageElement = document.createElement("p");
        messageElement.textContent = item.message;

        const timeElement = document.createElement("small");
        timeElement.textContent = item.time;

        messageBox.appendChild(nameElement);
        messageBox.appendChild(messageElement);
        messageBox.appendChild(timeElement);

        messages.appendChild(messageBox);

    });

    messages.scrollTop = messages.scrollHeight;
}

// عرض الرسائل القديمة عند فتح الصفحة
displayMessages();

// إرسال رسالة جديدة
chatForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = senderName.value.trim();

    const message = messageInput.value.trim();

    if (name === "" || message === "") {
        return;
    }

    const now = new Date();

    const newMessage = {

        name: name,

        message: message,

        time: "وقت الإرسال: " +
            now.toLocaleTimeString("ar", {
                hour: "2-digit",
                minute: "2-digit"
            })

    };

    // إضافة الرسالة إلى القائمة
    savedMessages.push(newMessage);

    // حفظ الرسائل في الجهاز
    localStorage.setItem(
        "publicMessages",
        JSON.stringify(savedMessages)
    );

    // إعادة عرض الرسائل
    displayMessages();

    // تفريغ مربع الرسالة
    messageInput.value = "";

});
