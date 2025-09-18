import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center gap-5">
        <Image src="/assets/logo.svg" alt="logo" width={34} height={34}/>
        <span className="text-xl/normal font-bold iowan-font">Before I Wall</span>
      </Link>
    </div>
  );
};

export default Logo;
