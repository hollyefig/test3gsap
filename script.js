const size = { width: 600, height: 250 },
  rotateIn = { fontSize: "1rem", rotation: 45, opacity: 0 },
  thirdSlide = document.querySelector(".s3sq1"),
  thirdSlideText = "I always choose Charmander!".split("");

for (let i = 0; i < thirdSlideText.length; i++) {
  const span = document.createElement("span");
  span.classList.add(`thirdSlideText${i}`);
  thirdSlideText[i] === " "
    ? (span.textContent = "\u00A0")
    : (span.textContent = thirdSlideText[i]);
  thirdSlide.appendChild(span);
}

let timeline = gsap.timeline({
  defaults: {
    delay: 0,
    duration: 0.6,
    ease: "power2.inOut",
  },
});

timeline
  .from(".slide1 > div", { y: size.height * -1, stagger: 0.3, delay: 1 })
  .from(".sq1 h2", rotateIn, "<.5")
  .from(".sq1 .material-symbols-outlined", rotateIn, "<.2")
  .from(".sq2 h2", rotateIn, "<")
  .from(".sq2 .material-symbols-outlined", rotateIn, "<.2")
  .from(".sq3 h2", rotateIn, "<")
  .from(".sq3 .material-symbols-outlined", rotateIn, "<.2")
  .to(".slide2", { duration: 0.8, delay: 2.5 }, "<")
  .from(".slide2 > div", { x: size.width, duration: 0.8, stagger: 0.2 }, "<.5")
  .to(".slide1 > div > div", { opacity: 0 })
  .to(".s2sq1b, .s2sq2b, .s2sq3b", {
    x: -200,
    duration: 0.8,
    delay: 2,
    stagger: 0.2,
  })
  .to(".s2sq1, .s2sq3", { delay: 3, y: size.height })
  .to(".s2sq2", { y: size.height * -1 }, "<")
  .to(".sq1, .sq3", { y: size.height }, "<.2")
  .to(".sq2", { y: size.height * -1 }, "<")
  .to(".s3sq1 span", {
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
    stagger: 0.05,
  })
  .to(
    ".s3sq1 span",
    {
      color: "#0DBBDE",
      duration: 0.2,
      stagger: 0.05,
    },
    "<.5"
  )
  .to(".slide3", { backgroundColor: "#0dbbde" })
  .to(".s3sq1 span", { color: "#fff" }, "<");
