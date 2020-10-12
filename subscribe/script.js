var firebaseConfig = {
    apiKey: "AIzaSyDnigvvmgx6J8iPgJRN5mdZUYOBi-CAx6Y",
    authDomain: "stuffsareamazing.firebaseapp.com",
    databaseURL: "https://stuffsareamazing.firebaseio.com",
    projectId: "stuffsareamazing",
    storageBucket: "stuffsareamazing.appspot.com",
    messagingSenderId: "292822642224",
    appId: "1:292822642224:web:107036a142cd1697afc7f5"
  };
firebase.initializeApp(firebaseConfig);;

firebase.database().ref('/text').on('value', snap => {
    document.getElementById('data').innerText = snap.val();
})
