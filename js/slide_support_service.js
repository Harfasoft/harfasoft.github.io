    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    }
    setInterval(nextSlide, 5000);