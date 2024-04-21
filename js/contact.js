document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      //const nameInput = document.querySelector('.form input[type="email"]');
      const emailInput = document.querySelector('.form input[type="text"]');
      //const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      if (!email) {
        alert("Please enter your mail !");
        return;
      }
      alert("Thank you for your submission. Will Get Back To You Soon!");
      form.reset();
    });
  });