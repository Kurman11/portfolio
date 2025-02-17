gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");

const section02Animation = () => {
  let ql = gsap.timeline({
    scrollTrigger: {
      trigger: ".section02",
      start: "top 100%",
      end: "90% 100%",
      scrub: 2,
      markers: false,
    },
  });

  ql.fromTo(".python", { y: "0%" }, { x: "450%", y: "0" }, 1.2);
  ql.fromTo(".css", { y: "0%" }, { x: "-550%", y: "-350%" }, 1.4);
  ql.fromTo(".django", { y: "0%" }, { x: "-500%", y: "450%" }, 1.6);
  ql.fromTo(".figma", { y: "0%" }, { x: "-750%", y: "-200%" }, 1.8);
  ql.fromTo(".github", { y: "0%" }, { x: "750%", y: "300%" }, 2.0);
  ql.fromTo(".html", { y: "0%" }, { x: "650%", y: "-300%" }, 2.2);
  ql.fromTo(".js", { y: "0%" }, { x: "750%", y: "150%" }, 2.4);
  ql.fromTo(".react", { y: "0%" }, { x: "-785%", y: "250%" }, 2.6);
  ql.fromTo(".tailwind", { y: "0%" }, { x: "0%", y: "-480%" }, 2.8);
  ql.fromTo(".discord", { y: "0%" }, { x: "-700%", y: "0%" }, 3);
  ql.fromTo(".gitlab", { y: "0%" }, { x: "700%", y: "-400%" }, 3.2);
  ql.fromTo(".aws", { y: "0%" }, { x: "450%", y: "550%" }, 3.4);
  ql.fromTo(".section02 div.section-card", { y: "400%" }, { y: "0" }, 3.6);
};

section02Animation();

const section02TabletAnimation = () => {
  ScrollTrigger.matchMedia({
    "(max-width: 1280px)": function () {
      let ql = gsap.timeline({
        scrollTrigger: {
          trigger: ".section02",
          start: "top 100%",
          end: "90% 100%",
          scrub: 2,
          markers: false,
        },
      });

      ql.fromTo(".python", { y: "0%" }, { x: "350%", y: "400%" }, 1.2);
      ql.fromTo(".css", { y: "0%" }, { x: "-250%", y: "-350%" }, 1.4);
      ql.fromTo(".django", { y: "0%" }, { x: "-200%", y: "450%" }, 1.6);
      ql.fromTo(".figma", { y: "0%" }, { x: "-450%", y: "-200%" }, 1.8);
      ql.fromTo(".github", { y: "0%" }, { x: "450%", y: "300%" }, 2.0);
      ql.fromTo(".html", { y: "0%" }, { x: "350%", y: "-300%" }, 2.2);
      ql.fromTo(".js", { y: "0%" }, { x: "450%", y: "150%" }, 2.4);
      ql.fromTo(".react", { y: "0%" }, { x: "-405%", y: "250%" }, 2.6);
      ql.fromTo(".tailwind", { y: "0%" }, { x: "0%", y: "-480%" }, 2.8);
      ql.fromTo(".discord", { y: "0%" }, { x: "-400%", y: "0%" }, 3);
      ql.fromTo(".gitlab", { y: "0%" }, { x: "400%", y: "-400%" }, 3.2);
      ql.fromTo(".aws", { y: "0%" }, { x: "150%", y: "350%" }, 3.4);
      ql.fromTo(".section02 div.section-card", { y: "400%" }, { y: "0" }, 3.6);
    },
  });
};
section02TabletAnimation();

