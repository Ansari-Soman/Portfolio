import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import { WavyBackground } from "./components/WavyBackground";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,
    });
  }, []);

  // {---------------------_-----------------------}
  const lenis = new Lenis({
    duration: 1.2, // Scroll duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smooth transitions
    direction: "vertical", // Scroll direction: vertical or horizontal
    gestureDirection: "vertical", // Gesture direction: vertical, horizontal, or both
    smooth: true, // Enable smooth scrolling
    mouseMultiplier: 1, // Mouse scroll speed multiplier
    smoothTouch: false, // Disable smooth scrolling for touch devices
    touchMultiplier: 2, // Touch scroll speed multiplier
    infinite: false, // Disable infinite scroll
  });

  // Optional: Listen to scroll events
  lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {});

  // Animation frame loop function
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // {------------------------++++++-----------------------}
  return (
    <>
      <Navbar />
      <WavyBackground>
        <Header />
      </WavyBackground>
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
