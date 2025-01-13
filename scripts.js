document.addEventListener("DOMContentLoaded", () => {
    const imagesContainer = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");

    let currentIndex = 0; 
    const totalImages = images.length;

    
    imagesContainer.style.width = `${100 * totalImages}%`;

   
    function updateCarousel() {
        const offset = -currentIndex * (100 / totalImages);
        imagesContainer.style.transform = `translateX(${offset}%)`;
    }

    
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
        updateCarousel();
    });

    
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalImages; 
        updateCarousel();
    });


    const autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 5000); 

  
    [prevButton, nextButton].forEach((btn) =>
        btn.addEventListener("click", () => clearInterval(autoplayInterval))
    );
});
