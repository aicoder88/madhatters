import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./home";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
    button: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <button {...props}>{children}</button>
    ),
  },
}));

// Mock child components to isolate HomePage testing
vi.mock("./HeroSection", () => ({
  default: () => <div data-testid="hero-section">Hero Section</div>,
}));

vi.mock("./MenuComponent", () => ({
  default: () => <div data-testid="menu-component">Menu Component</div>,
}));

vi.mock("./LocationSection", () => ({
  default: () => <div data-testid="location-section">Location Section</div>,
}));

vi.mock("./AtmosphereGallery", () => ({
  default: () => <div data-testid="atmosphere-gallery">Atmosphere Gallery</div>,
}));

vi.mock("./StaffGallery", () => ({
  default: () => <div data-testid="staff-gallery">Staff Gallery</div>,
}));

vi.mock("./PubTeamGallery", () => ({
  default: () => <div data-testid="pub-team-gallery">Pub Team Gallery</div>,
}));

const renderHomePage = () => {
  return render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe("HomePage", () => {
  describe("Header Navigation", () => {
    it("renders the pub logo and name", () => {
      renderHomePage();
      // There are multiple instances (header and footer)
      const pubNames = screen.getAllByText("Mad Hatter Pub");
      expect(pubNames.length).toBeGreaterThanOrEqual(1);
      const logos = screen.getAllByAltText("Mad Hatter Pub Logo");
      expect(logos.length).toBeGreaterThanOrEqual(1);
    });

    it("renders navigation links", () => {
      renderHomePage();
      // Links appear in both header nav and footer quick links
      expect(screen.getAllByRole("link", { name: /home/i }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByRole("link", { name: /menu/i }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByRole("link", { name: /atmosphere/i }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByRole("link", { name: /location/i }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByRole("link", { name: /contact/i }).length).toBeGreaterThanOrEqual(1);
    });

    it("renders mobile menu button", () => {
      renderHomePage();
      const menuButtons = screen.getAllByRole("button", { name: /menu/i });
      expect(menuButtons.length).toBeGreaterThan(0);
    });
  });

  describe("Main Content Sections", () => {
    it("renders HeroSection component", () => {
      renderHomePage();
      expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    });

    it("renders About section with welcome message", () => {
      renderHomePage();
      expect(screen.getByText("Welcome to Mad Hatter Pub")).toBeInTheDocument();
    });

    it("renders MenuComponent", () => {
      renderHomePage();
      expect(screen.getByTestId("menu-component")).toBeInTheDocument();
    });

    it("renders AtmosphereGallery component", () => {
      renderHomePage();
      expect(screen.getByTestId("atmosphere-gallery")).toBeInTheDocument();
    });

    it("renders StaffGallery component", () => {
      renderHomePage();
      expect(screen.getByTestId("staff-gallery")).toBeInTheDocument();
    });

    it("renders PubTeamGallery component", () => {
      renderHomePage();
      expect(screen.getByTestId("pub-team-gallery")).toBeInTheDocument();
    });

    it("renders LocationSection component", () => {
      renderHomePage();
      expect(screen.getByTestId("location-section")).toBeInTheDocument();
    });
  });

  describe("Contact Section", () => {
    it("renders contact information", () => {
      renderHomePage();
      expect(screen.getByText("Contact Us")).toBeInTheDocument();
      expect(screen.getByText("Phone")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText("(514) 555-1234")).toBeInTheDocument();
      expect(screen.getByText("info@madhatterpub.ca")).toBeInTheDocument();
    });

    it("renders social media links", () => {
      renderHomePage();
      const socialLinks = screen.getAllByRole("link").filter(
        link => link.closest("div")?.className.includes("flex justify-center gap-4")
      );
      expect(socialLinks.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("Footer", () => {
    it("renders footer with pub info", () => {
      renderHomePage();
      const footerImages = screen.getAllByAltText("Mad Hatter Pub Logo");
      expect(footerImages.length).toBeGreaterThanOrEqual(1);
    });

    it("renders opening hours", () => {
      renderHomePage();
      expect(screen.getByText("Hours")).toBeInTheDocument();
      expect(screen.getByText("Monday - Sunday")).toBeInTheDocument();
      expect(screen.getByText("11:00 AM - 3:00 AM")).toBeInTheDocument();
    });

    it("renders quick links section", () => {
      renderHomePage();
      expect(screen.getByText("Quick Links")).toBeInTheDocument();
    });

    it("renders copyright notice", () => {
      renderHomePage();
      const currentYear = new Date().getFullYear();
      expect(
        screen.getByText(new RegExp(`${currentYear} Mad Hatter Pub`))
      ).toBeInTheDocument();
    });
  });
});
