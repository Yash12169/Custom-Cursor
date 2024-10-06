"use client";
import { useEffect, useState } from "react";
import "./MixBlende.css";

export default function MixBlende() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      style={{
        left: `${position.x - 20}px`,
        top: `${position.y - 20}px`,
      }}
      className={`cursor`}
    ></div>
  );
}
