import React from "react";
import Hero from "../sections/Hero";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import gsap from "gsap";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".link",
      { opacity: 0, y: -300 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: {
          amount: 0.8,
          from: "random",
        },
        ease: "power3.inOut",
      }
    );

    tl.fromTo(
      ".title",
      { opacity: 0 },
      { opacity: 1, duration: 1.3, ease: "power2.inOut" }
    );

    tl.fromTo(
      ".parag",

      {
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1.2,
        ease: "power2.inOut",
      }
    );

    tl.fromTo(
      ".btn",
      {
        opacity: 0,
        yPercent: -50,
      },

      {
        opacity: 1,
        yPercent: 0,
        ease: "power2.inOut",
        duration: 1.1,
      }
    );

    tl.fromTo(
      ".tools",

      { opacity: 0 },
      { opacity: 1, ease: "expo.in", duration: 0.7, stagger: 0.4 }
    );
  }, []);
  return (
    <div>
      <Hero />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
