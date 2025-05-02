import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface HeroSectionProps {
  images?: string[];
  title?: string;
  tagline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  images = [
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
    "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80",
    "https://images.unsplash.com/photo-1510523741862-5971084c9770?w=1200&q=80",
  ],
  title = "Mad Hatter Pub",
  tagline = "Montreal's Ultimate Nightlife Destination",
  ctaText = "Explore Our Pub",
  onCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[800px] bg-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 opacity-20"
          animate={{
            rotate: 360,
            y: [0, 50, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 w-20 h-20 opacity-20"
          animate={{
            rotate: -360,
            x: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 opacity-20"
          animate={{
            rotate: 180,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M21.17 2.06 19 0v1.93L12.92 8H9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4h1l2 2h4v-2l-2-2 2-2V8h-4l-2 2h-1V8l6.08-6.07V3.83L21.17 2.06zM15 16c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-4h4v4zm2-6c0 .55-.45 1-1 1H10c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2z" />
          </svg>
        </motion.div>
      </div>

      {/* Image carousel */}
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 right-10 z-20">
          <CarouselPrevious className="mr-2" />
          <CarouselNext />
        </div>
      </Carousel>

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{tagline}</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center text-white/80">
              <Clock className="mr-2 h-5 w-5" />
              <span>Open daily until 3:00 AM</span>
            </div>
            <div className="flex items-center text-white/80">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Downtown Montreal</span>
            </div>
          </div>

          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
