"use client";

import DreamboardWall from "@/components/dreamboard-wall";
import SearchEntries from "@/components/search-entries";
import { myEntriesDreamcards } from "@/constants";
import { fetchCards } from "@/services/dreamcard.service";
import { useAppStore } from "@/store/app.store";
import React, { useEffect, useState } from "react";

const MyEntries = () => {
  const {loadingFetchCards, setLoadingFetchCards, myEntries, setMyEntries} = useAppStore();

  useEffect(() => {
    
    const getCards = async () => {
      try {
        setLoadingFetchCards(true);
        const res = await fetchCards();
        setMyEntries(res);
        console.log(res);
        
        setLoadingFetchCards(false);
      } catch (error) {
        console.log(error);
      }
    };

    getCards();
  }, []);
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
          {loadingFetchCards ? (
            <p className="text-center text-sm text-gray-500 py-10">
              Loading your dreams...
            </p>
          ) : myEntries?.length > 0 ? (
            <DreamboardWall cards={myEntries} />
          ) : (
            <p className="text-center text-sm text-gray-400 py-10">
              You haven’t added any dreamcards yet ✨
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyEntries;
