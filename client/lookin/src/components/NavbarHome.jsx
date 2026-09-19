import { faPlay, faTowerObservation, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Bold, Menu } from 'lucide-react';

const NavbarHome = ({HomeMenuIsOpen, setHomeMenuIsOpen, ProjectsClicked, setProjectsClicked, FloorPlanClicked, setFloorPlanClicked,GalleryClicked, setGalleryClicked, MaterialsClicked, setMaterialsClicked, setSettingsClicked, SettingsClicked, navExploreClicked, setnavExploreClicked, navGalleryClicked, setnavGalleryClicked, navMaterialsClicked, setnavMaterialsClicked, navAboutClicked, setnavAboutClicked}) => {
    
  return (
    <>
    
    <nav className='w-full h-auto border-b-2 border-zinc-200 px-3 py-3 flex items-center justify-between'>
        
        <div className='w-full lg:hidden flex items-center gap-8 px-4 text-[#111932] justify-start'>
                    
                    <button className='md:flex hidden' onClick={() => {
                        setHomeMenuIsOpen(!HomeMenuIsOpen);
                    }}>
                    <Menu size={29} color="#111932" fontWeight={Bold} />
                    </button>
                    
                    <div className='flex items-end justify-center'>
                     <FontAwesomeIcon icon={faTowerObservation} className='text-4xl' />
                    <h1 className='text-4xl font-bold tracking-tighter'>LookIn</h1>
                    </div>
        </div>

        <div className='w-full md:hidden flex items-center justify-end px-4'>
        <button onClick={() => {
                        setHomeMenuIsOpen(!HomeMenuIsOpen);
                    }}>
                    <Menu size={29} color="#111932" fontWeight={Bold} />
         </button>
         </div>

        <div className='w-full hidden lg:flex flex-col items-start px-3 justify-center gap-1 text-black'>

            <h1 className='xl:text-xl lg:text-md font-semibold tracking-tighter'>Modern 3BHK Residence</h1>
            <p className='xl:text-sm lg:text-xs text-zinc-600 font-semibold tracking-tighter'>A contemporary home designed for comfort, light and functionality.</p>

        </div>
        <div className='md:flex hidden items-center w-full justify-evenly'>

            <div className='md:flex hidden items-center justify-center gap-10 w-full '>

                <button onClick={(e) => {
                    setnavExploreClicked(true);
                    setnavGalleryClicked(false);
                    setnavMaterialsClicked(false);
                    setnavAboutClicked(false);
                }} className={`text-md font-semibold tracking-tighter hover:text-zinc-700 cursor-pointer ${navExploreClicked == true? 'border-b-3 border-sky-500' : ''}`}>Explore</button>
                <button onClick={(e) => {
                    setnavGalleryClicked(true);
                    setnavExploreClicked(false);
                    setnavMaterialsClicked(false);
                    setnavAboutClicked(false);
                }} className={`text-md font-semibold tracking-tighter hover:text-zinc-700 cursor-pointer ${navGalleryClicked == true? 'border-b-3 border-sky-500' : ''}`}>Gallery</button>
                <button onClick={(e) => {
                    setnavMaterialsClicked(true);
                    setnavGalleryClicked(false);
                    setnavExploreClicked(false);
                    setnavAboutClicked(false);
                }} className={`text-md font-semibold tracking-tighter hover:text-zinc-700 cursor-pointer ${navMaterialsClicked == true? 'border-b-3 border-sky-500' : ''}`}>Materials</button>
                <button onClick={(e) => {
                    setnavAboutClicked(true);
                    setnavGalleryClicked(false);
                    setnavMaterialsClicked(false);
                    setnavExploreClicked(false);
                }} className={`hidden xl:flex text-md font-semibold tracking-tighter hover:text-zinc-700 cursor-pointer ${navAboutClicked == true? 'border-b-3 border-sky-500' : ''}`}>About</button>
                <button onClick={(e) => {
                    setnavAboutClicked(true);
                    setnavGalleryClicked(false);
                    setnavMaterialsClicked(false);
                    setnavExploreClicked(false);
                }} className={`xl:hidden flex text-md font-semibold tracking-tighter hover:text-zinc-700 cursor-pointer ${navAboutClicked == true? 'border-b-3 border-sky-500' : ''}`}><FontAwesomeIcon icon={faUser}/></button>

            </div>

            <div className='xl:flex items-center justify-center w-full hidden'>

            <button className='text-md text-[#fafafa] px-4.5 rounded-4xl py-1.5 font-semibold tracking-tighter bg-[#111923] cursor-pointer hover:bg-[#22272b]'><FontAwesomeIcon icon={faPlay}/> Presentation Mode</button>

            </div>

        </div>
    </nav>
    
    </>
  )
}

export default NavbarHome