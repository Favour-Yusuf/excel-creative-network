import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RotatingHeadline() {
  const phrases = [
    "Sustainable. Innovative. Strategic.",
    "Building Tomorrow. Today.",
    "Precision in Every Connection.",
    "Engineering Excellence. Delivered."
  ];

  const highlightWords = ["Innovative", "Today", "Connection", "Excellence"];

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  // Typewriter Animation
  useEffect(() => {
    const full = phrases[index];
    let i = 0;

    setDisplayed("");

    const typing = setInterval(() => {
      setDisplayed(full.slice(0, i));
      i++;
      if (i > full.length) clearInterval(typing);
    }, 80);

    const rotate = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);

    return () => {
      clearInterval(typing);
      clearInterval(rotate);
    };
  }, [index]);

  // Highlight logic for displayed text
  const renderWithHighlight = () => {
    return displayed.split(" ").map((word, i) => {
      const cleaned = word.replace(/[^a-zA-Z]/g, "");

      const isHighlighted = highlightWords.includes(cleaned);

      return (
        <span
          key={i}
          className={isHighlighted ? "text-yellow-400" : ""}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <motion.h2
      key={index}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-5xl font-bold leading-tight"
    >
      {renderWithHighlight()}
      <span className="border-r-2 border-yellow-400 ml-1 animate-pulse" />
    </motion.h2>
  );
}
