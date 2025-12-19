import React from "react";
import Hero from "../sections/Hero";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Layout = () => {
  useGSAP(() => {
    const splitTitle = SplitText.create(".title", {
      type: "chars",
    });

    const splitParag = SplitText.create(".parag", {
      type: "chars, words, lines",
    });

    const tl = gsap.timeline();

    {
      /* Navbar animation */
    }
    tl.fromTo(
      ".link",
      { opacity: 0, yPercent: -100 },
      { opacity: 1, yPercent: 0, duration: 0.8, ease: "power2.inOut" }
    );
    {
      /* Title animation */
    }

    tl.fromTo(
      splitTitle.chars,
      { opacity: 0, y: "random([-200, 200])" },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.inOut",
        stagger: { amount: 0.6, from: "random" },
      }
    );

    {
      /* Icon / tittle */
    }

    tl.fromTo(".icon", { opacity: 0 }, { opacity: 1, duration: 0.5 });

    {
      /* Paragraph animation */
    }

    tl.fromTo(
      splitParag.chars,
      { opacity: 0, y: "random([-80, 80])" },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: { amount: 0.6, from: "random" },
      }
    );

    {
      /* Btns */
    }

    tl.fromTo(
      ".btn",
      { opacity: 0, yPercent: 100 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.7,
      }
    );

    tl.fromTo(
      ".tools",
      { opacity: 0 },
      { opacity: 1, duration: 0.7, stagger: 0.3, ease: "expo.in" }
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
