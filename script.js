// ===========================
// ISSY'S ACCESSORIES
// script.js
// ===========================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===================================
// Fade in sections when scrolling
// ===================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===================================
// Footer Copyright Year
// ===================================

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Issy's Accessories`;

}

// ===================================
// Formspree AJAX Submit
// ===================================

async function submitForm(form, successMessage){

    form.addEventListener("submit", async function(e){

        e.preventDefault();

        const data = new FormData(form);

        const response = await fetch(form.action,{

            method:"POST",

            body:data,

            headers:{
                Accept:"application/json"
            }

        });

        if(response.ok){

            alert(successMessage);

            form.reset();

        }else{

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

// ===================================
// Hide Header on Scroll
// ===================================

let lastScrollTop = 0;

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    // Keep header visible near the top
    if(scrollTop < 100){

        header.classList.remove("header-hidden");

        lastScrollTop = scrollTop;

        return;

    }

    // Scrolling down
    if(scrollTop > lastScrollTop){

        header.classList.add("header-hidden");

    }

    // Scrolling up
    else{

        header.classList.remove("header-hidden");

    }

    lastScrollTop = scrollTop;

});
// ===================================
// FAQ Accordion
// ===================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector("span");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if(other !== item){

                other.querySelector(".faq-answer").style.maxHeight = null;
                other.querySelector("span").textContent = "+";

            }

        });

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;
            icon.textContent = "+";

        }else{

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";

        }

    });

});