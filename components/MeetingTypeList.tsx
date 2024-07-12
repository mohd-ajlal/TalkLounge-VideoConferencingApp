'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from "@/components/ui/use-toast"



const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};


const MeetingTypeList = () => {

  const { toast } = useToast()


  const router = useRouter();
  const [meetingState, setMeetingState] = 
  useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();

    const { user } = useUser();
    const client = useStreamVideoClient();

    const [values, setValues] = useState(initialValues);

    const [callDetail, setCallDetail] = useState<Call>();
 
  const createMeeting = async () =>{
      if(!client || !user) return;


      try {

        if(!values.dateTime){
          toast({
            title: "Please select a date and time for the meeting", 
          })

          return;
        }
        const id = crypto.randomUUID();
        const call = client.call('default', id);

        if (!call) throw new Error('Failed to create meeting');
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: 'Meeting Created',
      });

      } catch (error) {
        console.log(error);
        toast({
          title: "Failed to create meeting please try again", 
        })
      }
  }
  
  
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
        title="New Meeting"
        description="Start an instant meeting"
        containerClassName="bg-orange-1"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        containerClassName="bg-blue-600"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        containerClassName="bg-pink-1"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        containerClassName="bg-yellow-1"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      
      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />

    </section>
  )
}

export default MeetingTypeList