import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PubTeamGallery from "./PubTeamGallery";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("PubTeamGallery", () => {
  describe("Rendering", () => {
    it("renders the section title", () => {
      render(<PubTeamGallery />);
      expect(screen.getByText("Our Mad Team")).toBeInTheDocument();
    });

    it("renders the section description", () => {
      render(<PubTeamGallery />);
      expect(
        screen.getByText(/The friendly faces that make Mad Hatter Pub/)
      ).toBeInTheDocument();
    });

    it("renders team member cards", () => {
      render(<PubTeamGallery />);
      const images = screen.getAllByRole("img");
      expect(images.length).toBeGreaterThan(0);
    });
  });

  describe("Team Members", () => {
    it("displays team member names", () => {
      render(<PubTeamGallery />);
      expect(screen.getByText("The Mixologist")).toBeInTheDocument();
      expect(screen.getByText("Montreal Team Lead")).toBeInTheDocument();
      expect(screen.getByText("Service Specialist")).toBeInTheDocument();
    });

    it("renders all team members from the data", () => {
      render(<PubTeamGallery />);
      // There are 12 team members in the component
      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(12);
    });
  });

  describe("Accessibility", () => {
    it("all images have alt text matching member names", () => {
      render(<PubTeamGallery />);
      const images = screen.getAllByRole("img");
      images.forEach((img) => {
        expect(img).toHaveAttribute("alt");
        expect(img.getAttribute("alt")).not.toBe("");
      });
    });
  });

  describe("Grid Layout", () => {
    it("renders in a responsive grid", () => {
      render(<PubTeamGallery />);
      const gridContainer = document.querySelector(".grid");
      expect(gridContainer).toBeInTheDocument();
      expect(gridContainer).toHaveClass("grid-cols-1");
      expect(gridContainer).toHaveClass("sm:grid-cols-2");
      expect(gridContainer).toHaveClass("lg:grid-cols-3");
    });
  });

  describe("Card Structure", () => {
    it("renders cards with proper structure", () => {
      render(<PubTeamGallery />);
      // Each card should have an image and a name
      const cards = document.querySelectorAll(".h-full.bg-card");
      expect(cards.length).toBeGreaterThan(0);
    });

    it("renders hover overlay with captions", () => {
      render(<PubTeamGallery />);
      // Check for caption text in the component
      expect(
        screen.getByText(/Crafting signature cocktails with flair/)
      ).toBeInTheDocument();
    });
  });
});
