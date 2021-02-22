//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBzISVghTbV43jVlWTEHo_NYLJFq0sLEZ4",
      authDomain: "quitter-109d9.firebaseapp.com",
      databaseURL: "https://quitter-109d9-default-rtdb.firebaseio.com",
      projectId: "quitter-109d9",
      storageBucket: "quitter-109d9.appspot.com",
      messagingSenderId: "674629403922",
      appId: "1:674629403922:web:567135be0394357be7dfcb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

document.getElementById("msg").value="";

    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
