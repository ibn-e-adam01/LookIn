import React, { useState } from 'react'
import SidebarHome from '../components/SidebarHome'
import NavbarHome from '../components/NavbarHome'
import MainHome from '../components/MainHome'
import ProjectsMainHome from '../components/ProjectsMainHome'
import GalleryMain from '../components/GalleryMain'

const Home = () => {
  const [HomeMenuIsOpen, setHomeMenuIsOpen] = useState(false);
  const [RoomClicked, setRoomClicked] = useState('Living Room');
  const [ProjectsClicked, setProjectsClicked] = useState(false);
  const [FloorPlanClicked, setFloorPlanClicked] = useState(true);
  const [GalleryClicked, setGalleryClicked] = useState(false);
  const [MaterialsClicked, setMaterialsClicked] = useState(false);
  const [SettingsClicked, setSettingsClicked] = useState(false);
  const [UploadOpen, setUploadOpen] = useState(false);
  const [Residences, setResidences] = useState([]);
  const [navExploreClicked, setnavExploreClicked] = useState(true);
  const [navGalleryClicked, setnavGalleryClicked] = useState(false);
  const [navMaterialsClicked, setnavMaterialsClicked] = useState(false);
  const [navAboutClicked, setnavAboutClicked] = useState(false);
  return (
    <>
    <div className='w-full flex items-start justify-center'>
        <SidebarHome navExploreClicked={navExploreClicked} setnavExploreClicked={setnavExploreClicked} navGalleryClicked={navGalleryClicked} setnavGalleryClicked={setnavGalleryClicked} navMaterialsClicked={navMaterialsClicked} setnavMaterialsClicked={setnavMaterialsClicked} navAboutClicked={navAboutClicked} setnavAboutClicked={setnavAboutClicked} ProjectsClicked={ProjectsClicked} setProjectsClicked={setProjectsClicked} FloorPlanClicked={FloorPlanClicked} setFloorPlanClicked={setFloorPlanClicked} GalleryClicked={GalleryClicked} setGalleryClicked={setGalleryClicked} MaterialsClicked={MaterialsClicked} setMaterialsClicked={setMaterialsClicked} setSettingsClicked={setSettingsClicked} SettingsClicked={SettingsClicked} RoomClicked={RoomClicked} setRoomClicked={setRoomClicked} HomeMenuIsOpen={HomeMenuIsOpen} setHomeMenuIsOpen={setHomeMenuIsOpen}/>

        <div className='flex flex-col w-full'>

        <NavbarHome navExploreClicked={navExploreClicked} setnavExploreClicked={setnavExploreClicked} navGalleryClicked={navGalleryClicked} setnavGalleryClicked={setnavGalleryClicked} navMaterialsClicked={navMaterialsClicked} setnavMaterialsClicked={setnavMaterialsClicked} navAboutClicked={navAboutClicked} setnavAboutClicked={setnavAboutClicked} ProjectsClicked={ProjectsClicked} setProjectsClicked={setProjectsClicked} FloorPlanClicked={FloorPlanClicked} setFloorPlanClicked={setFloorPlanClicked} GalleryClicked={GalleryClicked} setGalleryClicked={setGalleryClicked} MaterialsClicked={MaterialsClicked} setMaterialsClicked={setMaterialsClicked} setSettingsClicked={setSettingsClicked} SettingsClicked={SettingsClicked} RoomClicked={RoomClicked} setRoomClicked={setRoomClicked} HomeMenuIsOpen={HomeMenuIsOpen} setHomeMenuIsOpen={setHomeMenuIsOpen}/>

      {FloorPlanClicked == true && navExploreClicked == true &&
        <MainHome ProjectsClicked={ProjectsClicked} setProjectsClicked={setProjectsClicked} FloorPlanClicked={FloorPlanClicked} setFloorPlanClicked={setFloorPlanClicked} GalleryClicked={GalleryClicked} setGalleryClicked={setGalleryClicked} MaterialsClicked={MaterialsClicked} setMaterialsClicked={setMaterialsClicked} setSettingsClicked={setSettingsClicked} SettingsClicked={SettingsClicked} RoomClicked={RoomClicked} setRoomClicked={setRoomClicked} HomeMenuIsOpen={HomeMenuIsOpen} setHomeMenuIsOpen={setHomeMenuIsOpen}/>
      }

      {ProjectsClicked == true && 
      
      <ProjectsMainHome Residences={Residences} setResidences={setResidences} UploadOpen={UploadOpen} setUploadOpen={setUploadOpen} ProjectsClicked={ProjectsClicked} setProjectsClicked={setProjectsClicked} FloorPlanClicked={FloorPlanClicked} setFloorPlanClicked={setFloorPlanClicked} GalleryClicked={GalleryClicked} setGalleryClicked={setGalleryClicked} MaterialsClicked={MaterialsClicked} setMaterialsClicked={setMaterialsClicked} setSettingsClicked={setSettingsClicked} SettingsClicked={SettingsClicked} RoomClicked={RoomClicked} setRoomClicked={setRoomClicked} HomeMenuIsOpen={HomeMenuIsOpen} setHomeMenuIsOpen={setHomeMenuIsOpen}/>
      
      }

      {GalleryClicked == true && navGalleryClicked == true &&
      
      <GalleryMain Residences={Residences} setResidences={setResidences} UploadOpen={UploadOpen} setUploadOpen={setUploadOpen} ProjectsClicked={ProjectsClicked} setProjectsClicked={setProjectsClicked} FloorPlanClicked={FloorPlanClicked} setFloorPlanClicked={setFloorPlanClicked} GalleryClicked={GalleryClicked} setGalleryClicked={setGalleryClicked} MaterialsClicked={MaterialsClicked} setMaterialsClicked={setMaterialsClicked} setSettingsClicked={setSettingsClicked} SettingsClicked={SettingsClicked} RoomClicked={RoomClicked} setRoomClicked={setRoomClicked} HomeMenuIsOpen={HomeMenuIsOpen} setHomeMenuIsOpen={setHomeMenuIsOpen}/>
      
      }

        </div>
    </div>
    </>
  )
}

export default Home