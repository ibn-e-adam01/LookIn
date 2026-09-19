import React, { useState } from 'react'
import { faPlus, faUpRightFromSquare, faWeightScale, faWindowMaximize, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

const RoomUploadPopUp = ({RoomUploadOpen, setRoomUploadOpen}) => {

    const [RoomImageURL, setRoomImageURL] = useState('');
    const [RoomName, setRoomName] = useState('');    
    const [RoomArea, setRoomArea] = useState('');    
    const [RoomFloorMaterial, setRoomFloorMaterial] = useState('');    
    const [RoomCeilingHeight, setRoomCeilingHeight] = useState('');    
    const [RoomWindows, setRoomWindows] = useState('');    
    const [RoomWallFinish, setRoomWallFinish] = useState('');  
    

    const submitRoomByButton = async (e) => {
        e.preventDefault();

        const roomDetails = {
            RoomName,
            RoomArea,
            RoomFloorMaterial,
            RoomCeilingHeight,
            RoomImageURL,
            RoomWallFinish,
            RoomWindows
        }

        const roomResponse = await axios.post('http://localhost:3000/createRoom', roomDetails, {
            headers: {'Content-Type' : 'application/json'}, withCredentials: true
        });

        if(roomResponse?.data?.success == true){
            console.log(roomResponse?.data);
            setRoomUploadOpen(false);
        }
    }


  return (
    <>
    

         
        {RoomUploadOpen == true &&
        <div className='w-full h-screen flex items-center py-7 justify-center absolute z-40 top-0 left-0 bg-[#0000003e]'>


            <div className='UploadCon gap-3 flex  flex-col items-center justify-start lg:w-3/10 md:w-7/10 w-9/10 rounded-lg px-3 py-3 bg-[#fafafa]'>
                <div className='w-full px-3 flex items-start justify-center flex-col'>

                    <div className='w-full flex items-start justify-between'>

                        <h1 className='font-semibold tracking-tight text-lg'>Upload Your Room Details</h1>

                        <button onClick={() => {
                                        setRoomUploadOpen(false);
                                    }} className='cursor-pointer'>
                                    <FontAwesomeIcon className='hover:scale-99 text-md hover:text-zinc-700 '  icon={faXmark}/>
                         </button>
                        

                    </div>
                    <p className='font-semibold tracking-tight text-sm'>Share your room details and make it discoverable for others.</p>

                </div>

            <div className='w-full flex items-center justify-start px-3 py-1.5'>
                <h1 className='font-semibold tracking-tight text-md '>Basic Room Information</h1>
            </div>

            <div className='flex items-center justify-center w-full gap-3 px-3 py-1.5'>

                <div className='flex flex-col items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>Room Name*</h1>
                    <input onChange={(e) => {
                        setRoomName(e.target.value)
                    }} type="text" className='w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' placeholder='E.g, Living Room' value={RoomName} name="" id="" />

                </div>
                <div className='flex flex-col items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>Room Area*</h1>
                    <input onChange={(e) => {
                        setRoomArea(e.target.value)
                    }} type="text" className='w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' placeholder='E.g, 185 sq ft' value={RoomArea} name="" id="" />

                </div>

            </div>

            <div className='w-full flex items-center justify-start px-3 py-1.5'>
                <h1 className='font-semibold tracking-tight text-md '>Room Design Details</h1>
            </div>

              <div className='flex flex-col items-start justify-center w-full gap-1 px-3'>

                    <h1 className='font-semibold tracking-tight text-sm '>Room Flooring Material*</h1>
                    <input onChange={(e) => {
                        setRoomFloorMaterial(e.target.value)
                    }} type="text" className='w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' placeholder='E.g, Engineered Wood' value={RoomFloorMaterial} name="" id="" />

                </div>
              <div className='flex flex-col px-3 items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>Room Wall Finish*</h1>
                    
                    <div className='w-full border-2 border-zinc-200 rounded-lg'>
                    <input onChange={(e) => {
                        setRoomWallFinish(e.target.value)
                    }} type="text" className='w-full px-4  py-1.5  outline-none' value={RoomWallFinish} placeholder='E.g, Warm White Paint' name="" id="" />
                    </div>

                </div>

             <div className='flex items-center justify-center w-full gap-3 px-3 py-1.5'>

                <div className='flex flex-col items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>Room Ceiling Height*</h1>
                    <input onChange={(e) => {
                        setRoomCeilingHeight(e.target.value)
                    }} type="text" className='w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' placeholder='E.g, 10ft' value={RoomCeilingHeight} name="" id="" />

                </div>
                <div className='flex flex-col items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>No. of Windows*</h1>
                    <input onChange={(e) => {
                        setRoomWindows(e.target.value)
                    }} type="text" className='w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' placeholder='E.g, 2, 3...' value={RoomWindows} name="" id="" />

                </div>

            </div>

            <div className='flex flex-col px-3 items-start justify-center w-full gap-1'>
            
                                <h1 className='font-semibold tracking-tight text-sm '>Room Image*</h1>
                                
                                <div className='w-full border-2 border-zinc-200 rounded-lg'>
                                <input onChange={(e) => {
                                    setRoomImageURL(e.target.value)
                                }} type="text" className='w-full px-4  py-1.5  outline-none' placeholder='Room Image Url' value={RoomImageURL} name="" id="" />
                                </div>
                                
                                {RoomImageURL && 
                                <div className='w-30 rounded-lg overflow-hidden flex items-center justify-center px-3 py-3 border border-zinc-200 relative '>
                                    <button onClick={() => {
                                                    setRoomImageURL('');
                                                }} className='absolute top-1 text-lg right-1 cursor-pointer'>
                                                <FontAwesomeIcon className='hover:scale-99 text-md hover:text-zinc-700 '  icon={faXmark}/>
                                     </button>
                                    
                                    <img src={RoomImageURL} alt="" />
                                </div>
            
                                }
            
                       
            
                            </div>

            <div className='px-3 flex w-full'>
            <div className='w-full h-[0.02rem] bg-zinc-200'></div>
            </div>

                <div className='w-full flex items-center justify-between px-3'>

                    <button onClick={() => {
                        setRoomUploadOpen(false);
                    }} className='cursor-pointer rounded-md bg-zinc-200 px-4 py-1.5 font-semibold tracking-tight'>Cancel</button>
                    <button onClick={submitRoomByButton} className='cursor-pointer rounded-md bg-[#111932] text-[#fafafa] px-5 py-1.5 font-semibold tracking-tight'>Upload Room Details</button>
                </div>

            </div>

        </div>
    
        }
    

    
    </>
  )
}

export default RoomUploadPopUp