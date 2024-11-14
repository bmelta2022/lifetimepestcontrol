document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    // Form Validation
    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll("input[required], textarea[required]");

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                input.style.borderColor = "red";
                isValid = false;
            } else {
                input.style.borderColor = "#ccc";
            }
        });

        return isValid;
    }

    // AJAX Form Submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!validateForm()) {
            feedback.textContent = "Please fill out all required fields correctly.";
            feedback.style.color = "red";
            feedback.style.display = "block";
            return;
        }

        const formData = new FormData(form);

        fetch("submit_form.php", {
            method: "POST",
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            feedback.textContent = data.message;
            feedback.style.color = data.status === "success" ? "#1b5e20" : "red";
            feedback.style.display = "block";
            if (data.status === "success") form.reset();
        })
        .catch((error) => {
            feedback.textContent = "There was an error. Please try again later.";
            feedback.style.color = "red";
            feedback.style.display = "block";
        });
    });
});
