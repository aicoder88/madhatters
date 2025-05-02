import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "games" | "nightlife";
  caption: string;
}

interface AtmosphereGalleryProps {
  images?: GalleryImage[];
}

const AtmosphereGallery = ({
  images = defaultImages,
}: AtmosphereGalleryProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Atmosphere
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step into the wonderland of Mad Hatter Pub where games, laughter,
            and unforgettable nights await.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="relative">
          <motion.div
            className="absolute -top-8 left-10 opacity-20 hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=100&q=80"
              alt="Decorative playing card"
              className="w-16 h-16 object-contain"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-8 right-10 opacity-20 hidden md:block"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <img
              src="https://images.unsplash.com/photo-1596568359553-a55bac84f0a4?w=100&q=80"
              alt="Decorative hat"
              className="w-20 h-20 object-contain"
            />
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-[4/3] group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{image.alt}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {image.category === "games" ? "Games" : "Nightlife"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Come experience the magic for yourself!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Visit Us Today
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Default images if none are provided
const defaultImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1610297166034-55f21cd157a5?w=800&q=80",
    alt: "Pool Tables",
    category: "games",
    caption:
      "Challenge your friends to a game of pool in our spacious gaming area.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1611254666354-3fe563131d5b?w=800&q=80",
    alt: "Jenga Tower",
    category: "games",
    caption: "Test your steady hands with our giant Jenga sets.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1545128485-c400ce7b23d2?w=800&q=80",
    alt: "Ping Pong Tables",
    category: "games",
    caption: "Show off your ping pong skills on our professional tables.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80",
    alt: "Vibrant Bar Area",
    category: "nightlife",
    caption:
      "Our fully stocked bar serves craft cocktails and an extensive beer selection.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800&q=80",
    alt: "Lively Dance Floor",
    category: "nightlife",
    caption:
      "Dance the night away with our resident DJs spinning the latest hits.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    alt: "Cozy Lounge Area",
    category: "nightlife",
    caption: "Relax in our comfortable lounge areas between games and dancing.",
  },
];

export default AtmosphereGallery;
