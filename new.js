(function() {
  const config = {
    apiKey: "AIzaSyBEy42lyu1_ghAfsvau_TCCKT6IsmlCDzA",
    authDomain: "read-me-31394.firebaseapp.com",
    databaseURL: "https://read-me-31394.firebaseio.com",
    storageBucket: "read-me-31394.appspot.com",
  };
  firebase.initializeApp(config);
  
  const preObject = document.getElementById('object');
  
  const dbRefObject = firebase.database().ref().child('a_simple_m');
  
  dbRefObject.on('value', snap =>  {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });
  
}());
