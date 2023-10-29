 


// $(document).ready(function () {
$(".owl-carousel").owlCarousel({

    // nav: true next prev
    dots: true,
    // loop: true,
    responsive: {
        0: {
            items: 1
        },

        874.20: {
            items: 2
        },
        1200: {
            items: 3
        }
    },

});



document.getElementById('send-msg-form').addEventListener('submit', function(event) {
    event.preventDefault();
     
    var formData = new FormData(this);
    const show_error= document.getElementById("section7-form-container-error")
    const success_msg= document.getElementById("section7-form-container-msg")


    $.ajax({
        type: 'POST',
        url: '/send-message-form/',  // Replace with your actual URL
        data: JSON.stringify(Object.fromEntries(formData)),
        contentType: 'application/json; charset=utf-8',
        headers: {
            'X-CSRFToken': csrfToken  
        },
        success: function(response) {
             if (response.RequiredError == "Name and Email both should be filled." ) {
                show_error.innerHTML="<b style='color:red'>Name and Email both should be filled.</b>"
                setTimeout(function() {
                    show_error.innerHTML = ""; // Clear the error message
                  }, 3000); 
             }

             else if(response.message == "Form data received successfully"){
                const isDarkMode = toggle_circle.classList.contains("dark-mode")
              
                document.getElementById('send-msg-form').reset()
                success_msg.innerHTML = isDarkMode
                ? `<b style='color:white'>Form has been submitted</b>`
                : `<b>Form has been submitted</b>`;
                setTimeout(function() {
                    success_msg.innerHTML = ""; // Clear the error message
                  }, 3000); 
             }
                  
           
        },
        error: function(xhr, textStatus, error) {
            console.error('Error:', error);
            // Handle error
        }
    });



});



// submit form on enter key press
document.addEventListener('keydown', function(event) {
    if (event.key === 13) {
        event.preventDefault();

        var formData = new FormData(this);
        const show_error= document.getElementById("section7-form-container-error")
        const success_msg= document.getElementById("section7-form-container-msg")
    

$.ajax({
    type: 'POST',
    url: '/send-message-form/',  // Replace with your actual URL
    data: JSON.stringify(Object.fromEntries(formData)),
    contentType: 'application/json; charset=utf-8',
    headers: {
        'X-CSRFToken': csrfToken  
    },
    success: function(response) {
         if (response.RequiredError == "Name and Email both should be filled." ) {
            show_error.innerHTML="<b style='color:red'>Name and Email both should be filled.</b>"
            setTimeout(function() {
                show_error.innerHTML = ""; // Clear the error message
              }, 3000); 
         }

         else if(response.message == "Form data received successfully"){
            document.getElementById('send-msg-form').reset()
            success_msg.innerHTML = "<b>Form has been submitted </b>"
            setTimeout(function() {
                success_msg.innerHTML = ""; // Clear the error message
              }, 3000); 
         }
              
       
    },
    error: function(xhr, textStatus, error) {
        console.error('Error:', error);
        // Handle error
    }
});

    }})


// Get all the menu items
const circles = document.querySelectorAll('.circle');
const nav_svgs= document.querySelectorAll('.nav-svg');


// Add a click event listener to each menuItem
circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        // Remove the 'active' class from all menu items
        circles.forEach((circle) => {
            circle.classList.remove('orange-circle');
        });
        // Add the 'active' class to the clicked menuItem
        circle.classList.add('orange-circle');
        nav_svgs.forEach((nav_svg) => {
            if (nav_svg) {
                const path = nav_svg.querySelector('path');
                if (path) {
                    path.setAttribute('fill', '#767676'); // Change the fill color to red
                }
            }
        });
         

        // Change the fill color of the SVG inside the clicked menuItem
        const svg = circle.querySelector('svg');
        if (svg) {
            const path = svg.querySelector('path');
            if (path) {
                path.setAttribute('fill', '#2B2B2B'); // Change the fill color to red
            }
        }
    });
});


 