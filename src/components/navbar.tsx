import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex min-w-full bg-[#FFFFFF] rounded-[50px]">
      <div className="flex items-center justify-between py-[18px] px-[84px] w-full ">
        <Logo />
        <ul className="text-[16px]/[24px] font-semibold flex items-center gap-2 inter-font">
          <li className="py-[6px] px-[10px]">
            <Link href="/my-entries">Your Entires</Link>
          </li>
          <li className="py-[6px] px-[10px]">
            <Link href="/wall">The Wall</Link>
          </li>
          <li className="italic">
            <Button className="py-1.5 px-2.5 font-medium bg-[#BFABEA] hover:bg-[#a88ce5] rounded-[90px] shadow-[0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#8F8F8F33,inset_0px_-2.4px_0px_0px_#0000001A]">
              Write on the wall
            </Button> 
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
