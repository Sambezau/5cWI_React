"use client"
import React from 'react'
import { Car } from '../components/ui/lib/types/types';
import CarList from '../components/ui/car/carList'
import Card from '../components/ui/car/card'


type Props = {}

const cars: Car[] = [
    {
        name: "Audi",
        type: "RS3",
        color: "blue",
        motor: {
            serialNumber: 2193,
            hp: 450,
        },
        image: "/images/audi.jpg",
        logo: "/logos/audilogo.png"
    },
    {
        name: "BWM",
        type: "M3 competition",
        color: "grey",
        motor: {
            serialNumber: 4598,
            hp: 500,
        },
        image: "/images/bmw.jpg",
        logo: "/logos/bmwlogo.png"
    },
    {
        name: "VW",
        type: "Passat",
        color: "grey",
        motor: {
            serialNumber: 7753,
            hp: 1000,
        },
        image: "/images/vw.jpg",
        logo: "/logos/vwlogo.png"
    }
];

export default function Cars({ }: Props) {
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('desc');
    const [sortedCars, setSortedCars] = React.useState<Car[]>(cars);

    React.useEffect(() => {
        const sorted = [...cars].sort((a, b) => {
            return sortDirection === 'desc' 
                ? b.motor.hp - a.motor.hp 
                : a.motor.hp - b.motor.hp;
        });
        setSortedCars(sorted);
    }, [sortDirection]);

    const toggleSort = () => {
        setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc');
    };

    return (
        <div className="p-4 ">
            <div className="mb-4">
                <button 
                    onClick={toggleSort}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {sortDirection === 'desc' ? 'PS absteigend' : 'PS aufsteigend'}
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                {sortedCars.map((car) => (
                    <Card key={car.motor.serialNumber} car={car} />
                ))}
            </div>
        </div>
    );
}