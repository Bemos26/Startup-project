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
        event.preventDefault(); // Stop form submission
    }
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop actual submission

  document.getElementById("thank-you").style.display = "block"; // Show message

});