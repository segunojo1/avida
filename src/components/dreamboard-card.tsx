"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  id: number;
  message: string;
  author: string;
  createdAt: number;
  card: "green" | "yellow" | "blue" | "mine";
  icon: string;
  className?: string;
}

// Card content positioning based on card type
const CARD_CONTENT = {
  yellow: {
    icon: { top: "1rem", left: "1rem" },
    text: { padding: "2rem 2rem 2rem" },
  },
  green: {
    icon: { top: "1.5rem", left: "1.5rem" },
    text: { padding: "2rem 2rem 2rem" },
  },
  blue: {
    icon: { top: "1.5rem", left: "1.5rem" },
    text: { padding: "2rem 2rem 2rem" },
  },
  mine: {
    icon: { top: "1.5rem", left: "1.5rem" },
    text: { padding: "2rem 2rem 2rem" },
  },
};

const DreamboardCard = ({ card, icon, message, className = "" }: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Get styles based on card type
  const cardStyles = CARD_CONTENT[card];

  return (
    <div className="relative">
      {card !== "mine" && (
        <div
          className="absolute -top-5 -left-5 z-20 transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          }}
        >
          <Image
            src={icon}
            alt=""
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
        </div>
      )}

      {/* Card Container */}
      <div
        className={`relative w-full h-full overflow-hidden caveat-font rounded-2xl transition-all duration-300 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={`/assets/${card}.png`}
            alt="dreamboard card"
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            sizes="(max-width: 768px) 100vw, 368px"
            priority
          />
        </div>

        {/* Message */}
        <div
          className="mt-auto transition-all duration-300 "
          style={{
            ...cardStyles.text,
            transform: isHovered ? "translateY(-0.5rem)" : "translateY(0)",
          }}
        >
          <p
            ref={textRef}
            className="text-xl md:text-2xl font-medium leading-tight break-words"
            style={{
              lineHeight: "1.3",
              WebkitLineClamp: card === "yellow" ? 3 : 5,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DreamboardCard;
