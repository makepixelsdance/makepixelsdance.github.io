
var options = {
	slidesToScroll: 2.5,
	slidesToShow: 3.5,
	loop: true,
	infinite: true,
	autoplay: false,
	autoplaySpeed: 5000,
}
var carousels = bulmaCarousel.attach('.custom-slider', options);

var options2 = {
	slidesToScroll: 2.5,
	slidesToShow: 3,
	loop: true,
	infinite: true,
	autoplay: false,
	autoplaySpeed: 5000,
}
var carousels = bulmaCarousel.attach('.custom-slider2', options2);

document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});

window.onload = function() {
    var videos = document.getElementsByTagName("video");

    for (let i = 0; i < videos.length; i++) {
        for (let i = 0; i < videos.length; i++) {
            videos[i].addEventListener("ended", function () {
                setTimeout(() => {
                    this.currentTime = 0; // Reset video time to the start
                    this.play(); // Play the video
                }, 800); 
            });
        }
    }

};

function showOverlay() {
    var xbox = document.getElementById('xbox');
    var overlay = document.getElementById('overlay');
    var rect = xbox.getBoundingClientRect();
    overlay.style.top = (window.scrollY + rect.bottom) + 'px'; // Position the overlay at the bottom of xbox
    overlay.classList.add('active');
    setTimeout(function() {
        overlay.classList.remove('active');
    }, 5000); // The overlay will disappear after 5 seconds
}