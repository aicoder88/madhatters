import React from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LocationSectionProps {
  address?: string;
  phone?: string;
  email?: string;
  landmarks?: Array<{
    name: string;
    distance: string;
    description: string;
  }>;
}

const LocationSection = ({
  address = "1240 Crescent St, Montreal, QC H3G 2A9",
  phone = "(514) 393-1240",
  email = "info@madhattermtl.ca",
  landmarks = [
    {
      name: "Bell Center",
      distance: "0.5 km",
      description: "Home of the Montreal Canadiens and major events venue",
    },
    {
      name: "McGill University",
      distance: "0.7 km",
      description: "Prestigious university in downtown Montreal",
    },
    {
      name: "Concordia University",
      distance: "0.3 km",
      description: "Urban university with vibrant campus life",
    },
  ],
}: LocationSectionProps) => {
  return (
    <section className="py-16 px-4 bg-background" id="location">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 relative">
          <span className="relative z-10">Find Us</span>
          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl text-primary/10 font-bold">
            LOCATION
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-full relative">
              {/* Interactive Map - Using iframe for Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.3105053001584!2d-73.5793!3d45.4973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a41eabd3ad7%3A0x1bd1eca9c4a5cc4e!2s1240%20Crescent%20St%2C%20Montreal%2C%20QC%20H3G%202A9!5e0!3m2!1sen!2sca!4v1651234567890!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mad Hatter Pub Location"
                className="absolute inset-0"
              />

              {/* Custom Map Overlay */}
              <div className="absolute top-4 left-4 bg-background/90 p-3 rounded-lg shadow-md backdrop-blur-sm border border-primary/20">
                <h3 className="font-bold text-lg text-primary">
                  Mad Hatter Pub
                </h3>
                <p className="text-sm text-muted-foreground">
                  Montreal's Premier Nightlife Destination
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-muted-foreground">{address}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p className="text-muted-foreground">{phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hours:</p>
                      <p className="text-muted-foreground">
                        Open daily until 3:00 AM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    className="flex-1"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
                        "_blank",
                      )
                    }
                  >
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() =>
                      window.open(
                        `tel:${phone.replace(/[^0-9]/g, "")}`,
                        "_self",
                      )
                    }
                  >
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-4">Nearby Attractions</h3>
              <div className="space-y-3">
                <TooltipProvider>
                  {landmarks.map((landmark, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Card className="border-primary/10 cursor-help transition-all hover:border-primary/30">
                          <CardContent className="p-4 flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">{landmark.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {landmark.distance} away
                              </p>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">
                        <p>{landmark.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
