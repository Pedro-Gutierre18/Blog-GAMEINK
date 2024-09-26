document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const textSlides = document.querySelectorAll('.slide-text');
    const navItems = document.querySelectorAll('.slider-nav-item');
    let currentIndex = 0;
    let sliderInterval;

    let startX = 0;
    let endX = 0;

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        updateNavItems();
        updateTextSlide();
    }

    function updateNavItems() {
        navItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }

    function updateTextSlide() {
        textSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }

    function startAutoSlider() {
        sliderInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlider() {
        clearInterval(sliderInterval);
    }

    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(index);
            stopAutoSlider();
            startAutoSlider();
        });
    });

    slider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        stopAutoSlider();
    });

    slider.addEventListener('touchmove', function(e) {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', function() {
        const diffX = startX - endX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        startAutoSlider();
    });

    slider.addEventListener('mouseenter', stopAutoSlider);
    slider.addEventListener('mouseleave', startAutoSlider);

    updateNavItems();
    updateTextSlide();
    startAutoSlider();
});