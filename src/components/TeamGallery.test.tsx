import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TeamGallery from "./TeamGallery";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("TeamGallery", () => {
  describe("Rendering", () => {
    it("renders the section title", () => {
      render(<TeamGallery />);
      expect(screen.getByText("Our Mad Team")).toBeInTheDocument();
    });

    it("renders the section description", () => {
      render(<TeamGallery />);
      expect(
        screen.getByText(/Meet the faces behind the magic/)
      ).toBeInTheDocument();
    });

    it("renders team member cards", () => {
      render(<TeamGallery />);
      const images = screen.getAllByRole("img");
      expect(images.length).toBeGreaterThan(0);
    });
  });

  describe("Team Members Data", () => {
    it("displays Colin team member", () => {
      render(<TeamGallery />);
      const colinElements = screen.getAllByText("Colin");
      expect(colinElements.length).toBeGreaterThan(0);
    });

    it("displays Noa team member", () => {
      render(<TeamGallery />);
      const noaElements = screen.getAllByText("Noa");
      expect(noaElements.length).toBeGreaterThan(0);
    });

    it("renders exactly 6 team members", () => {
      render(<TeamGallery />);
      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(6);
    });
  });

  describe("Accessibility", () => {
    it("all images have alt text", () => {
      render(<TeamGallery />);
      const images = screen.getAllByRole("img");
      images.forEach((img) => {
        expect(img).toHaveAttribute("alt");
        expect(img.getAttribute("alt")).not.toBe("");
      });
    });
  });

  describe("Grid Layout", () => {
    it("renders in a responsive grid", () => {
      render(<TeamGallery />);
      const gridContainer = document.querySelector(".grid");
      expect(gridContainer).toBeInTheDocument();
      expect(gridContainer).toHaveClass("grid-cols-1");
      expect(gridContainer).toHaveClass("sm:grid-cols-2");
      expect(gridContainer).toHaveClass("lg:grid-cols-3");
    });
  });

  describe("Card Content", () => {
    it("renders member captions on hover overlay", () => {
      render(<TeamGallery />);
      expect(
        screen.getByText(/Our skilled bartender crafting signature cocktails/)
      ).toBeInTheDocument();
    });

    it("renders cards with aspect-square ratio", () => {
      render(<TeamGallery />);
      const aspectContainers = document.querySelectorAll(".aspect-square");
      expect(aspectContainers.length).toBeGreaterThan(0);
    });
  });
});
