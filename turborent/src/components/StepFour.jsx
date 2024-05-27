"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const StepFour = ({ form }) => {
    const router = useRouter();
    const [price, setPrice] = useState(0);

    const {
      imgUrl,
      transfertype,
      title,
      firstname,
      lastname,
      email,
      phoneNumber,
      comment,
      source,
      destination,
    } = form.getValues();

    useEffect(()=>{
        if (source?.length && destination?.length) {
            const sourceVal = source?.split(",");
            const destinationVal = destination?.split(",");
            const distanceInKM = getDistance(
                parseFloat(sourceVal[0]),
                parseFloat(sourceVal[1]),
                parseFloat(destinationVal[0]),
                parseFloat(destinationVal[1])
              );
        }
    },[source,destination]);
  return (
    <div className='max-2-[1150px] mx-auto'>
    <div className='grid grid-cols-1 p-4 mt-10'>
        <div className='relative w-full mb-4 rounded overflow-hidden'>
       <img src={imgUrl} className='object-cover' alt=""/>
        </div>
        <div className='pt-8'>
            <div className="flex justify-between items-center border-b mb-5 pb-5">
            <h3 className='text-2xl font-bold mb-5'>Order Information</h3>
            <div>
            <h3 className="text-3xl font-bold ">{title}</h3>
            <p className="text-lg font-bold">
              Price: <span className="text-2xl">${price}</span>
            </p>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default StepFour