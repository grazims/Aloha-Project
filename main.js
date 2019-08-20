const email = document.querySelector("#email");

const navLink = document.querySelectorAll(".nav ul a");
navLink.forEach(function(e) {
  e.addEventListener("click", function(c) {
    c.preventDefault();
    document
      .querySelector(c.target.hash)
      .scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".form").addEventListener("submit", event => {
  event.preventDefault();

  if (email.value === "") {
    alert("Please provide an email before subscribing!");
  } else {
    alert("Thank you for subscribing!");
  }
});
