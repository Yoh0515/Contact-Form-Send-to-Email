
function sendMessage() {
   (function(){
        emailjs.init("19YZt0cTuvdX5zQfh");
   })();

   var serviceID = "service_p8kl3ki";
   var templateID = "template_a9xfkk5";

   var params = {
    sendername: document.querySelector("#fname").value,
    senderemail: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value
   };

   emailjs.send(serviceID, templateID, params)
   .then (res => {
        alert('Thank you,' + params['sendername'] + '! Your message has been sent.');

        document.querySelector("#fname").value = '';
        document.querySelector("#email").value = '';
        document.querySelector("#subject").value = '';
        document.querySelector("#message").value = '';
   })
   .catch(error => {
        alert('Sorry, something went wrong. Please try again later.');
    });

   
   const name = document.querySelector("#fname");
   const email = document.querySelector("#email");
   const subject = document.querySelector("#subject");
   const message =  document.querySelector("#message");
}