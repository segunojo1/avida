import React from "react";

const TagPill = ({
  tag,
  selectedTags,
  setSelectedTags,
}: {
  tag: string;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}) => {
  const isActive = selectedTags.includes(tag);
  console.log(isActive);

  const addToSelectedTags = () => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  return (
    <div
      onClick={() => addToSelectedTags()}
      className={`${
        isActive ? "bg-[#000000] text-white" : "bg-[#F7F7F7]"
      } text-[13px]/[18px] cursor-pointer hover:scale-110 transition-all font-medium text-[#737176] px-4 py-2 rounded-[64px] w-fit h-fit items-center justify-cente`}
    >
      # {tag}
    </div>
  );
};

export default TagPill;
