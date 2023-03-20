document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelector('#compose').addEventListener('click', compose_email);

  // By default, load the inbox
  load_mailbox('inbox');
});


// composing email and submitting on click submit
function compose_email() {

  // Show compose view and hide other views
  document.querySelector('#emails-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'block';

  // Clear out composition fields
  document.querySelector('#compose-recipients').value = '';
  document.querySelector('#compose-subject').value = '';
  document.querySelector('#compose-body').value = '';

  document.querySelector("#compose-form").addEventListener("submit", () => {send_mail()})

}

// displaying diffrent categry  of emails 
function load_mailbox(mailbox) {
  
  // Show the mailbox and hide other views
  document.querySelector('#emails-view').style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

}

function send_mail(){

  //Accessing form values and submitting it
  form = document.querySelector("#compose-form")
  recipients = form[1].value
  subject = form[2].value
  body = form[3].value
  
  console.log(recipients, subject, body)
  // sending mail to user and alerting errors errors
  
  fetch("/emails", {
    method:"POST", 
    body: JSON.stringify({
      recipients: "pukku@gmail.com",
      subject: "test 1",
      body: "body 1",
    })
  })
  .then(res => { 
    console.log(res.json())
    return res.json()})  
  .then(results => {    
     if (results.status == 201 ){
      alert(results.message+" mail sent")
      load_mailbox('sent')
     }
     alert(results.message+ "mail not sent")
  })
  .catch(err => { alert(err)})

}

function show_mails(){}

function list_mail(){}