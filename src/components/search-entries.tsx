"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useAppStore } from "@/store/app.store";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  description: string;
}

const CATEGORIES = [
  { tag: "All", color: "#F1A62D" },
  { tag: "Adventure", color: "#C7B9FF" },
  { tag: "Career", color: "#FFEBA6" },
  { tag: "Travel", color: "#CFFF98" },
  { tag: "Personal Growth", color: "#FFB6C1" },
  { tag: "Philanthropy", color: "#98FB98" },
  { tag: "Health", color: "#87CEEB" },
  { tag: "Education", color: "#DDA0DD" },
  { tag: "Finance", color: "#FFD700" },
  { tag: "Relationships", color: "#FFA07A" },
];

const SearchEntries = ({ title, description }: Props) => {
  const { searchQuery, setSearchQuery, setCategoryFilter } = useAppStore();
  const [activeCategory, setActiveCategory] = useState("All");

  // Update the category filter in the store when it changes
  useEffect(() => {
    setCategoryFilter(activeCategory === "All" ? "" : activeCategory);
  }, [activeCategory, setCategoryFilter]);

  return (
    <div className="flex flex-col items-center pt-[156px] pb-[65px]">
      <h1 className="italic text-[48px]/[24px] font-medium mb-[15px]">
        {title}
      </h1>
      <p className="text-[#3C3C4399] font-normal text-[17px]/[22px] text-center max-w-2xl px-4">
        {description}
      </p>
      <div className="flex relative max-w-[695px] w-full mt-[27px]">
        <Image
          src="/assets/search-icon.svg"
          alt="search icon"
          className="absolute left-4 top-0 bottom-0 my-auto"
          width={20}
          height={20}
        />
        <Input
          placeholder="Search by dream, author, or category..."
          className="border w-full border-[#D0D5DD] font-serif bg-white rounded-[90px] py-[14px] pl-[40px] pr-[16px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full max-w-4xl mt-8 px-4 inter-font">
        <p className="text-[13px]/[16px] font-normal mb-3 text-center">Filter by category:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(({ tag, color }) => (
            <button
              key={tag}
              className={`cursor-pointer hover:scale-105 transition-all duration-200 py-[7px] px-4 rounded-[64px] text-sm font-medium whitespace-nowrap ${
                activeCategory === tag ? 'ring-2 ring-offset-2 ring-opacity-50' : ''
              }`}
              style={{
                backgroundColor: color,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
              onClick={() => setActiveCategory(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchEntries;
