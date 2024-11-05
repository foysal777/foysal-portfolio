document.getElementById("submitButton").addEventListener("click", async (e) => {
    e.preventDefault();

    const data = {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone-number").value,
        comments: document.getElementById("comments").value
    };

    try {
        const response = await fetch('https://car-repair-backend-drf.vercel.app/contact/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});




// for qube 