const section02MobileAnimation = () => {
  ScrollTrigger.matchMedia({
    "(max-width: 767px)": function () {
      let ql = gsap.timeline({
        scrollTrigger: {
          trigger: ".section02",
          start: "top 100%",
          end: "90% 100%",
          scrub: 2,
          markers: false,
        },
      });

      ql.fromTo(".python", { y: "0%" }, { x: "150%", y: "400%" }, 1.2);
      ql.fromTo(".css", { y: "0%" }, { x: "-250%", y: "-350%" }, 1.4);
      ql.fromTo(".django", { y: "0%" }, { x: "-200%", y: "450%" }, 1.6);
      ql.fromTo(".figma", { y: "0%" }, { x: "-450%", y: "-200%" }, 1.8);
      ql.fromTo(".github", { y: "0%" }, { x: "450%", y: "300%" }, 2.0);
      ql.fromTo(".html", { y: "0%" }, { x: "350%", y: "-300%" }, 2.2);
      ql.fromTo(".js", { y: "0%" }, { x: "450%", y: "150%" }, 2.4);
      ql.fromTo(".react", { y: "0%" }, { x: "-405%", y: "250%" }, 2.6);
      ql.fromTo(".tailwind", { y: "0%" }, { x: "0%", y: "-480%" }, 2.8);
      ql.fromTo(".discord", { y: "0%" }, { x: "-400%", y: "0%" }, 3);
      ql.fromTo(".gitlab", { y: "0%" }, { x: "400%", y: "-400%" }, 3.2);
      ql.fromTo(".aws", { y: "0%" }, { x: "150%", y: "550%" }, 3.4);
      ql.fromTo(".section02 div.section-card", { y: "400%" }, { y: "0" }, 3.6);
    },
  });
};
section02MobileAnimation();

// const section03Animation = () => {
//   const slidesContainer = document.querySelector("#projectWrapper");
//   if (!slidesContainer) return;

//   const slides = gsap.utils.toArray("#projectWrapper .project");
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#projectWrapper",
//       pin: true,
//       start: "top top",
//       scrub: 1,
//       end: () => "+=" + (slidesContainer.scrollWidth - window.innerWidth),
//       invalidateOnRefresh: false,
//       onUpdate: (self) => {
//         let closestSection = slides.reduce(
//           (closest, section) => {
//             let rect = section.getBoundingClientRect();
//             let offset = Math.abs(rect.left);
//             return offset < Math.abs(closest.offset)
//               ? { section, offset }
//               : closest;
//           },
//           { section: slides[0], offset: Infinity }
//         ).section;

//         let activeId = closestSection.id;

//         document.querySelectorAll(".project-list-btn").forEach((btn) => {
//           btn.classList.toggle(
//             "active",
//             btn.getAttribute("href") === `#${activeId}`
//           );
//         });
//       },
//     },
//   });

//   tl.to(slides, {
//     x: () => -1 * (slidesContainer.scrollWidth - window.innerWidth),
//     ease: "none",
//   });

//   const scrollToTarget = (href) => {
//     let targetEle = document.querySelector(href);
//     if (!targetEle) return;

//     let y = targetEle;
//     if (slidesContainer.isSameNode(targetEle.parentElement)) {
//       const totalScroll = tl.scrollTrigger.end - tl.scrollTrigger.start;
//       const totalMovement = slidesContainer.scrollWidth - window.innerWidth;

//       y = Math.round(
//         tl.scrollTrigger.start +
//           (targetEle.offsetLeft / totalMovement) * totalScroll
//       );
//     }

//     gsap.to(window, {
//       scrollTo: {
//         y: y,
//         autoKill: false,
//       },
//       duration: 0.2,
//     });
//   };

//   document.querySelectorAll(".project-list-btn").forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       document.querySelectorAll(".project-list-btn").forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       e.target.classList.add("active");
//       scrollToTarget(e.target.getAttribute("href"));
//     });
//   });
// };

// section03Animation();

const section03Slide = () => {
  let list = gsap.utils.toArray(".section03 .list > li");

  gsap.to(list, {
    xPercent: -100 * (list.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".section03",
      pin: true,
      pinType: "transform",
      scrub: 1,
      start: "center center",
      end: "100%",
      markers: false,
    },
  });
};

section03Slide();
