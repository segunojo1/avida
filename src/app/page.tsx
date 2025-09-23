'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="mt-[22px]">
      <main
        className={`bg-[url("/assets/pattern-bg.svg")] bg-white rounded-[30px]`}
      >
       <div className="flex flex-col items-center pt-[156px] pb-[65px]">
      <h1 className="italic text-[48px]/[24px] font-medium mb-[15px]">
        The Search Wall 👀
      </h1>
      <p className="text-[#3C3C4399] font-normal text-[17px]/[22px] text-center max-w-2xl px-4">
        Search preferred themes, tags, vibes or one of the trending ones......
      </p>
      </div>
        <div className="px-[13px] inter-font flex flex-col items-center pb-16">
          <Link 
            href="/wall"
            className="mt-12 px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explore the Wall
          </Link>
          <p className="mt-6 text-gray-500 text-center max-w-md px-4">
            Discover and share your dreams, aspirations, and inspirations with our community
          </p>
        </div>
      </main>
    </div>
  );
}
