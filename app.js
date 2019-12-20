<<<<<<< HEAD

  var firebaseConfig = {
    apiKey: "AIzaSyDUfng4fCfD4OkZvs2vVfoxBh6-0lOuhcg",
    authDomain: "product-form.firebaseapp.com",
    databaseURL: "https://product-form.firebaseio.com",
    projectId: "product-form",
    storageBucket: "product-form.appspot.com",
    messagingSenderId: "26090702045",
    appId: "1:26090702045:web:affd1ba617f47530298734",
    measurementId: "G-GGBJ4DTRVS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
 

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('product-form')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;

  //send message values
  sendMessage(name, email, password, bio, job, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('product-form').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, password, bio, job, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  });
=======

  var firebaseConfig = {
    apiKey: "AIzaSyDUfng4fCfD4OkZvs2vVfoxBh6-0lOuhcg",
    authDomain: "product-form.firebaseapp.com",
    databaseURL: "https://product-form.firebaseio.com",
    projectId: "product-form",
    storageBucket: "product-form.appspot.com",
    messagingSenderId: "26090702045",
    appId: "1:26090702045:web:affd1ba617f47530298734",
    measurementId: "G-GGBJ4DTRVS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
 

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('product-form')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;

  //send message values
  sendMessage(name, email, password, bio, job, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('product-form').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, password, bio, job, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  });
>>>>>>> 8069b095b26f7007ec4c1db8fc9325e295b6d725
}