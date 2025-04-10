"use client";
import { Car } from '../lib/types/types';
import React, { useState } from 'react'
import Image from 'next/image';

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`p-4 shadow hover:cursor-pointer hover:bg-amber-200 ${isActive ? "bg-amber-500" : "bg-gray-500"} border-4 border-gray-800 relative`} onClick={() => {
            setIsActive(!isActive);
        }}>
            <div className="absolute top-2 right-2 w-12 h-12">
                <Image
                    src={car.logo}
                    alt={`${car.name} ${car.type}`}
                    fill
                    priority
                    sizes="100px"
                    style={{objectFit: 'contain'}}
                    className="rounded-lg"
                />
            </div>
            <h2 className='font-bold text-2xl'>{car.name}</h2>
            <h2>Model: {car.type}</h2>
            <h2>Color: {car.color}</h2>
            <h2>Serialnumber: {car.motor.serialNumber}</h2>
            <h2>Horsepower: {car.motor.hp}</h2>
            {isActive ? "active" : "inactive"}
            
            <div className="relative w-full h-48 mt-4">
                <Image
                    src={car.image}
                    alt={`${car.name} ${car.type}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{objectFit: 'cover'}}
                    className="rounded-lg"
                />
            </div>
        </div>
    )
}