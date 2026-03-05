document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link (for mobile)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 2. Simple Form Handling (For Appointment Booking)
    const appointmentForm = document.getElementById("appointmentForm");

    appointmentForm.addEventListener("submit", (e) => {
        // Prevent default page reload
        e.preventDefault();
        
        // Get values
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        
        // Basic validation check
        if(name && phone && date) {
            // Show success message
            alert(`Thank you, ${name}! Your appointment request for ${date} has been received. Our clinic will contact you shortly at ${phone}.`);
            
            // Clear the form
            appointmentForm.reset();
        } else {
            alert("Please fill in all the required fields.");
        }
    });
});
