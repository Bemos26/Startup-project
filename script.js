document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}


document.querySelector(".learn-more-button").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "none";
});

document.querySelector("form").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !mobile || !message) {
        alert("Please fill all fields!");
        event.preventDefault();
    }
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  document.getElementById("thank-you").style.display = "block"; 
});


// document.getElementById("chat-form").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent page reload

//   let userMessage = document.getElementById("user-message").value;
//   let chatOutput = document.getElementById("chat-output");

//   let response = getChatResponse(userMessage);

//   chatOutput.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
//   chatOutput.innerHTML += `<p><strong>EduRahisi Bot:</strong> ${response}</p>`;
//     chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
    

//   document.getElementById("user-message").value = ""; // Clear input field
// });

// function getChatResponse(message) {
//   let lowerMessage = message.toLowerCase();

//   if (lowerMessage.includes("hello")) {
//     return "Hi there! How can I help with EduRahisi?";
//   } else if (lowerMessage.includes("courses")) {
//     return "EduRahisi offers interactive learning resources on various subjects!";
//   }
//     else if (lowerMessage.includes("pricing")) {
//         return "EduRahisi offers affordable pricing plans to suit different needs. Check our pricing page for details!";
//   }
//     else if (lowerMessage.includes("support")) {
//     return "You can reach our support team on the contact page";
//   }
//     else if (lowerMessage.includes("community")) {
//     return "Join our community forum to connect with other learners and educators!";
//   }
//     else if (lowerMessage.includes("help")) {
//     return "How can I assist you today? Ask me about EduRahisi features!";
//     }
//     else if (lowerMessage.includes("about")) {
//         return "EduRahisi is an innovative platform designed to enhance learning through interactive courses and community engagement!";
//     }   
//     else if (lowerMessage.includes("contact")) {
//         return "You can contact us through the contact form on our website!";
//     }
//     else if (lowerMessage.includes("pricing")) {
//         return "EduRahisi offers affordable pricing plans to suit different needs. Check our pricing page for details!";
//     } 
//     else if (lowerMessage.includes("support")) {
//         return "You can reach our support team through the contact page!";
//     } 
//     else if (lowerMessage.includes("community")) {
//         return "Join our community forum to connect with other learners and educators!";
//     }
//     else if (lowerMessage.includes("courses")) {
//         return "EduRahisi offers interactive learning resources on various subjects!";
//     } 
//     else if (lowerMessage.includes("interactive")) {
//         return "Yes! EduRahisi features interactive courses, quizzes, and a community forum!";
//     }
//     else if (lowerMessage.includes("quizzes")) {
//         return "Yes! EduRahisi features interactive quizzes to enhance your learning experience!";
//     } 
//     else if (lowerMessage.includes("forum")) {
//         return "Join our community forum to connect with other learners and educators!";
//     }
//     else if (lowerMessage.includes("learning")) {
//         return "EduRahisi is designed to enhance learning through interactive courses and community engagement!";
//     } 
//     else if (lowerMessage.includes("innovative")) {
//         return "EduRahisi is an innovative platform designed to enhance learning through interactive courses and community engagement!";
//     } 
//     else if (lowerMessage.includes("enhance")) {
//         return "EduRahisi enhances learning through interactive courses and community engagement!";
//     } 
//     else if (lowerMessage.includes("features")) {
//         return "EduRahisi features interactive courses, quizzes, and a community forum!"; 
//     }
//   else if (lowerMessage.includes("resources")) {
//     return "EduRahisi offers a variety of interactive learning resources on different subjects!";
//   }
//    else {
//     return "I’m still learning! Ask me about EduRahisi features.";
//   }
// }
