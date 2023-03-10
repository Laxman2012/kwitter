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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "h4"+ name +"<img class='user_tick' src='tick.png'</h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button = "<button class='btn btn-warning' id=>"+ firebase_message_id +"value="+ like + "onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like"+ like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row; 
//End code
      } });  }); }
getData();

  user=localStorage.getItem("user_name");
  room=localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;

firebase.database().ref(room).push({
   name:user,
   like:0,
   message:msg
});
document.getElementById("msg").value="";
}

function updateLike(message_id)
{

console.log("clicked on like button-" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes)+1;
console.log(update_likes);

firebase.database().ref(room_name).child(message_id).update({
  like :update_likes
});

}

function logout()
{
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
  window.location="index.html";

}