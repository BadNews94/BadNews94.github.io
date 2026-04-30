/*
    Student Name: Nicholas Brantley
    File Name: script.js
*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function() {
            alert("Thank you for your message!");
        });
    }
});