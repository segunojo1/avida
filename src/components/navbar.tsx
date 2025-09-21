import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";
import CreateCardModal from "./modals/create-card-modal";

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
          <li className="">
            <CreateCardModal />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
