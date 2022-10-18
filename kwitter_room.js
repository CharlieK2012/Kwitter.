
var firebase = {
  apiKey: "AIzaSyC-rSv39E4ohmHP0iKpSSqeP-l88dnMnzY",
  authDomain: "kwitter-23318.firebaseapp.com",
  databaseURL: "https://kwitter-23318-default-rtdb.firebaseio.com",
  projectId: "kwitter-23318",
  storageBucket: "kwitter-23318.appspot.com",
  messagingSenderId: "500546491433",
  appId: "1:500546491433:web:c2ff8c1091566ce1f5f838",
  measurementId: "G-XD2CHRTCKG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
