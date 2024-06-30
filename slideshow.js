document.addEventListener("DOMContentLoaded", function() {
  var slideshow = document.querySelector('.slideshow');
  var images = slideshow.querySelectorAll('img');
  var currentIndex = 0;

  function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }

  function showPreviousImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].style.display = 'block';
  }

  document.getElementById('next').addEventListener('click', showNextImage);
  document.getElementById('previous').addEventListener('click', showPreviousImage);
});
