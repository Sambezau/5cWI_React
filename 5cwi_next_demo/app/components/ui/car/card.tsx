"use client";
import { Car } from '../lib/types/types';
import React, { useState } from 'react'
import Image from 'next/image';

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`p-4 shadow hover:cursor-pointer hover:bg-amber-200 ${isActive ? "bg-amber-500" : "bg-blue-200"} border-4 border-gray-800`} onClick={() => {
            setIsActive(!isActive);
        }}>
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