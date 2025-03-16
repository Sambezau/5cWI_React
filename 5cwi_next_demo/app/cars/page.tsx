import React from 'react'
import { Car } from '../components/ui/lib/types/types';
import CarList from '../components/ui/car/carList'

type Props = {}

const cars: Car[] = [
    {
        name: "Audi",
        type: "RS3",
        color: "black",
        motor: {
            serialNumber: 1234,
            hp: 450,
        }
    },
    {
        name: "BWM",
        type: "M3 competition",
        color: "green",
        motor: {
            serialNumber: 1234,
            hp: 500,
        }
    },
    {
        name: "VW",
        type: "Passat",
        color: "grey",
        motor: {
            serialNumber: 1234,
            hp: 1000,
        }
    }
];

export default function Cars({ }: Props) {
    return (
        <div>
            <CarList cars={cars} />
        </div>
    )
}