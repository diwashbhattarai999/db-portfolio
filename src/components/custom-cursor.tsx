"use client";
import React, { useEffect, useRef, useState } from "react";

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

interface CustomDiv extends HTMLDivElement {
  x: number;
  y: number;
}
const CustomCursor: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const circles = useRef<Array<CustomDiv>>([]);

  useEffect(() => {
    circles.current = Array.from(
      document.querySelectorAll(".custom-cursor")
    ) as CustomDiv[];

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      const baseTransform = `translate(${x - 12}px, ${y - 12}px)`;

      circles.current.forEach((circle, index) => {
        // Combine styles into a single string
        const transform = `${baseTransform} scale(${(circles.current.length - index) / circles.current.length})`;
        circle.style.transform = transform;

        // Update x and y for next iteration
        const nextCircle = circles.current[index + 1] || circles.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, [coords]);

  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          className={`custom-cursor color-${index}`} // Add separate class for each color
          style={{ position: "fixed" }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
