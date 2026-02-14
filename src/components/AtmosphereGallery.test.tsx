import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AtmosphereGallery from "./AtmosphereGallery";

// Mock framer-motion
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

const mockImages = [
  {
    id: 1,
    src: "/test-image-1.jpg",
    alt: "Test Pool Table",
    category: "games" as const,
    caption: "Challenge your friends to a game of pool",
  },
  {
    id: 2,
    src: "/test-image-2.jpg",
    alt: "Test Bar Area",
    category: "nightlife" as const,
    caption: "Our fully stocked bar",
  },
];

describe("AtmosphereGallery", () => {
  describe("Rendering", () => {
    it("renders the section title", () => {
      render(<AtmosphereGallery />);
      expect(screen.getByText("Experience Our Atmosphere")).toBeInTheDocument();
    });

    it("renders the section description", () => {
      render(<AtmosphereGallery />);
      expect(
        screen.getByText(/Step into the wonderland of Mad Hatter Pub/)
      ).toBeInTheDocument();
    });

    it("renders call to action button", () => {
      render(<AtmosphereGallery />);
      expect(screen.getByText("Visit Us Today")).toBeInTheDocument();
    });

    it("renders with default images when no props provided", () => {
      render(<AtmosphereGallery />);
      // Should have images rendered
      const images = screen.getAllByRole("img");
      expect(images.length).toBeGreaterThan(0);
    });
  });

  describe("Custom Images", () => {
    it("renders custom images when provided", () => {
      render(<AtmosphereGallery images={mockImages} />);
      expect(screen.getByAltText("Test Pool Table")).toBeInTheDocument();
      expect(screen.getByAltText("Test Bar Area")).toBeInTheDocument();
    });

    it("displays image titles in cards", () => {
      render(<AtmosphereGallery images={mockImages} />);
      expect(screen.getByText("Test Pool Table")).toBeInTheDocument();
      expect(screen.getByText("Test Bar Area")).toBeInTheDocument();
    });

    it("displays category badges", () => {
      render(<AtmosphereGallery images={mockImages} />);
      expect(screen.getByText("Games")).toBeInTheDocument();
      expect(screen.getByText("Nightlife")).toBeInTheDocument();
    });
  });

  describe("Hover Overlay", () => {
    it("displays captions in hover overlay", () => {
      render(<AtmosphereGallery images={mockImages} />);
      // Captions are present in the hover overlay
      expect(screen.getByText("Challenge your friends to a game of pool")).toBeInTheDocument();
      expect(screen.getByText("Our fully stocked bar")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("all images have alt text", () => {
      render(<AtmosphereGallery images={mockImages} />);
      const images = screen.getAllByRole("img");
      images.forEach((img) => {
        expect(img).toHaveAttribute("alt");
        expect(img.getAttribute("alt")).not.toBe("");
      });
    });
  });
});
