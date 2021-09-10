const btn = document.getElementById('button');
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_9metfus';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      document.getElementById('name').value="";
      document.getElementById('email').value="";
      document.getElementById('subject').value="";
      document.getElementById('message').value="";
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});