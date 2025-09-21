import React, { useState } from 'react'

const VibePill = ({tag, color, selectedVibe, setSelectedVibe}: {tag: string, color: string, selectedVibe: string, setSelectedVibe: (vibe: string) => void}) => {
  // const [activeVibe, setActiveVibe] = useState("funny");

  const handleClick = () => {
    setSelectedVibe(tag);
  };
  return (
    <div onClick={handleClick} style={{
        backgroundColor: color
    }} className={`${selectedVibe == tag ? "border-[#000000] border-2" : ""} cursor-pointer text-[13px]/[18px] font-medium text-[#000000] px-4 py-2 rounded-[64px] w-fit h-fit items-center justify-center`}>
      {tag}
    </div>
  )
}

export default VibePill