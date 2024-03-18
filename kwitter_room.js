
//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyCMVGGllAoBoroy-iPA5cjU3Uts21H8zGI",
      authDomain: "pruebaclace.firebaseapp.com",
      projectId: "pruebaclace",
      storageBucket: "pruebaclace.appspot.com",
      messagingSenderId: "313172070254",
      appId: "1:313172070254:web:d5a1bca4cab77811013b7f"
    };
    
    // Initialize Firebase
   // const app = initializeApp(firebaseConfig);

firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
