import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import MenuComponent from "./MenuComponent";
import LocationSection from "./LocationSection";
import AtmosphereGallery from "./AtmosphereGallery";
import PubTeamGallery from "./PubTeamGallery";
import StaffGallery from "./StaffGallery";
import { Button } from "./ui/button";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1490132328392-e6ef54a90dda?w=100&q=80"
              alt="Mad Hatter Pub Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold">Mad Hatter Pub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="#menu" className="text-sm font-medium hover:text-primary">
              Menu
            </a>
            <a
              href="#atmosphere"
              className="text-sm font-medium hover:text-primary"
            >
              Atmosphere
            </a>
            <a
              href="#location"
              className="text-sm font-medium hover:text-primary"
            >
              Location
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16">
          <HeroSection />
        </section>

        {/* About Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                Welcome to Mad Hatter Pub
              </h2>
              <p className="text-lg mb-8">
                Looking for the ultimate nightlife destination in downtown
                Montreal? Look no further than MadHatter Pub, your go-to spot
                for unwinding with friends, dancing the night away, or enjoying
                some friendly competition with games like pool, Jenga, or ping
                pong.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-background p-3 rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Open daily until 3:00 AM</span>
                </div>
                <div className="flex items-center gap-2 bg-background p-3 rounded-lg shadow-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Downtown Montreal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Indulge in our mouthwatering food menu available until midnight,
                sip on our expertly crafted cocktails, or choose from our
                extensive selection of beers.
              </p>
            </motion.div>
            <MenuComponent />
          </div>
        </section>

        {/* Atmosphere Gallery Section */}
        <section id="atmosphere" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Experience Our Atmosphere
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                Immerse yourself in the vibrant atmosphere of MadHatter Pub for
                a guaranteed great night out. From pool tables to Jenga towers,
                we've got entertainment for everyone.
              </p>
            </motion.div>
            <AtmosphereGallery />
            
            {/* Staff Gallery */}
            <div className="mt-16">
              <StaffGallery />
            </div>
            
            {/* Pub Team Gallery */}
            <div className="mt-16">
              <PubTeamGallery />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Conveniently situated near the Bell Center, McGill, Concordia,
                and major hotels, we welcome a diverse crowd of patrons, from
                students to locals and tourists alike.
              </p>
            </motion.div>
            <LocationSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg mb-8">
                Have questions or want to make a reservation? Reach out to us
                through any of the following channels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col items-center gap-2 bg-background p-6 rounded-lg shadow-sm">
                  <Phone className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-xl font-medium">Phone</h3>
                  <p className="text-lg">(514) 555-1234</p>
                </div>
                <div className="flex flex-col items-center gap-2 bg-background p-6 rounded-lg shadow-sm">
                  <Mail className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-xl font-medium">Email</h3>
                  <p className="text-lg">info@madhatterpub.ca</p>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1490132328392-e6ef54a90dda?w=100&q=80"
                  alt="Mad Hatter Pub Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-xl font-bold">Mad Hatter Pub</span>
              </div>
              <p className="text-muted-foreground">
                Your go-to spot for unwinding with friends, dancing the night
                away, or enjoying some friendly competition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span>11:00 AM - 3:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Food Service</span>
                  <span>Until Midnight</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-primary">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#atmosphere" className="hover:text-primary">
                    Atmosphere
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-primary">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Mad Hatter Pub. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
