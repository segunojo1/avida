import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[22px]">
      <main className={`bg-[url("/assets/pattern-bg.svg")]`}>
        <div className="flex flex-col items-center pt-[156px]">
          <h1 className="italic text-[48px]/[24px] font-medium mb-[11px]">
            The Search Wall 👀
          </h1>
          <p className="text-[#3C3C4399] font-normal text-[17px]/[22px]">
            Search preferred themes, tags, vibes or one of the trending
            ones......
          </p>
          <div className="flex relative max-w-[695px] w-full mt-[27px]">
            <Image
              src="/assets/search-icon.svg"
              alt="search icon"
              className="absolute left-4 top-0 bottom-0 my-auto"
              width={20}
              height={20}
            />
            <Input className="border w-full border-[#D0D5DD]  bg-white rounded-[90px] py-[14px] pl-[40px] pr-[16px]" />
          </div>
        </div>
      </main>
    </div>
  );
}
