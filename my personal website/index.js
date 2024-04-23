// Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

document.getElementById("contact-btn").addEventListener("click", function() {
    // Retrieve form data
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        details: document.getElementById("comment").value
    };
    
    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    
    // Provide feedback to the user (optional)
    alert("Form data submitted and stored locally!");
    document.getElementById("contactForm").reset();
});