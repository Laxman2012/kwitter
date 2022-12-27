
const firebaseConfig = {
      apiKey: "AIzaSyCdm0GqoGJtuDZeZzD8dA3dfs__pQ4qR90",
      authDomain: "kwitter-ea037.firebaseapp.com",
      databaseURL: "https://kwitter-ea037-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea037",
      storageBucket: "kwitter-ea037.appspot.com",
      messagingSenderId: "806365862325",
      appId: "1:806365862325:web:188023f55cf1db3606a1fc"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
              console.log("Room Name -"+Room_names);
              row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name()'># "+ Room_names +"</div><hr></hr>";
              document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom()
{

Room_names = document.getElementById("room_names").value;
 firebase.database().ref("/").child(Room_names).update({
      purpose :"adding new room"
 });
 localStorage.setItem("room_name" , Room_names);
 window.location ="kwitter_page.html";
}

function redirect_to_room_name(name)
{

    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="kwitter_page.html";
}

User_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+User_name+"!";

function logout()
{
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
  window.location="index.html";

}