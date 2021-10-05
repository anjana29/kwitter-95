//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDl-Jy8oOXqIKVHWr5_SKjt0dwi_jxyAcY",
      authDomain: "class-94-8f3b8.firebaseapp.com",
      databaseURL: "https://class-94-8f3b8-default-rtdb.firebaseio.com",
      projectId: "class-94-8f3b8",
      storageBucket: "class-94-8f3b8.appspot.com",
      messagingSenderId: "1097584527598",
      appId: "1:1097584527598:web:24f972619cec081be9cbff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          var msg=document.getElementById("msg").value;
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
console.log(firebase_message_id);
console.log(message_data);
var name=message_data['name'];
var message=message_data['message'];
var like=message_data['like'];
var name_with_tag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
var message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
var like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
var span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
var row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updatelike(message_id){
console.log("clicked on like button:"+message_id);
var button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });

}
function logout() { 
localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
  window.location.replace("index.html"); 
}
