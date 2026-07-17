// Initialize EmailJS
emailjs.init({
   publicKey: "1QJ74GJ6g4tXs2-7J",
});

// Form
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_w8v8ms1",
        "template_txi30l4",
        this
    )

    .then(() => {

        alert("Message sent successfully!");

        form.reset();

    })

    .catch((error) => {

        alert("Failed to send message.");

        console.log(error);

    });

});