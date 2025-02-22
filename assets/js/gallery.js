// Initialize variables
let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container img');

// Function to open the gallery with specific image
function openGallery(index) {
  currentImageIndex = index;
  document.getElementById('galleryModal').style.display = 'block';
  document.getElementById('galleryImage').src = images[currentImageIndex].src;
}

// Function to navigate to the previous image
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById('galleryImage').src = images[currentImageIndex].src;
}

// Function to navigate to the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentImageIndex].src;
}

// Function to close the gallery
function closeGallery() {
  document.getElementById('galleryModal').style.display = 'none';
}



// For Choose gallery in cottage


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  //   let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


function selectImage(imageIndex) {
  const container = document.getElementById('ChooseImage');
  const imageDivs = container.querySelectorAll('.ImageDiv');
  const selectedImage = imageDivs[imageIndex - 1]; // Arrays are 0-indexed

  // Scroll to center the selected image
  const scrollLeft = selectedImage.offsetLeft - (container.offsetWidth - selectedImage.offsetWidth) / 2;
  container.scrollLeft = scrollLeft;
}

