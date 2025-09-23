"use client";
import Background from "@/components/background";
import DreamboardWall from "@/components/dreamboard-wall";
import SearchEntries from "@/components/search-entries";
import { sampleDreamcards } from "@/constants";
import { fetchAllCards, fetchCards } from "@/services/dreamcard.service";
import { useAppStore } from "@/store/app.store";
import { useEffect, useRef } from "react";

export default function Page() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { setLoadingFetchCards, loadingFetchCards, setMyEntries, allEntries, setAllEntries } =
    useAppStore();

  useEffect(() => {
    const container = document.getElementById("glow-container");

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current && container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
      }
    };

    container?.addEventListener("mousemove", handleMouseMove);
    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const getCards = async () => {
      try {
        setLoadingFetchCards(true);
        const res = await fetchAllCards();
        setAllEntries(res);
        console.log(res);

        setLoadingFetchCards(false);
      } catch (error) {
        console.log(error);
      }
    };

    getCards();
  }, []);

  return (
    <main className="relative min-h-screen mt-[22px]">
      <main className="relative  bg-white rounded-[30px] overflow-hidden bg-[url('/assets/pattern-bg.svg')]">
        <Background>
          <SearchEntries
            title="The Search Wall 👀"
            description="Search preferred themes, tags, vibes or one of the trending ones......"
          />
          <div className="px-[13px]">
            {loadingFetchCards ? (
              <p className="text-center text-sm text-gray-500 py-10">
                Loading dreamcards...
              </p>
            ) : allEntries?.length > 0 ? (
              <DreamboardWall cards={allEntries} />
            ) : (
              <p className="text-center text-sm text-gray-400 py-10">
                No dreamcards available yet ✨
              </p>
            )}
          </div>
        </Background>
      </main>
    </main>
  );
}
