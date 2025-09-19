"use client"
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  id: number;
  message: string;
  author: string;
  createdAt: number;
}

const DreamboardCard = (props: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [textHeight, setTextHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState('100%');

  useEffect(() => {
    if (textRef.current) {
      const height = textRef.current.offsetHeight;
      setTextHeight(height);
      setImageHeight(height > 236 ? 'calc(100% + 100px)' : '100%');
    }
  }, [props.message]);

  return (
    <div className="relative min-h-[300px] w-[368px] caveat-font">
      <Image 
        src="/assets/green-card.png" 
        alt="dreamboard card" 
        width={368} 
        height={900} 
        className="absolute z-[10]" 
        style={{ height: imageHeight, width: '100%', objectFit: 'cover' }}
      />
      <div className="relative z-[20] p-8">
        <p ref={textRef} className="text-[24px] leading-[40px] break-words">
          {props.message}
        </p>
      </div>
    </div>
  );
};

export default DreamboardCard;