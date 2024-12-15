const rectEl = document.querySelector("#centre");

rectEl.addEventListener("mousemove", (details) => {
  let rectLocation = rectEl.getBoundingClientRect();
  let insideRect = details.clientX - rectLocation.left;

  if (insideRect < rectLocation.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      insideRect
    );
    gsap.to(rectEl, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
        rectLocation.width / 2,
        rectLocation.width,
        0,
        255,
        insideRect
      );
      gsap.to(rectEl, {
        backgroundColor: `rgb(0,0,${blueColor})`,
        ease: Power4,
      });
  }
});

rectEl.addEventListener('moveleave', function(){
    gsap.to(rectEl, {
        
        backgroundColor : "white",
})
})