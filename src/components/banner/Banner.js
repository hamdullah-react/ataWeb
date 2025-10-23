'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  const slides = [
    '/img/slide/1.png',
    '/img/slide/2.png',
    '/img/slide/3.png',
    '/img/slide/5.png',
    '/img/slide/6.png',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
   <>
   <div className=" relative w-full h-[400px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
    {/* Slider Images */}
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={slide}
          alt={`MGSS Security Solutions Slide ${index + 1}`}
          fill
          className="object-contain object-center"
          priority={index === 0}
        />
      </div>
    ))}

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent pointer-events-none"></div>

    {/* Content */}
    <div className="relative h-full w-full px-4 md:px-8 lg:px-12">
      <div className="flex items-center h-full max-w-3xl">
        <div className=" md:mt-0 text-white md:space-y-4">
          {/* Badge */}
          <div className=" inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold mb-2 animate-fade-in">
            <i className="fa fa-shield-alt text-xs"></i>
            <span>Trusted Security Solutions Since 2018</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-slide-up">
            Mohammad Ghulam <span className="text-green-400">Security Solution</span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl animate-slide-up-delay">
            Premium security camera accessories and equipment in Dubai, UAE. Quality products at competitive prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-delay">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 md:px-5 py-2 md:py-2.5 text-sm rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span>View Products</span>
              <i className="fa fa-arrow-right text-xs"></i>
            </Link>
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-4 md:px-5 py-2 md:py-2.5 text-sm rounded-full font-semibold transition-all duration-300 hover:scale-105 no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span>Contact Us</span>
              <i className="fa fa-envelope text-xs"></i>
            </Link>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 md:gap-6 pt-3 text-xs md:text-sm animate-fade-in-delay">
            <div className="flex items-center gap-2">
              <i className="fa fa-check-circle text-green-400"></i>
              <span>100% Quality Assured</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa fa-shipping-fast text-green-400"></i>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa fa-headset text-green-400"></i>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Navigation Arrows */}
    <button
      onClick={prevSlide}
      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
      aria-label="Previous slide"
    >
      <i className="fa fa-chevron-left text-white text-sm"></i>
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
      aria-label="Next slide"
    >
      <i className="fa fa-chevron-right text-white text-sm"></i>
    </button>

    {/* Slide Indicators */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`transition-all duration-300 rounded-full ${
            index === currentSlide
              ? 'w-8 h-2 bg-green-500'
              : 'w-2 h-2 bg-white/50 hover:bg-white/80'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600"></div>
   </div>
   </>
  )
}

export default Banner