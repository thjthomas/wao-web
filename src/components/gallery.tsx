"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Your team event photos
const galleryImages = [
    { id: 1, src: "/gallery/1.jpeg", alt: "Team Event 1" },
    { id: 2, src: "/gallery/2.JPG", alt: "Team Event 2" },
    { id: 3, src: "/gallery/3.png", alt: "Team Event 3" },
    { id: 4, src: "/gallery/4.png", alt: "Team Event 4" },
    { id: 5, src: "/gallery/5.jpg", alt: "Team Event 5" },
    { id: 6, src: "/gallery/6.jpg", alt: "Team Event 6" },
    { id: 7, src: "/gallery/7.png", alt: "Team Event 7" },
]

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFlipping, setIsFlipping] = useState(false)
    const [flipDirection, setFlipDirection] = useState<"left" | "right">("right")
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
    const sectionRef = useRef<HTMLElement>(null)

    // Auto-flip every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isFlipping && !selectedImage) {
                setFlipDirection("right")
                setIsFlipping(true)

                // Change image at midpoint (300ms) when page is perpendicular
                setTimeout(() => {
                    setCurrentIndex((prev) =>
                        prev >= galleryImages.length - 1 ? 0 : prev + 1
                    )
                }, 300)

                // End animation at 600ms
                setTimeout(() => {
                    setIsFlipping(false)
                }, 600)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [isFlipping, selectedImage])

    const triggerFlip = (direction: "left" | "right") => {
        if (isFlipping) return

        setFlipDirection(direction)
        setIsFlipping(true)

        // Change image at midpoint (300ms) when page is perpendicular
        setTimeout(() => {
            setCurrentIndex((prev) =>
                direction === "right"
                    ? Math.min(prev + 1, galleryImages.length - 1)
                    : Math.max(prev - 1, 0)
            )
        }, 300)

        // End animation at 600ms
        setTimeout(() => {
            setIsFlipping(false)
        }, 600)
    }

    const goToImage = (index: number) => {
        if (index === currentIndex || isFlipping) return
        setFlipDirection(index > currentIndex ? "right" : "left")
        setIsFlipping(true)

        // Change image at midpoint
        setTimeout(() => {
            setCurrentIndex(index)
        }, 300)

        // End animation
        setTimeout(() => {
            setIsFlipping(false)
        }, 600)
    }

    const nextImage = () => {
        if (currentIndex < galleryImages.length - 1) {
            triggerFlip("right")
        }
    }

    const prevImage = () => {
        if (currentIndex > 0) {
            triggerFlip("left")
        }
    }

    return (
        <>
            <section ref={sectionRef} id="gallery" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Moments</h2>
                        <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Capturing the spirit of our team through memorable events and celebrations
                        </p>
                    </div>

                    {/* Book-style gallery container */}
                    <div className="relative perspective-1000 mx-auto" style={{ maxWidth: "700px" }}>
                        {/* Main book display */}
                        <div
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                            onClick={() => setSelectedImage(galleryImages[currentIndex])}
                        >
                            {/* Book shadow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 z-10 pointer-events-none"></div>

                            {/* Current page with flip animation */}
                            <div
                                className={`absolute inset-0 transition-transform duration-600 ease-in-out transform-gpu ${isFlipping
                                    ? flipDirection === "right"
                                        ? "animate-flip-right"
                                        : "animate-flip-left"
                                    : ""
                                    }`}
                                style={{
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden"
                                }}
                            >
                                {/* Main gallery image */}
                                <Image
                                    src={galleryImages[currentIndex].src}
                                    alt={galleryImages[currentIndex].alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 z-10 flex items-center justify-center pointer-events-none">
                                <span className="opacity-0 group-hover:opacity-100 text-white text-sm bg-black/50 px-4 py-2 rounded-full transition-all">
                                    Click to enlarge
                                </span>
                            </div>

                            {/* Navigation arrows - inside image, centered vertically */}
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                disabled={currentIndex === 0 || isFlipping}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all z-30"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                disabled={currentIndex === galleryImages.length - 1 || isFlipping}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all z-30"
                                aria-label="Next image"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Page counter */}
                        <div className="text-center mt-6 text-gray-600 font-medium">
                            <span className="text-2xl font-bold text-black">{currentIndex + 1}</span>
                            <span className="mx-2">/</span>
                            <span>{galleryImages.length}</span>
                        </div>
                    </div>

                    {/* Thumbnail navigation dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToImage(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "bg-black scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail strip */}
                    <div className="mt-8 overflow-x-auto pb-4">
                        <div className="flex gap-3 justify-center min-w-max px-4">
                            {galleryImages.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => goToImage(index)}
                                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${index === currentIndex
                                        ? "ring-2 ring-black ring-offset-2 scale-110"
                                        : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                                        }`}
                                >
                                    {/* Thumbnail image */}
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                        aria-label="Close gallery"
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[85vh] w-full aspect-[4/3]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Full-size lightbox image */}
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Lightbox navigation */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            const currentIdx = galleryImages.findIndex(img => img.id === selectedImage.id)
                            if (currentIdx > 0) {
                                setSelectedImage(galleryImages[currentIdx - 1])
                            }
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            const currentIdx = galleryImages.findIndex(img => img.id === selectedImage.id)
                            if (currentIdx < galleryImages.length - 1) {
                                setSelectedImage(galleryImages[currentIdx + 1])
                            }
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                        aria-label="Next image"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </>
    )
}
