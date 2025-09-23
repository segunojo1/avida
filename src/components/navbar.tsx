"use client";

import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreateCardModal from "./modals/create-card-modal";
import SignIn from "./sign-in";
import { Lock } from "lucide-react";
import { useSession } from "next-auth/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const linkClasses = (path: string) =>
    `py-[6px] px-[10px] rounded-md transition ${
      pathname === path ? "text-[#a88ce5]" : "hover:bg-gray-100"
    }`;

  return (
    <header className="flex min-w-full bg-[#FFFFFF] rounded-[50px]">
      <div className="flex items-center justify-between py-[18px] px-[84px] w-full">
        <Logo />
        <ul className="text-[16px]/[24px] font-semibold flex items-center gap-4 inter-font">
          <li>
            <SignIn />
          </li>

          {/* Locked/Unlocked "Your Entries" */}
          <li className="flex items-center gap-1">
            {session ? (
              <Link href="/my-entries" className={linkClasses("/my-entries")}>
                Your Entries
              </Link>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex items-center text-gray-400 cursor-not-allowed">
                      <Lock width={14} className="mr-1" />
                      Your Entries
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sign in to access your entries</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </li>

          <li>
            <Link href="/wall" className={linkClasses("/wall")}>
              The Wall
            </Link>
          </li>
          <li>
            <CreateCardModal />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
