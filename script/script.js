const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});
srLeft.reveal(".main-img", { delay: 100 });
srLeft.reveal(".top-icon", { delay: 100 });
// srLeft.reveal(".sec2 .container .row .col-am", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});
srRight.reveal(".skill-bar", { delay: 100 });

// Show more images when "Read More" button is clicked
document.getElementById('readMoreBtn').addEventListener('click', function () {
    document.querySelector('.more-images').style.display = 'flex';
    this.style.display = 'none'; // Hide the "Read More" button after clicking
});

// Image popup modal functionality
var imageModal = document.getElementById('imageModal');
imageModal.addEventListener('show.bs.modal', function (event) {
    var image = event.relatedTarget;
    var imgSrc = image.getAttribute('data-bs-img');
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imgSrc;
});

// testimonial
const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();

    var scrollPosition = 0;

    $(".carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
            console.log("next");
            scrollPosition = scrollPosition + cardWidth;
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        }
    });
    $(".carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition = scrollPosition - cardWidth;
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        }
    });
} else {
    $(multipleItemCarousel).addClass("slide");
}
