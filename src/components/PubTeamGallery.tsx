import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  id: number;
  imageUrl: string;
  name: string;
  caption: string;
}

const PubTeamGallery: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Mad Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The friendly faces that make Mad Hatter Pub the best place in town.
          </p>
        </div>

        {/* Team Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-square group">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{member.caption}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-center">{member.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    imageUrl: "/images/staff/3 amigos.png",
    name: "The Mixologist",
    caption: "Crafting signature cocktails with flair and precision."
  },
  {
    id: 2,
    imageUrl: "/images/staff/3 at hatters.png",
    name: "Montreal Team Lead",
    caption: "Bringing the best pub experience to Downtown Montreal."
  },
  {
    id: 3,
    imageUrl: "/images/staff/3 hatters.png",
    name: "Service Specialist",
    caption: "Always ready with a smile and exceptional service."
  },
  {
    id: 4,
    imageUrl: "/images/staff/3 steves.png",
    name: "The Original One",
    caption: "Sporting our signature beanie while serving up good times."
  },
  {
    id: 5,
    imageUrl: "/images/staff/ChatGPT Image May 17, 2025, 09_42_36 PM.png",
    name: "Beard Master",
    caption: "Our friendly bearded team member ensuring your experience is perfect."
  },
  {
    id: 6,
    imageUrl: "/images/staff/ChatGPT Image May 17, 2025, 09_49_55 PM.png",
    name: "Curly",
    caption: "Bringing energy and enthusiasm to every shift."
  },
  {
    id: 7,
    imageUrl: "/images/staff/ChatGPT Image May 18, 2025, 01_23_26 AM.png",
    name: "The Energizer",
    caption: "We don't just work here - we have fun too!"
  },
  {
    id: 8,
    imageUrl: "/images/staff/ChatGPT Image May 18, 2025, 02_33_07 AM.png",
    name: "Cap",
    caption: "Looking stylish while providing excellent service."
  },
  {
    id: 9,
    imageUrl: "/images/staff/ChatGPT Image May 18, 2025, 02_36_16 AM.png",
    name: "Dynamic Duo",
    caption: "Our team ready to make your night memorable."
  },
  {
    id: 10,
    imageUrl: "/images/staff/ChatGPT Image May 18, 2025, 02_39_28 AM.png",
    name: "The Entertainer",
    caption: "Bringing the fun to every Mad Hatter night."
  },
  {
    id: 11,
    imageUrl: "/images/staff/ChatGPT Image May 18, 2025, 03_10_47 AM.png",
    name: "Bar Team",
    caption: "The perfect team behind our bar, ready to serve you."
  },
  {
    id: 12,
    imageUrl: "/images/staff/colin tatts.png",
    name: "Style Icon",
    caption: "Setting trends while serving drinks."
  }
];

export default PubTeamGallery;