var cards = document.querySelectorAll('.card');



cards.forEach(card => {

    card.addEventListener( 'click', function() {
        card.classList.toggle('rotation');
      });
});

var index = 1;
displaySlide(index);


var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

next.addEventListener('click', function(){
  index++;
  displaySlide(index);

});

prev.addEventListener('click', function(){
  index--;
  displaySlide(index);
  
});


function displaySlide(n) {
  
  var slides = document.querySelectorAll(".slides");
 
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}

 

  slides.forEach(items => {

    items.style.display = "none";
  })

  
 
  slides[index-1].style.display = "block";  
  
}












