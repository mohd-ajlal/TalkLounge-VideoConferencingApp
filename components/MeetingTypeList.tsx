'use client'

import React, { useState } from 'react'
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from 'next/image';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
const MeetingTypeList = () => {


    const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);
  
  
    return (
    <section
    className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'
    >
        {/* <div
        className='bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px]'>
            Box 1
        </div> */}

<HomeCard
        img="/icons/add-meeting.svg"
        className="bg-orange-1"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-600"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-pink-1"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push('/recordings')}
      />
      
    </section>
  )
}

export default MeetingTypeList