import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface StaffImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface StaffGalleryProps {
  images?: StaffImage[];
}

const StaffGallery = ({
  images = defaultImages,
}: StaffGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<StaffImage | null>(null);

  const handleImageClick = (image: StaffImage) => {
    setSelectedImage(image);
  };

  const handleDialogClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The friendly faces behind Mad Hatter Pub who make every visit special.
          </p>
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
              <Card
                className="overflow-hidden h-full bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="relative overflow-hidden aspect-[4/3] group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{image.alt}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Full-size image dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={handleDialogClose}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                  <h3 className="text-white font-medium mb-1">{selectedImage.alt}</h3>
                  <p className="text-white/80 text-sm">{selectedImage.caption}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

// Staff images - using actual images from the staff directory
const defaultImages: StaffImage[] = [
  {
    id: 1,
    src: "/images/staff/3 amigos.png",
    alt: "Three Amigos",
    caption: "Our three amigos ready to serve you the best drinks in town."
  },
  {
    id: 2,
    src: "/images/staff/3 at hatters.png",
    alt: "Three at Hatters",
    caption: "Our team bringing the best pub experience to Downtown Montreal."
  },
  {
    id: 3,
    src: "/images/staff/3 hatters.png",
    alt: "Three Hatters",
    caption: "Always ready with a smile and great service."
  },
  {
    id: 4,
    src: "/images/staff/3 steves.png",
    alt: "Three Steves",
    caption: "The Steve trio - masters of mixology and good times."
  },
  {
    id: 5,
    src: "/images/staff/ChatGPT Image May 17, 2025, 09_42_36 PM.png",
    alt: "Staff Member",
    caption: "One of our friendly team members making your visit special."
  },
  {
    id: 6,
    src: "/images/staff/ChatGPT Image May 17, 2025, 09_49_55 PM.png",
    alt: "Staff Member",
    caption: "Bringing energy and enthusiasm to every shift."
  },
  {
    id: 7,
    src: "/images/staff/ChatGPT Image May 18, 2025, 01_23_26 AM.png",
    alt: "Staff Member",
    caption: "We don't just work here - we have fun too!"
  },
  {
    id: 8,
    src: "/images/staff/ChatGPT Image May 18, 2025, 02_33_07 AM.png",
    alt: "Staff Member",
    caption: "Looking stylish while providing excellent service."
  },
  {
    id: 9,
    src: "/images/staff/ChatGPT Image May 18, 2025, 02_36_16 AM.png",
    alt: "Staff Member",
    caption: "Our dynamic team ready to make your night memorable."
  },
  {
    id: 10,
    src: "/images/staff/ChatGPT Image May 18, 2025, 02_39_28 AM.png",
    alt: "Staff Member",
    caption: "Crafting the perfect night out experience."
  },
  {
    id: 11,
    src: "/images/staff/ChatGPT Image May 18, 2025, 03_10_47 AM.png",
    alt: "Staff Member",
    caption: "Part of our amazing team at Mad Hatter Pub."
  },
  {
    id: 12,
    src: "/images/staff/colin tatts.png",
    alt: "Colin with Tattoos",
    caption: "Colin showing off his unique style and tattoos."
  },
  {
    id: 13,
    src: "/images/staff/colinshot 2025-05-17 at 11.50.08 PM.png",
    alt: "Colin",
    caption: "Colin - one of our most experienced team members."
  },
  {
    id: 14,
    src: "/images/staff/colinshot 2025-05-17 at 11.50.21 PM.png",
    alt: "Colin",
    caption: "Colin making sure your experience is perfect."
  },
  {
    id: 15,
    src: "/images/staff/hatters outside.webp",
    alt: "Hatters Outside",
    caption: "Our team enjoying some fresh air outside the pub."
  },
  {
    id: 16,
    src: "/images/staff/noa2025-05-17 at 11.49.14 PM.png",
    alt: "Noa",
    caption: "Noa - bringing smiles to every customer."
  },
  {
    id: 17,
    src: "/images/staff/noa2025-05-17 at 11.55.31 PM.png",
    alt: "Noa",
    caption: "Noa ready to serve you the best drinks in town."
  },
  {
    id: 18,
    src: "/images/staff/noa2025-05-17 at 11.55.54 PM.png",
    alt: "Noa",
    caption: "Noa - one of our star team members."
  },
  {
    id: 19,
    src: "/images/staff/noa2025-05-18 at 12.39.02 AM.png",
    alt: "Noa",
    caption: "Noa bringing energy and enthusiasm to every shift."
  },
  {
    id: 20,
    src: "/images/staff/Screenshot 2025-05-17 at 9.24.15 PM.png",
    alt: "Staff Member",
    caption: "Part of our amazing team at Mad Hatter Pub."
  },
  {
    id: 21,
    src: "/images/staff/Screenshot 2025-05-17 at 9.24.59 PM.png",
    alt: "Staff Member",
    caption: "Always ready with a smile and great service."
  },
  {
    id: 22,
    src: "/images/staff/Screenshot 2025-05-17 at 9.25.13 PM.png",
    alt: "Staff Member",
    caption: "Making your visit to Mad Hatter Pub special."
  },
  {
    id: 23,
    src: "/images/staff/Screenshot 2025-05-17 at 11.56.13 PM.png",
    alt: "Staff Member",
    caption: "Part of the Mad Hatter family."
  },
  {
    id: 24,
    src: "/images/staff/steveshot 2025-05-17 at 9.22.12 PM.png",
    alt: "Steve",
    caption: "Steve - master of mixology and good times."
  }
];

export default StaffGallery;