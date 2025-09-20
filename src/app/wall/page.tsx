import DreamboardWall from '@/components/dreamboard-wall'
import SearchEntries from '@/components/search-entries'
import { sampleDreamcards } from '@/constants'
import React from 'react'

const Wall = () => {
  return (
    <div className="mt-[22px]">
      <main
        className={`bg-[url("/assets/pattern-bg.svg")] bg-white rounded-[30px]`}
      >
        <SearchEntries
          title="The Search Wall 👀"
          description="Search preferred themes, tags, vibes or one of the trending ones......"
        />
        <div className="px-[13px]">
          <DreamboardWall cards={sampleDreamcards}/>
        </div>
      </main>
    </div>
  )
}

export default Wall