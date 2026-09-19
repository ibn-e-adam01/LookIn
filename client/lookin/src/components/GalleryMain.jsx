import React, { useState } from 'react'
import { faPlus, faUpRightFromSquare, faWeightScale, faWindowMaximize, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoomUploadPopUp from './RoomUploadPopUp';
import axios from 'axios';
import { useEffect } from 'react';

const GalleryMain = ({UploadOpen, setUploadOpen, Residences, setResidences}) => {
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
        <div className='w-full flex items-start flex-col justify-center px-5 py-1.5 font-semibold tracking-tighter text-zinc-950'>
            <h1 className='text-xl'>Gallery</h1>
            <p className='text-xs text-zinc-700 font-semibold tracking-tight'>Explore every detail.</p>
        </div>


        
        <div className='DesignsCon mt-3 grid xl:grid-cols-5 px-3 lg:grid-cols-4 md:grid-cols-3 items-start justify-center w-full h-screen gap-6 my-3'>

            {Residences.length > 0 && Residences.map((residence) => (

        <div onClick={() => {

        }} key={residence._id} className='cursor-pointer hover:border hover:border-[#111932] active:border active:border-[#111932] Design w-auto md:h-80 xl:h-54 lg:h-65 2xl:h-140 h-105 flex flex-col items-center justify-center'>
            <div className='w-full flex border-15 border-[#111932] h-full items-center justify-center overflow-hidden'>
                <img className='object-fill w-full h-full' src={residence?.residenceImage} alt="" />
            </div>
           
    </div>
    ))}
        </div>
        
    </div>
    
    
    </>
  )
}

export default GalleryMain