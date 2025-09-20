import DreamboardWall from "@/components/dreamboard-wall";
import SearchEntries from "@/components/search-entries";
import { myEntriesDreamcards } from "@/constants";
import React from "react";

const MyEntries = () => {
  return (
    <div className="mt-[22px]">
      <main
        className={`bg-[url("/assets/pattern-bg.svg")] bg-white rounded-[30px]`}
      >
        <SearchEntries
          title="My Entries"
          description="Search your entries......"
        />
        <div className="px-[13px]">
          <DreamboardWall cards={myEntriesDreamcards} />
        </div>
      </main>
    </div>
  );
};

export default MyEntries;
