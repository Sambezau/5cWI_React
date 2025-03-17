import React from 'react'
import { Car } from '../components/ui/lib/types/types';
import CarList from '../components/ui/car/carList'

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
        image: "/images/audi.jpg"
    },
    {
        name: "BWM",
        type: "M3 competition",
        color: "grey",
        motor: {
            serialNumber: 4598,
            hp: 500,
        },
        image: "/images/bmw.jpg"
    },
    {
        name: "VW",
        type: "Passat",
        color: "grey",
        motor: {
            serialNumber: 7753,
            hp: 1000,
        },
        image: "/images/vw.jpg"
    }
];

export default function Cars({ }: Props) {
    return (
        <div>
            <CarList cars={cars} />
        </div>
    )
}