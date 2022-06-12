// //Q. In how many ways can we loop in an array describe each with an example ?

// Traversal in array✌ 

var myFriends = ['vinod','ramesh','arjun','vishal'];

for(let elements in myFriends){
  console.log(elements);
}

// for(let elements of myFriends){
//   console.log(elements);
// }

// we use for loop to navigate 

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }

// ________________________________________________
// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });