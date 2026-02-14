import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  id: number;
  imageUrl: string;
  name: string;
  caption: string;
}

const TeamGallery: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Mad Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the faces behind the magic at Mad Hatter Pub.
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
// Using local images from the staff directory
const teamMembers: TeamMember[] = [
  {
    id: 1,
    imageUrl: "/images/staff/colinshot 2025-05-17 at 11.50.08 PM.png",
    name: "Colin",
    caption: "Our skilled bartender crafting signature cocktails with flair."
  },
  {
    id: 2,
    imageUrl: "/images/staff/colinshot 2025-05-17 at 11.50.21 PM.png",
    name: "Colin",
    caption: "Downtown Montreal's favorite server, always with a smile."
  },
  {
    id: 3,
    imageUrl: "/images/staff/colin tatts.png",
    name: "Colin",
    caption: "Making sure your experience is nothing short of amazing."
  },
  {
    id: 4,
    imageUrl: "/images/staff/noa2025-05-17 at 11.49.14 PM.png",
    name: "Noa",
    caption: "Sporting our signature 'Original One' beanie while serving up good times."
  },
  {
    id: 5,
    imageUrl: "/images/staff/noa2025-05-17 at 11.55.31 PM.png",
    name: "Noa",
    caption: "Our friendly team member making sure your experience is perfect."
  },
  {
    id: 6,
    imageUrl: "/images/staff/noa2025-05-18 at 12.39.02 AM.png",
    name: "Noa",
    caption: "Bringing energy and enthusiasm to every shift."
  }
];

export default TeamGallery;