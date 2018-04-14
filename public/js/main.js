
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 80});   

  // Add smooth scrolling on all links inside the navbar
  $("#logo").on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $("#navbar a").on('click', function(event) {
    //console.log("Clicked on nav bar");
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var navOffset = $('#navbar').height();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navOffset
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    }  // End if
  });
});