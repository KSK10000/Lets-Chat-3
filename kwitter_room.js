
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAZXUiVUWu9VKebwZQaAt3pf85wJ-UNY_E",
    authDomain: "lets-chat-31666.firebaseapp.com",
    databaseURL: "https://lets-chat-31666-default-rtdb.firebaseio.com",
    projectId: "lets-chat-31666",
    storageBucket: "lets-chat-31666.appspot.com",
    messagingSenderId: "899884915094",
    appId: "1:899884915094:web:3033c1057e426499e4e5b7",
    measurementId: "G-8X6KYSRM1R"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location= "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    //Start code

    //End code
    });});}
getData();
function redirectToRoomName(name) { console.log(name); 
    localStorage.setItem("room_name", name); 
    window.location = "kwitter_page.html"; 
}
function logout() {
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location = "index.html"; 
}