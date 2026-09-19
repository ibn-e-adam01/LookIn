import React, { useState } from 'react'
import { faUpRightFromSquare, faWeightScale, faWindowMaximize, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarHome from './SidebarHome';

const MainHome = ({HomeMenuIsOpen, setHomeMenuIsOpen, RoomClicked, setRoomClicked, ProjectsClicked, setProjectsClicked, FloorPlanClicked, setFloorPlanClicked,GalleryClicked, setGalleryClicked, MaterialsClicked, setMaterialsClicked, setSettingsClicked, SettingsClicked}) => {
    const [FPClickedMain, setFPClickedMain] = useState(true);
    const [The3DClickedMain, setThe3DClickedMain] = useState(false);
    const [MiniComponentOpenMain, setMiniComponentOpenMain] = useState(true);
  return (
    <>
    
    
    <main className='w-full h-screen flex px-3 py-3 flex-col items-center justify-start gap-3'>

    {HomeMenuIsOpen == true &&
        
        <div className='h-10/10 absolute z-50  lg:hidden flex w-full items-center justify-center bg-[#00000041]'>

            <SidebarHome />

        </div>
    
    }

    <div className='w-full lg:flex-row flex flex-col items-center justify-center gap-3'>

        <div className='w-full bg-zinc-100 rounded-xl border-2 border-zinc-200 h-full'>

    <div className='w-full flex items-center justify-start px-6 py-5'>

        <div className='flex w-auto items-center justify-center rounded-4xl text-md font-semibold tracking-tighter  bg-zinc-200'>
        <button onClick={(e) => {
            setFPClickedMain(true);
            setThe3DClickedMain(false);
            setMiniComponentOpenMain(true);
        }} className={`${FPClickedMain == true? 'bg-[#111923] text-[#fafafa] pr-5' : ''} cursor-pointer px-4 py-1 rounded-4xl`}>Floor Plan</button>
        <button onClick={(e) => {
            setThe3DClickedMain(true);
            setFPClickedMain(false);
            setMiniComponentOpenMain(false);
        }} className={`${The3DClickedMain == true? 'bg-[#111923] text-[#fafafa] pl-5' : ''} cursor-pointer px-4 py-1 rounded-4xl`}>3D View</button>
        </div>

    </div>

        {FPClickedMain &&
        <div className='Architecture w-full md:flex md:items-center lg:justify-start md:justify-center relative'>

            <button onClick={() => {
                setRoomClicked("Living Room");
                setMiniComponentOpenMain(true);
            }} className={` absolute z-20 xl:top-[54%] xl:left-[13%] md:top-[54%] md:left-[30.5%] lg:top-[54%] lg:left-[21%] 2xl:top-[57%] 2xl:left-[26%] top-[49%] left-[11%] px-5.5 py-2  cursor-pointer hover:bg-[#22272b] text-[#fafafa] font-semibold tracking-tight rounded-4xl ${RoomClicked == 'Living Room'? 'bg-[#22272b]' : 'bg-[#111932]'}`}>Living Room</button>
            <button onClick={() => {
                setRoomClicked("Bed Room 01");
                setMiniComponentOpenMain(true);
            }}  className={`${RoomClicked == 'Bed Room 01'? 'bg-[#22272b]' : 'bg-[#111932]'} absolute z-20 xl:top-[22%] xl:left-[14%] lg:top-[23%] lg:left-[21%] md:top-[23%] md:left-[30.5%] 2xl:top-[27%] 2xl:left-[30%]
            top-[17%] left-[8%] px-5.5 py-2 bg-[#111932] cursor-pointer hover:bg-[#22272b] text-[#fafafa] font-semibold tracking-tight rounded-4xl`}>Bed Room 01</button>
            <button  onClick={() => {
                setRoomClicked("Bed Room 02");
                setMiniComponentOpenMain(true);
            }} className={`${RoomClicked == 'Bed Room 02'? 'bg-[#22272b]' : 'bg-[#111932]'} absolute z-20 xl:top-[23%] xl:left-[41%] md:top-[23%] md:left-[58%] 2xl:top-[26%] 2xl:left-[70%] top-[19%] left-[53%] px-5.5 py-2 bg-[#111932] cursor-pointer hover:bg-[#22272b] text-[#fafafa] font-semibold tracking-tight rounded-4xl`}>Bed Room 02</button>
            <button  onClick={() => {
                setRoomClicked("Kitchen");
                setMiniComponentOpenMain(true);
            }} className={`${RoomClicked == 'Kitchen'? 'bg-[#22272b]' : 'bg-[#111932]'} absolute z-20 xl:top-[57%] xl:left-[43%] md:top-[55%] md:left-[60%] top-[53%] lg:top-[56%] 2xl:top-[60%] 2xl:left-[71%] lg:left-[63%] left-[57%] px-5.5 py-2 bg-[#111932] cursor-pointer hover:bg-[#22272b] text-[#fafafa] font-semibold tracking-tight rounded-4xl`}>Kitchen</button>

            <img src="https://5.imimg.com/data5/RA/FH/KU/SELLER-36928795/2bhk-2-jpg-500x500.jpg" alt="" className='mix-blend-multiply 2xl:w-full 2xl:h-full object-full' />

        </div>
    } {The3DClickedMain &&
    
        <div className='w-full h-screen flex items-start justify-center text-red-600 font-semibold tracking-tighter'>Interactive 3D visualization is coming soon...</div>
    
    }
    </div>
    

        {MiniComponentOpenMain == true && RoomClicked &&
          <div className='MiniComponent lg:static absolute z-50 top-50 mx-1 bg-[#fafafa]  border-2 border-zinc-200 rounded-xl w-9/10 md:w-6/10 lg:w-6/10 h-screen  flex flex-col items-center gap-2 justify-between px-4 py-2'>

        <div className='w-full items-center flex justify-between px-3 py-1.5 font-semibold tracking-tighter text-xl'>
            <h1>{RoomClicked}</h1>
            <button onClick={() => {
                setMiniComponentOpenMain(false);
            }} className='cursor-pointer lg:hidden flex'>
            <FontAwesomeIcon className='hover:scale-99 text-lg hover:text-zinc-700 '  icon={faXmark}/>
            </button>
        </div>

        <div className='w-full rounded-xl h-4/10 md:h-5/10 lg:h-4/11 2xl:h-5/10 flex items-center justify-center overflow-hidden'>

            {RoomClicked == 'Living Room' &&
            <img className='object-fill w-full h-full' src="https://cdn.home-designing.com/wp-content/uploads/2025/04/simple-wall-mounted-tv-600x450.jpg" alt="" />
            }
            {RoomClicked == 'Bed Room 01' &&
            <img className='object-fill w-full h-full' src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2022-1664872805-f0ijv/mbr-1664872893-qeyQW/180-1666888757-kpZGT.jpg" alt="" />
            }
            {RoomClicked == 'Bed Room 02' &&
            <img className='object-fill w-full h-full' src="https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/09/Indulge-In-Opulence-50-Luxurious-Bedroom-Decor-Ideas-1-1024x788.jpg" alt="" />
            }
            {RoomClicked == 'Kitchen' &&
            <img className='object-fill w-full h-full' src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2022-1664872805-f0ijv/ki-1664875090-K8xX9/96-1668924401-bagnm.jpg" alt="" />
            }

        </div>

        <div className='flex items-center justify-start w-full gap-4 px-3 py-0.5 font-semibold tracking-tight text-sm text-zinc-700'>
            <div className='flex items-center justify-center gap-1'>
                <FontAwesomeIcon icon={faWeightScale}/> 185 sq ft
            </div>
            <div className='flex items-center justify-center gap-1'>
                <FontAwesomeIcon icon={faWindowMaximize} /> 2 Windows
            </div>
        </div>

        <div className='w-full h-[0.02rem] bg-zinc-200'></div>

        <div className='w-full px-0.5 text-black'>
            <h1 className='font-semibold tracking-tight '>Design Details</h1>
        </div>

        <div className='flex w-full font-semibold tracking-tight text-sm text-zinc-700 items-center justify-between px-1'>
            <h1>Flooring</h1>
            <h1>Engineering Wood</h1>
        </div>

        <div className='w-full h-[0.02rem] bg-zinc-200 mt-0.5'></div>
        <div className='flex w-full font-semibold tracking-tight text-sm text-zinc-700 items-center justify-between px-1'>
            <h1>Wall Finish</h1>
            <h1>Warm White Paint</h1>
        </div>

        <div className='w-full h-[0.02rem] xl:hidden lg:flex bg-zinc-200 mt-0.5'></div>
        <div className='flex w-full font-semibold xl:hidden lg:flex tracking-tight text-sm text-zinc-700 items-center justify-between px-1'>
            <h1>Lighting</h1>
            <h1>Recessed LED</h1>
        </div>

        <div className='w-full h-[0.02rem] bg-zinc-200 mt-0.5'></div>
        <div className='flex w-full font-semibold tracking-tight text-sm text-zinc-700 items-center justify-between px-1'>
            <h1>Ceiling Height</h1>
            <h1>10ft</h1>
        </div>

        <button className='w-full px-3 py-2 font-semibold tracking-tight mt-4 cursor-pointer hover:bg-[#22272b] rounded-md bg-[#111932] text-[#fafafa]'> <FontAwesomeIcon icon={faUpRightFromSquare} /> View Render</button>


    </div>
    }
    
    </div>
    

    </main>
    
    </>
  )
}

export default MainHome