document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelector('#compose').addEventListener('click', compose_email);
  document.querySelector('#display-button').addEventListener('click', display_mail(10));

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

  document.querySelector("#submit").addEventListener('click', (event) => { 
    
    send_mail(event) }, false)

}

// displaying diffrent category  of emails  ** working perfectly fine
function load_mailbox(mailbox) {

  // Show the mailbox and hide other views
  document.querySelector('#emails-view').style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

  fetch('emails/'+mailbox)
  .then(response => {
    console.log(response)
    return response.json()})
  .then(result => {
    console.log(result)
    listMail(result)
  });
}

 
function send_mail(event){
  
  //Accessing form values and submitting it
  form = document.querySelector("#compose-form");
  recipients = form[1].value;
  subject = form[2].value;
  body = form[3].value;

  // sending mail to user and alerting errors errors
  fetch("/emails", {
    method:"POST", 
    body: JSON.stringify({
      recipients: recipients,
      subject: subject,
      body: body,
    })
  })  
  .then(response => {   
     if (response.ok == true ){
      load_mailbox('sent')
     }
    })
  .catch(err => { console.log(err)});

  event.preventDefault();

}

function listMail (mails){

  mail_List = document.querySelector('#mail-list');
  console.log(mail_List+"maillist");
  
  
  mails.forEach((mail) => { 
    console.log(mail.subject);
    
    list_Mail = document.createElement('li');
    list_Mail.innerHTML = mail.subject;
    mail_List.appendChild(list_Mail);
    
  }); 

}

function display_mail(email_id){

  console.log(" called display mail")

  document.querySelector("#emails-view").style.display == 'none';
  document.querySelector('#display-mail').style.display == 'block';

  fetch('emails/'+email_id)
  .then(response => { 
    if (response.ok){
      return response.json();
    }
    else {
      console.log("some error occured");
    }
    })
  .then(result => {
    console.log(result.body+" body");
    console.log(result.subject+" subject");
    document.querySelector("#mail-body").textContent == result.body;
    document.querySelector("#from").innerHTML == result.sender;

  })
  .catch(err => {consol.log(err)});
}


