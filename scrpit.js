window.addEventListener("scroll", function() {
      let scrollPosition = window.scrollY;
      let parallaxContainer = document.getElementById("parallax-container");
      let slideHeight = window.innerHeight;
      let currentSlide = Math.floor(scrollPosition / slideHeight) + 1;
      parallaxContainer.style.backgroundColor = getSlideColor(currentSlide);
    });

    function getSlideColor(slideNumber) {
      switch (slideNumber) {
        case 1:
          return "var(--verde)";
        case 2:
          return "var(--laranja)";
        case 3:
          return "var(--roxo)";
        case 4:
          return "var(--azul)";
        case 5:
          return "var(--verde-escuro)";
        case 6:
          return "var(--verde)";
        case 7:
          return "var(--laranja)";
        case 8:
          return "var(--roxo)";
        case 9:
          return "var(--azul";
        case 10:
          return "var(--verde-escuro";
        case 11:
          return "var(--verde)";
        case 12:
          return "var(--laranja)";
        default:
          return "var(--verde)";
      }
    }