const tl = gsap.timeline();

tl.fromTo(
  '.track1',
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 110,
    opacity: 1,
    duration: 1,
  }
);

tl.fromTo(
  '.wave',
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 110,
    opacity: 1,
    duration: 2.1,
  }
);
