// Email configuration
const SERVICE_ID = "service_icquqog";
const TEMPLATE_ID = "template_lit7jfj";
const PUBLIC_KEY = "BJnKvuMe_on36HQxQ";

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

$(document).ready(function () {
    
    $('#next_Project').click(function () {
        $('#Jolliekod').hide(1000);
        $('#Jolliekod_Description').hide(1000);
        $('#Gene_Description').fadeIn(1000);
        $('#Gene').fadeIn(1000);
        
    });
    $('#previous_Project').click(function () {
        $('#Jolliekod').fadeIn(1000);
        $('#Jolliekod_Description').fadeIn(1000);
        $('#Gene_Description').hide(1000);
        $('#Gene').hide(1000);
       
    });

    $('#download').click(function () {
        $('#Resume').download('../files/mycv.docx');
    });

});

// Global function for HTML onclick
function sendFeedback() {
    const feedback = $('#feedback').val();
    
    if (!feedback.trim()) {
        alert('Please enter feedback before submitting.');
        return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        message: feedback
    }).then(function(response) {
        console.log('Email sent successfully!', response);
        alert('Thank you! Your feedback has been sent.');
        $('#feedback').val('');
    }, function(error) {
        console.error('Failed to send email:', error);
        alert('Sorry, there was an error sending your feedback. Please try again.');
    });
}
