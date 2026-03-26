
const mysym = Symbol("Mykey")
const jsUser ={
    name:"Riya",
    email:"riya@gmail.com",
    age:5,
    isloggedin:false,
    [mysym] : "Mykey"  // square brackets  means when i fetch the object then it shows its type for eg symbol



}
// console.log(jsUser.email)
// // console.log(jsUser[name])  //shows error
// console.log(jsUser["name"])
// console.log(jsUser.mysym)
//  console.log(typeof (mysym))
// Object.freeze(jsUser) 
// jsUser.email = "shreys.." //no change will be occur after using object freeze method
// console.log(jsUser)
jsUser.greeting = function(){
    console.log("hello");
}
jsUser.greetingtwo = function(){
    console.log(`my name is ${this.name}`)
}
// console.log(jsUser.greeting())
// console.log(jsUser.greeting)  //if i am not using square brackets then it will print the reference of object
console.log(jsUser.greetingtwo())
