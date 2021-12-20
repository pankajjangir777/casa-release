const myEditableElement = document.getElementById('releaseDate')
console.log("myEditableElement--", myEditableElement)

myEditableElement.addEventListener('input', function () {
  console.log(myEditableElement.innerHTML);
})

// function saveEdits() {
//   const myEditableElement = document.getElementById('releaseDate')
//   console.log("myEditableElement--->>",myEditableElement)
// }

// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username : "rahulsharrrmaa@gmail.com",
//     Password : "windows@7",
//     To : 'pankajjangir17@gmail.com',
//     From : "rahulsharrrmaa@gmail.com",
//     Subject : "testing",
//     Body : "testing",
//   })
//   .then(function(message){
//     alert("mail sent successfully")
//   });
// }