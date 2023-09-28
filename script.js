/*Contact Form
Take from the user First and Last name, email and a message. Show output using alert window.
 */

// Connect to the contact form
let contactForm=document.getElementById("contactForm");
//console.log(contactForm.value);
contactForm.addEventListener("submit", function(event){sendEmail(event);});
//window.confirm("theMessage");

function sendEmail(event){
  event.preventDefault();
  console.log("sendEmail() is running");
  let userFName=document.getElementById("firstName").value;
  let userLName=document.getElementById("lastName").value;
  let userEmail=document.getElementById("userEmail").value;
  let userMessage=document.getElementById("userMessage").value;
  
  let theMessage = "Thank you, "+ userFName + " " + userLName+ " Your Massage: "+ userMessage+ " sent. We will contact you by the emai" + userEmail;
  console.log(theMessage);
  window.alert(theMessage);
}
