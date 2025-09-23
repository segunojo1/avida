"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  id: number;
  message: string;
  author?: string;
  createdAt: number;
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
} as const;

const CARD_TYPES = ["green", "yellow", "blue", "mine"] as const;

const CARD_TYPES_PUBLIC = ["green", "yellow", "blue"] as const;

const ICONS = [
  "/assets/card-icons/fire.svg",
  "/assets/card-icons/wave.svg",
  "/assets/card-icons/board.svg",
  "/assets/card-icons/magic.svg",
  "/assets/card-icons/peace.svg",
  "/assets/card-icons/heart-eyes.svg",
  "/assets/card-icons/heart.svg",
  "/assets/card-icons/love.svg",
];

const DreamboardCard = ({ message, className = "" }: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const initialCard: typeof CARD_TYPES[number] =
  pathname === "/my-entries"
    ? "mine"
    : CARD_TYPES_PUBLIC[Math.floor(Math.random() * CARD_TYPES_PUBLIC.length)];

const [card] = useState<typeof CARD_TYPES[number]>(initialCard);

  const [icon] = useState<string>(
    () => ICONS[Math.floor(Math.random() * ICONS.length)]
  );

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
            alt="icon"
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
        </div>
      )}

      <div
        className={`relative w-full h-full overflow-hidden caveat-font rounded-2xl transition-all duration-300 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 w-full h-full rounded-2xl">
          <Image
            src={`/assets/${card}.png`}
            alt="dreamboard card"
            fill
            className={`object-cover transition-transform duration-500 rounded-2xl ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            sizes="(max-width: 768px) 100vw, 368px"
            priority
          />
        </div>

        <div
          className="mt-auto transition-all duration-300 rounded-2xl"
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
