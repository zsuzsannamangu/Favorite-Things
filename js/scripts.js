// $(document).ready(function() {
//   $("button").click(function(event){
//
//     var blanks = ["movie", "book", "animal", "color"];
//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       $("." + blank).text(userInput);
//     });
//
//     $(".answer").show();
//
//     event.preventDefault();
//   });
//
//   var flavors = ['strawberry', 'vanilla', 'chocolate'];
//   flavors.forEach(function(flavor) {
//     $('.flavors').append('<p>' + flavor + '</p>');
//   });
//
//
// });

$(document).ready(function() {
  $("button").click(function(event){

    var blanks = ["movie", "book", "animal", "color"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
       $('.flavors').append('<p>' + userInput + '</p>');
    });

    event.preventDefault();
  });
});



// var movieInput = $("input#movie").val();
// var bookInput = $("input#book").val();
// var animalInput = $("input#animal").val();
// var colorInput = $("input#color").val();
//
// var formInput = $("input#form, ").val();
//
// $(".movie").text(movieInput);
// $(".book").text(bookInput);
// $(".animal").text(animalInput);
// $(".color").text(colorInput);
