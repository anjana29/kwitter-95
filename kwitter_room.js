
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
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
    var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addRoom(){
          var room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name-"+Room_names);
       row="<div class='room_name'id="+Room_names+" onclick='redirect_to_roomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;
      //Start code

      //End code
      });});}
getData();
function redirect_to_roomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
