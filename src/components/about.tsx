import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Tasin&apos;s E-Commerce Web
        </p>

        <AnimatedTitle containerClass="mt-5 !text-black text-center">
          {
            "Buil<b>d</b>ing premium <br /> digital shopping experiences"
          }
        </AnimatedTitle>

        <div className="about-subtext">
          <p>Crafted by Tasin Rahman, Frontend Web Developer</p>
          <p>Based in Dhaka, Bangladesh with 2 years of frontend experience</p>
          <p>Available for freelance and full-time opportunities</p>
          <p>HSC Candidate at Creative IT Institute</p>
          <p>Focused on frontend development and learning Node.js for full-stack growth</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about.webp"
            alt="Background"
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
