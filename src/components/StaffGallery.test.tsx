import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import StaffGallery from "./StaffGallery";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

const mockImages = [
  {
    id: 1,
    src: "/test-staff-1.jpg",
    alt: "Test Staff Member 1",
    caption: "Our amazing bartender",
  },
  {
    id: 2,
    src: "/test-staff-2.jpg",
    alt: "Test Staff Member 2",
    caption: "Always with a smile",
  },
];

describe("StaffGallery", () => {
  describe("Rendering", () => {
    it("renders the section title", () => {
      render(<StaffGallery />);
      expect(screen.getByText("Meet Our Team")).toBeInTheDocument();
    });

    it("renders the section description", () => {
      render(<StaffGallery />);
      expect(
        screen.getByText(/The friendly faces behind Mad Hatter Pub/)
      ).toBeInTheDocument();
    });

    it("renders with default images when no props provided", () => {
      render(<StaffGallery />);
      const images = screen.getAllByRole("img");
      expect(images.length).toBeGreaterThan(0);
    });
  });

  describe("Custom Images", () => {
    it("renders custom images when provided", () => {
      render(<StaffGallery images={mockImages} />);
      expect(screen.getByAltText("Test Staff Member 1")).toBeInTheDocument();
      expect(screen.getByAltText("Test Staff Member 2")).toBeInTheDocument();
    });

    it("displays staff names in cards", () => {
      render(<StaffGallery images={mockImages} />);
      expect(screen.getByText("Test Staff Member 1")).toBeInTheDocument();
      expect(screen.getByText("Test Staff Member 2")).toBeInTheDocument();
    });
  });

  describe("Hover Overlay", () => {
    it("displays captions in hover overlay", () => {
      render(<StaffGallery images={mockImages} />);
      // Captions are present in the hover overlay
      expect(screen.getByText("Our amazing bartender")).toBeInTheDocument();
      expect(screen.getByText("Always with a smile")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("all images have alt text", () => {
      render(<StaffGallery images={mockImages} />);
      const images = screen.getAllByRole("img");
      images.forEach((img) => {
        expect(img).toHaveAttribute("alt");
        expect(img.getAttribute("alt")).not.toBe("");
      });
    });
  });

  describe("Grid Layout", () => {
    it("renders images in a grid container", () => {
      render(<StaffGallery images={mockImages} />);
      const gridContainer = document.querySelector(".grid");
      expect(gridContainer).toBeInTheDocument();
    });
  });
});
