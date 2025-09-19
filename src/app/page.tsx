import DreamboardWall from "@/components/dreamboard-wall";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  const SEARCH_FILTERS = [
    { tag: "Funny", color: "#F1A62D" },
    { tag: "Wholesome", color: "#C7B9FF" },
    { tag: "Challenging", color: "#FFEBA6" },
    { tag: "Inspiring", color: "#CFFF98" },
  ];

  return (
    <div className="mt-[22px]">
      <main className={`bg-[url("/assets/pattern-bg.svg")] bg-white rounded-[30px]`}>
        <div className="flex flex-col items-center pt-[156px] pb-[65px]">
          <h1 className="italic text-[48px]/[24px] font-medium mb-[15px]">
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
            <Input placeholder="Search dreamboard.." className="border w-full border-[#D0D5DD] font-serif  bg-white rounded-[90px] py-[14px] pl-[40px] pr-[16px]" />
          </div>
          <div className="flex items-center gap-3 mt-[27px] inter-font">
            <p className="text-[13px]/[16px] font-normal">Filter Search:</p>
            <div className=" gap-2 flex font-medium text-[13px]/[18px]">
              {SEARCH_FILTERS.map(({tag, color}: {tag: string, color: string}) => (
                <div key={tag} className={`cursor-pointer hover:scale-105 transition-1000 py-[7px] px-4 rounded-[64px] bg-[#F1A62D]`} style={
                  {
                    backgroundColor: color
                  }
                } >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <DreamboardWall />
        </div>
      </main>
    </div>
  );
}
