"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Glow Naturally,\nEvery Day",
    subtitle: "Skincare that loves you back",
    description: "Discover clean, effective, and gentle\nproduct for healthy, glowing skin",
    image: "/3e3bdd551e4b0d8f68a83213dfda5c8194604ca7.png",
    buttonText: "SHOP NOW",
    buttonLink: "/shop",
    align: "left",
    colorTheme: "dark"
  },
  {
    image: "/glow-header.jpg"
  },
  {
    title: "Pure Botanical\nElegance For You",
    subtitle: "Embrace your natural glow with our 100% organic collection",
    description: "Nourish your skin with our finest selection of active ingredients.\nCarefully crafted by dermatologists to rejuvenate, hydrate, and\nprotect your skin all day long. Discover the secret to a flawless\ncomplexion and experience true, lasting radiance.",
    image: "/banner-3.jpg",
    buttonText: "SHOP COLLECTION",
    buttonLink: "/shop",
    align: "right",
    colorTheme: "light"
  }
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full flex flex-col">
      {/* Carousel */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-50">
        {slides.map((slide, index) => {
          // Determine visibility based on mobile (only index 0) and desktop (currentSlide)
          const mobileClasses = index === 0 ? "flex opacity-100 z-10" : "hidden opacity-0 z-0";
          const desktopClasses = index === currentSlide 
            ? "md:flex md:opacity-100 md:z-10 md:pointer-events-auto" 
            : "md:opacity-0 md:z-0 md:pointer-events-none";

          return (
            <section
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center items-center transition-opacity duration-[2000ms] ease-in-out ${mobileClasses} ${desktopClasses}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
            <div className={`max-w-7xl mx-auto px-6 w-full h-full flex items-center ${slide.align === 'right' ? 'justify-end' : 'justify-start'}`}>
              {(slide.title || slide.subtitle || slide.description || slide.buttonText) && (
                <div className={`max-w-xl space-y-5 ${slide.align === 'right' ? 'text-right' : 'text-left'}`}>
                  {slide.title && (
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] whitespace-pre-line ${slide.colorTheme === 'light' ? 'text-white' : 'text-gray-900'}`}>
                      {slide.title}
                    </h1>
                  )}
                  {slide.subtitle && (
                    <h2 className={`text-lg md:text-xl font-medium tracking-wide ${slide.colorTheme === 'light' ? 'text-blue-100' : 'text-[#3252A2]'}`}>
                      {slide.subtitle}
                    </h2>
                  )}
                  {slide.description && (
                    <p className={`text-base md:text-lg max-w-md leading-snug whitespace-pre-line ${slide.colorTheme === 'light' ? 'text-gray-100' : 'text-gray-800'} ${slide.align === 'right' ? 'ml-auto' : ''}`}>
                      {slide.description}
                    </p>
                  )}
                  {slide.buttonText && slide.buttonLink && (
                    <div className="pt-4">
                      <Link href={slide.buttonLink} className={`inline-block hover:bg-blue-800 font-medium px-8 py-3 rounded-full transition-colors text-sm md:text-base shadow-sm ${slide.colorTheme === 'light' ? 'bg-white text-[#3252A2] hover:bg-gray-100' : 'bg-[#3252A2] text-white'}`}>
                        {slide.buttonText}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
          );
        })}
      </div>

      {/* Bottom Features Bar with Carousel Dots */}
      <div className="w-full bg-[#78B3CD] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative text-sm font-medium text-black">

          {/* Features */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-12 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              <span>Clean ingredients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              <span>Dermatologist Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              <span>Cruelty Free Tested</span>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="hidden md:flex items-center gap-2 mt-4 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#3252A2] w-4" : "bg-white hover:bg-gray-200"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
