// ===========================
// ISSY'S ACCESSORIES
// script.js
// ===========================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade in sections when scrolling
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Thank-you message for Product Request form
 document.querySelector(".request form");

if (requestForm) {

    requestForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("💗 Thank you! Your request has been received.");

        requestForm.reset();

    });

}

// Thank-you message for Feedback form
 document.querySelector(".feedback form");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("🌸 Thank you for your feedback!");

        feedbackForm.reset();

    });

}

// Footer copyright year
const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Issy's Accessories`;

}
// =============================
// Formspree AJAX Submit
// =============================

async function submitForm(form, successMessage) {

    form.addEventListener("submit", async function(e) {

        e.preventDefault();

        const data = new FormData(form);

        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {

            alert(successMessage);

            form.reset();

        } else {

            alert("Something went wrong. Please try again.");

        }

    });

}

const requestForm = document.getElementById("requestForm");

if(requestForm){

    submitForm(
        requestForm,
        "💗 Thank you! Your product request has been sent."
    );

}

const feedbackForm = document.getElementById("feedbackForm");

if(feedbackForm){

    submitForm(
        feedbackForm,
        "🌸 Thank you for your feedback!"
    );

}
