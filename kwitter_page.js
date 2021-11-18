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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) {
     document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
     childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name_1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
line_1="<h4>"+name_1+"<img class='user_tick' src='tick.png'></h4>";
line_2="<h4 class='message_h4'>"+message+"</h4>"
line_3="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
line_4="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button> <hr>";
line_5=line_1+line_2+line_3+line_4;
document.getElementById("output").innerHTML+=line_5;
//End code
 } });  }); }
 getData();
 function updateLike(message_id){
    console.log("clicked on like button:"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_like=Number(likes)+1;
    console.log(updated_like);
    firebase.database().ref(room_name).child(message_id).update({
        like:updated_like
    });
}
function logout() {
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location = "index.html"; 
    }