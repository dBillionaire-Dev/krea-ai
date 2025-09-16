"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "WAN 2.2",
    subtitle: "NEW IMAGE MODEL",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    image: "/futuristic-ai-neural-network-visualization-with-bl.jpg",
    gradient: "from-blue-600/30 to-purple-600/30",
  },
  {
    id: 2,
    title: "Open Source",
    subtitle: "NEW IMAGE MODEL",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Try FLUX1",
    image: "/open-source-code-visualization-with-golden-amber-l.jpg",
    gradient: "from-amber-600/30 to-orange-600/30",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-[420px] overflow-hidden rounded-3xl shadow-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-2xl text-white">
                  <div className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">
                    {slide.subtitle}
                  </div>
                  <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight">{slide.title}</h1>
                  <p className="text-lg text-white/95 mb-8 text-pretty leading-relaxed max-w-xl">{slide.description}</p>
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 hover:bg-black/50 text-white border-0 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 hover:bg-black/50 text-white border-0 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
