
document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed-name', {
        strings: ['Foysal Hossain <span class="text-orange-300">Munna</span>'],
        typeSpeed: 100,    // Speed of typing
        backSpeed: 50,     // Speed of backspacing
        startDelay: 700,   // Delay before typing starts
        backDelay: 1500,   // Delay before backspacing starts
        loop: false  ,
        showCursor: false      
    });
});



// for django developer 


new Typed('#typed-title', {
    strings: ['Django Developer..', 'Backend Developer..', 'Web Developer..'],
    typeSpeed: 100,     // Speed of typing
    backSpeed: 50,      // Speed of backspacing
    startDelay: 1000,   // Delay before typing starts
    backDelay: 1500,    // Delay before backspacing starts
    loop: true,         // Enable looping for continuous cycling
    showCursor: true   // Disable the blinking cursor
});






document.getElementById("resumeButton").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "images/Foysal-Hossain-CV.pdf"; 
    link.download = "CV_Foysal_Hossain.pdf";  
    link.click();
});





// for soft skill 

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".radial-progress");

    progressBars.forEach(progressBar => {
        const targetValue = parseInt(progressBar.getAttribute("data-target"));
        let currentValue = 0;

        const interval = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                progressBar.style.setProperty('--value', currentValue);
                progressBar.textContent = `${currentValue}%`;
            } else {
                clearInterval(interval);
            }
        }, 200); // Adjust the speed of the animation here
    });
});



// for auto response







// for email sending 


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



// for typing animation 

const wrapper = document.createElement('div');
wrapper.className = 'cursor-wrapper';

const inner = document.createElement('div');
inner.className = 'cursor-inner';

const outer = document.createElement('div');
outer.className = 'cursor-outer';

wrapper.appendChild(outer);
wrapper.appendChild(inner);
document.body.appendChild(wrapper);

const colors = ['#13faa9' ,'#f213fa' ,'#b1fa13','#13b5fa'];
let index = 0;

document.addEventListener('mousemove', (e) => {
  wrapper.style.left = e.clientX + 'px';
  wrapper.style.top = e.clientY + 'px';
});

setInterval(() => {
  index = (index + 1) % colors.length;
  inner.style.backgroundColor = colors[index];
  outer.style.borderColor = colors[index];
}, 2000);


