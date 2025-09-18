import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  message: string;
  author: string;
  createdAt: number;
}

const DreamboardCard = (props: Props) => {
  return <div className="relative min-h-[300px] max-w-[368px] caveat-font ">
    <Image src="/assets/carddd.png" alt="dreamboard card" width={368} height={900} className="h-[300px] absolute z-[10] " />
    <p className="z-[99999] relative px-[50px] py-[18px] text-[24px]/[auto]">{props.message}</p>
  </div>;
};

export default DreamboardCard;    