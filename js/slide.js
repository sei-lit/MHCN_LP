$(document).ready(function () {
  const $slides = $('.slide')
  const totalSlides = $slides.length
  let currentSlide = 0
  let isScrolling = false

  const $dots = $('.dot')

  const updateIndicator = () => {
    $dots.removeClass('active').eq(currentSlide).addClass('active')
  }

  const goToSlide = (index) => {
    $('#slideshow-container').css('transform', `translateY(-${index * 100}vh)`)
    currentSlide = index
    updateIndicator()
  }

  const nextSlide = () => {
    if (currentSlide + 1 < totalSlides) {
      goToSlide(currentSlide + 1)
    } else {
      goToSlide(0) // Loop back to the first slide
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    } else {
      goToSlide(totalSlides - 1) // Loop back to the last slide
    }
  }

  const handleScroll = (event) => {
    if (!isScrolling) {
      if (event.originalEvent.deltaY < -1) {
        prevSlide() // Scroll up
      } else if (event.originalEvent.deltaY > 1) {
        nextSlide() // Scroll down
      }
      isScrolling = true
      setTimeout(() => {
        isScrolling = false
      }, 1000) // Prevent too fast scrolling
    }
  }

  $(window).on('wheel', handleScroll)

  // Optional: handle arrow keys for navigation
  $(document).on('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      prevSlide()
    } else if (event.key === 'ArrowDown') {
      nextSlide()
    }
  })

  $dots.on('click', function () {
    const index = $(this).data('index')
    goToSlide(index)
  })

  updateIndicator()
})
