import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesPacking, faGear, faHouse, faPhotoFilm, faSitemap, faTowerObservation } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'

const SidebarHome = ({ProjectsClicked, setProjectsClicked, FloorPlanClicked, setFloorPlanClicked,GalleryClicked, setGalleryClicked, MaterialsClicked, setMaterialsClicked, setSettingsClicked, SettingsClicked, navExploreClicked, setnavExploreClicked, navGalleryClicked, setnavGalleryClicked, navMaterialsClicked, setnavMaterialsClicked, navAboutClicked, setnavAboutClicked}) => {
    
  return (
    <>
    
    <aside className='h-screen bg-[#111923] lg:flex hidden flex-col items-center justify-between px-3 py-5 md:relative md:z-30 lg:w-3/10 xl:w-2/10'>

    
    
    <div className='w-full flex flex-col items-center justify-center gap-5'>

        <div className='w-full flex items-center text-white justify-center pr-4'>
            <FontAwesomeIcon icon={faTowerObservation} className='text-4xl' />
            <h1 className='text-4xl font-bold tracking-tighter'>LookIn</h1>
        </div>

        <div className='h-[0.02rem] bg-zinc-800 w-full'></div>

    <div className='w-full flex flex-col items-center justify-center gap-3'>

         <button onClick={(e) => {
            setProjectsClicked(true);
            setGalleryClicked(false);
            setMaterialsClicked(false);
            setFloorPlanClicked(false);
            setSettingsClicked(false);
            setnavExploreClicked(false);
         }} className={`w-full flex items-center py-2 rounded-sm text-white hover:bg-zinc-800 hover:transition-0.001 cursor-pointer justify-start gap-2 px-10 ${ProjectsClicked == true? 'bg-zinc-800 border-l-3 border-sky-500' : ''}`}>
            <FontAwesomeIcon className='text-2xl' icon={faHouse} />
            <h1 className='text-xl font-semibold tracking-tighter'>Projects</h1>
        </button>
         <button onClick={(e) => {
            setFloorPlanClicked(true);
            setGalleryClicked(false);
            setMaterialsClicked(false);
            setProjectsClicked(false);
            setSettingsClicked(false);
            setnavExploreClicked(true);
            setnavGalleryClicked(false);
            setnavMaterialsClicked(false);
            setnavAboutClicked(false);
         }} className={`w-full flex items-center py-2 rounded-sm text-white hover:bg-zinc-800 hover:transition-0.001 cursor-pointer justify-start gap-2 px-10 ${FloorPlanClicked == true? 'bg-zinc-800 border-l-3 border-sky-500' : ''}`}>
            <FontAwesomeIcon className='text-2xl' icon={faSitemap} />
            <h1 className='text-xl font-semibold tracking-tighter'>Floor Plan</h1>
        </button>
         <button onClick={(e) => {
            setGalleryClicked(true);
            setProjectsClicked(false);
            setMaterialsClicked(false);
            setFloorPlanClicked(false);
            setSettingsClicked(false);
            setnavGalleryClicked(true);
            setnavExploreClicked(false);
            setnavMaterialsClicked(false);
            setnavAboutClicked(false);
         }} className={`w-full flex items-center py-2 rounded-sm text-white hover:bg-zinc-800 hover:transition-0.001 cursor-pointer justify-start gap-2 px-10 ${GalleryClicked == true? 'bg-zinc-800 border-l-3 border-sky-500' : ''}`}>
            <FontAwesomeIcon icon={faPhotoFilm} className='text-2xl' />
            <h1 className='text-xl font-semibold tracking-tighter'>Gallery</h1>
        </button>
         <button onClick={(e) => {
            setMaterialsClicked(true);
            setGalleryClicked(false);
            setProjectsClicked(false);
            setFloorPlanClicked(false);
            setSettingsClicked(false);
         }} className={`w-full flex items-center py-2 rounded-sm text-white hover:bg-zinc-800 hover:transition-0.001 cursor-pointer justify-start gap-2 px-10 ${MaterialsClicked == true? 'bg-zinc-800 border-l-3 border-sky-500' : ''}`}>
            <FontAwesomeIcon className='text-2xl' icon={faBoxesPacking} />
            <h1 className='text-xl font-semibold tracking-tighter'>Materials</h1>
        </button>

    </div>

    </div>

        <button onClick={(e) => {
            setSettingsClicked(true);
            setGalleryClicked(false);
            setMaterialsClicked(false);
            setFloorPlanClicked(false);
            setProjectsClicked(false);
         }} className={`w-full flex items-center py-2 rounded-sm text-white hover:bg-zinc-800 hover:transition-0.001 cursor-pointer justify-start gap-2 px-10 ${SettingsClicked == true? 'bg-zinc-800 border-l-3 border-sky-500' : ''}`} >
            <FontAwesomeIcon className='text-2xl' icon={faGear} />
            <h1 className='text-xl font-semibold tracking-tighter'>Settings</h1>
        </button>
    
    </aside>
    
    </>
  )
}

export default SidebarHome