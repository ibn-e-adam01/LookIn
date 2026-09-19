import React, { useState } from 'react'
import { faPlus, faUpRightFromSquare, faWeightScale, faWindowMaximize, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoomUploadPopUp from './RoomUploadPopUp';
import axios from 'axios';
import { useEffect } from 'react';

const ProjectsMainHome = ({UploadOpen, setUploadOpen, Residences, setResidences}) => {
    const [HouseImageURL, setHouseImageURL] = useState('');
    const [RoomUploadOpen, setRoomUploadOpen] = useState(false);

    const [ProjectTitle, setProjectTitle] = useState('');
    const [PropertyType, setPropertyType] = useState('');
    const [ShortDes, setShortDes] = useState('');
    const [ArchitectName, setArchitectName] = useState('');
    const [NameError, setNameError] = useState('');
    const [TitleError, setTitleError] = useState('');
    const [URLError, setURLError] = useState('');

    const submitResidenceByButton = async (e) => {
        e.preventDefault();

        const residenceDetails = {
            ArchitectName,
            ProjectTitle,
            PropertyType,
            ShortDes,
            HouseImageURL
        }

        const res = await axios.post('http://localhost:3000/createResidence', residenceDetails, {
            headers: {'Content-Type' : 'application/json'}, withCredentials: true
        });


        if(res?.data?.success == false){
            setNameError(res?.data?.message1);
            setTitleError(res?.data?.message2);
            setURLError(res?.data?.message3);
        }

        if(res?.data?.success == true){
            console.log(res?.data);
            setUploadOpen(false);
            setArchitectName('');
            setProjectTitle('');
            setPropertyType('');
            setHouseImageURL('');
            setShortDes('');
            setResidences(prev => [...prev, res?.data?.residenceCreated]);
        }
    }

    useEffect(() => {

        const getProjectsData = async () => {

            let res = await axios.get('http://localhost:3000/getProjectsData', {
                withCredentials: true
            });

            if(res?.data?.success == true){
                console.log(res?.data);
                setResidences(res?.data?.residences || []);
            }


        }

        getProjectsData();


    }, [])

  return (
    <>
    
    <div className='w-full px-3 py-3 h-screen flex flex-col items-center justify-start gap-1'>
        <div className='w-full flex items-center justify-between px-5 py-1.5 font-semibold tracking-tighter text-zinc-950'>
        
            <h1 className='text-xl'>Projects</h1>
            <button onClick={() => {
                setUploadOpen(true);
            }} className='bg-[#111932] text-[#fafafa] px-6 cursor-pointer py-1.5 rounded-4xl'><FontAwesomeIcon className='font-bold' icon={faPlus}/> Upload Design</button>
        </div>


        {UploadOpen == true &&
        <div className='w-full h-screen flex items-center py-7 justify-center absolute z-40 top-0 left-0 bg-[#0000003e]'>


            <div className='UploadCon gap-3 flex  flex-col items-center justify-start lg:w-4/10 md:w-7/10 w-9/10 rounded-lg px-3 py-3 bg-[#fafafa]'>
                <div className='w-full px-3 flex items-start justify-center flex-col'>

                    <div className='w-full flex items-start justify-between'>

                        <h1 className='font-semibold tracking-tight text-lg'>Upload Your Design</h1>

                        <button onClick={() => {
                                        setUploadOpen(false);
                                    }} className='cursor-pointer'>
                                    <FontAwesomeIcon className='hover:scale-99 text-md hover:text-zinc-700 '  icon={faXmark}/>
                         </button>
                        

                    </div>
                    <p className='font-semibold tracking-tight text-sm'>Share your architecture design and make it discoverable for others.</p>

                </div>


           

            <div className='w-full flex items-center justify-start px-3 py-1.5'>
                <h1 className='font-semibold tracking-tight text-md '>Basic Information</h1>
            </div>

             <div className='flex flex-col items-start justify-center w-full gap-1 px-3'>

                    <h1 className='font-semibold tracking-tight text-sm '>Architect Name*</h1>
                    <input onChange={(e) => {
                        setArchitectName(e.target.value)
                    }} type="text" className='w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' value={ArchitectName} placeholder="Enter Architect's Name" name="" id="" />

                    <div className='w-full flex items-center px-1.5 justify-start'>
                        <h1 className='text-red-600 font-semibold tracking-tight text-xs'>{NameError}</h1>
                    </div>

            </div>

            <div className='flex items-center justify-center w-full gap-3 px-3 py-1.5'>

                <div className='flex flex-col items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>Project Title*</h1>
                    <input onChange={(e) => {
                        setProjectTitle(e.target.value)
                    }} type="text" className='w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' value={ProjectTitle} placeholder='E.g, Modern 3BHK Residence' name="" id="" />

                    <div className='w-full flex items-center px-1.5 justify-start'>
                        <h1 className='text-red-600 font-semibold tracking-tight text-xs'>{TitleError}</h1>
                    </div>

                </div>
                <div className='flex flex-col items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>Property Type (optional)</h1>
                    <input onChange={(e) => {
                        setPropertyType(e.target.value)
                    }} type="text" className='w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' value={PropertyType} placeholder='E.g, Self-Occupied Property' name="" id="" />

                </div>

            </div>

              <div className='flex flex-col px-3 items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>Short Description (optional)</h1>
                    <textarea onChange={(e) => {
                        setShortDes(e.target.value)
                    }} type="text" className='resize-none w-full px-4 border-2 border-zinc-200 py-1.5 rounded-lg outline-none' placeholder='Briefly describe your design, concept, and key highlights... ' value={ShortDes} name="" id="" />

                </div>
              <div className='flex flex-col px-3 items-start justify-center w-full gap-1'>

                    <h1 className='font-semibold tracking-tight text-sm '>Floor Plan Image*</h1>
                    
                    <div className='w-full border-2 border-zinc-200 rounded-lg'>
                    <input onChange={(e) => {
                        setHouseImageURL(e.target.value)
                    }} type="text" className='w-full px-4  py-1.5  outline-none' placeholder='Image Url' value={HouseImageURL} name="" id="" />
                    </div>

                    <div className='w-full flex items-center px-1.5 justify-start'>
                        <h1 className='text-red-600 font-semibold tracking-tight text-xs'>{URLError}</h1>
                    </div>
                    
                    {HouseImageURL && 
                    <div className='w-30 rounded-lg overflow-hidden flex items-center justify-center px-3 py-3 border border-zinc-200 relative '>
                        <button onClick={() => {
                                        
                                    }} className='absolute top-1 text-lg right-1 cursor-pointer'>
                                    <FontAwesomeIcon className='hover:scale-99 text-md hover:text-zinc-700 '  icon={faXmark}/>
                         </button>
                        
                        <img src={HouseImageURL} alt="" />
                    </div>

                    }
                    

           

                </div>

            <div className='w-full flex items-center justify-start px-3 gap-1 py-1.5'>
                <h1 className='font-semibold tracking-tight text-md '>Rooms </h1>
                <p className='font-semibold tracking-tight text-xs text-zinc-700'>(Add details to each room)</p>
            </div>


            {RoomUploadOpen == true &&
            
            <RoomUploadPopUp designId={designId} RoomUploadOpen={RoomUploadOpen} setRoomUploadOpen={setRoomUploadOpen}/>
            
            }

        <div className='w-full px-3'>

            <button onClick={() => {
                setRoomUploadOpen(true);
            }} className='w-full cursor-pointer border-2 border-[#111923] py-1.5 rounded-md font-semibold tracking-tight text-[#111932] bg-transparent'><FontAwesomeIcon icon={faPlus}/> Add A Room</button>
        
        </div>

            <div className='px-3 flex w-full'>
            <div className='w-full h-[0.02rem] bg-zinc-200'></div>
            </div>

                <div className='w-full flex items-center justify-between px-3'>

                    <button onClick={() => {
                        setUploadOpen(false);
                    }} className='rounded-md cursor-pointer bg-zinc-200 px-4 py-1.5 font-semibold tracking-tight'>Cancel</button>
                    <button onClick={submitResidenceByButton} className='rounded-md bg-[#111932] text-[#fafafa] px-5 py-1.5 font-semibold cursor-pointer tracking-tight'>Upload Design</button>
                </div>

            </div>

        </div>
    
        }


        
        <div className='DesignsCon mt-3 grid xl:grid-cols-5 px-3 lg:grid-cols-4 md:grid-cols-3 items-start justify-center w-full h-screen gap-6 my-3'>

            {Residences.length > 0 && Residences.map((residence) => (

        <div onClick={() => {

        }} key={residence._id} className='cursor-pointer hover:border hover:border-[#111932] active:border active:border-[#111932] Design w-auto md:h-80 xl:h-70 lg:h-65 2xl:h-140 h-105 flex rounded-lg flex-col items-center justify-center'>
            <div className='w-full flex h-full items-center justify-center rounded-t-lg overflow-hidden'>
                <img className='object-fill w-full h-full' src={residence?.residenceImage} alt="" />
            </div>
            <div className='w-full rounded-b-lg px-4  bg-zinc-100 h-1/2 flex flex-col items-start justify-center'>
                <h1 className='font-semibold tracking-tight text-lg'>{residence?.projectTitle}</h1>
                <div className=' flex text-zinc-700 font-semibold tracking-tight text-sm items-center justify-center gap-1.5'>
                    <h1>{residence?.designer}</h1>
                    <h1 className='text-2xl'>·</h1>
                    <h1>{(residence?.rooms).length} rooms</h1>
                </div>

            </div>
    </div>
    ))}
        </div>
        
    </div>
    
    
    </>
  )
}

export default ProjectsMainHome