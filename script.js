const size = { width: 600, height: 250 },
  rotateIn = { fontSize: "1rem", rotation: 45, opacity: 0 },
  finalSlide = document.querySelector(".s3sq1"),
  finalSlideText = "Hello my name is Holly Fig".split(""),
  textSelect = document.querySelector(".s3sq1").children;

let spanArray = [];

for (let i = 0; i < finalSlideText.length; i++) {
  const span = document.createElement("span");
  span.classList.add(`FinalSlideText${i}`);
  span.textContent = finalSlideText[i];
  finalSlide.appendChild(span);
  spanArray.push(span);
}

// spanArray.forEach((e) => {
//   gsap.from(
//     `.${e.className}`,
//     { opacity: 0, delay: 0, duration: 0.2, y: 20 },
//     "<.1"
//   );
// })

let timeline1 = () => {
  let tl = gsap
    .timeline({
      defaults: {
        delay: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      onComplete: () => console.log("complete"),
    })
    .from(".sq1", { y: size.height * -1, delay: 2 })
    .from(".sq2", { y: size.height * -1 }, "<.3")
    .from(".sq3", { y: size.height * -1 }, "<.3")
    .from(".sq1 h2", rotateIn, "<")
    .from(".sq1 .material-symbols-outlined", rotateIn, "<.2")
    .from(".sq2 h2", rotateIn, "<")
    .from(".sq2 .material-symbols-outlined", rotateIn, "<.2")
    .from(".sq3 h2", rotateIn, "<")
    .from(".sq3 .material-symbols-outlined", rotateIn, "<.2")
    .to(".slide2", { y: size.height * -1, duration: 0.8, delay: 2.5 }, "<")
    .from(".s2sq1", { x: size.width, duration: 0.8 }, "<.5")
    .from(".s2sq2", { x: size.width, duration: 0.8 }, "<.2")
    .from(".s2sq3", { x: size.width, duration: 0.8 }, "<.2")
    .to(".slide1 > div > div", { opacity: 0 })
    .to(".s2sq1b", { x: -200, duration: 0.8, delay: 2 })
    .to(".s2sq2b", { x: -200, duration: 0.8 }, "<.2")
    .to(".s2sq3b", { x: -200, duration: 0.8 }, "<.2")
    .to(".s2sq1, .s2sq3", { delay: 3, y: size.height })
    .to(".s2sq2", { y: size.height * -1 }, "<")
    .to(".sq1, .sq3", { y: size.height }, "<.2")
    .to(".sq2", { y: size.height * -1 }, "<");
  return tl;
};

let master = gsap.timeline().add(timeline1());
