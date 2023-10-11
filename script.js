const size = { width: 600, height: 250 },
  rotateIn = { fontSize: "1rem", rotation: 45, opacity: 0 },
  thirdSlide = document.querySelector(".s3sq1"),
  thirdSlideText = "I like to eat cheese".split("");

let spanArray = [];

for (let i = 0; i < thirdSlideText.length; i++) {
  const span = document.createElement("span");
  span.classList.add(`thirdSlideText${i}`);
  thirdSlideText[i] === " "
    ? (span.textContent = "\u00A0")
    : (span.textContent = thirdSlideText[i]);
  thirdSlide.appendChild(span);
  spanArray.push(span);
}

const setFunc = (a) => {
  let int1 = 50,
    int2 = 75;
  a.forEach((e, index) => {
    setTimeout(() => {
      gsap.to(`.${e.className}`, {
        opacity: 1,
        delay: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });
    }, index * int1);
    setTimeout(() => {
      gsap.to(`.${e.className}`, {
        color: "#0DBBDE",
      });
    }, index * int2);
  });
};

let timeline = gsap.timeline({
  defaults: {
    delay: 0,
    duration: 0.6,
    ease: "power2.inOut",
  },
});

timeline
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
  .to(".sq2", { y: size.height * -1 }, "<")
  .add(() => setFunc(spanArray))
  .to(".slide3", { backgroundColor: "#0dbbde" }, ">2")
  .to(".s3sq1 span", { color: "#fff" }, "<");
