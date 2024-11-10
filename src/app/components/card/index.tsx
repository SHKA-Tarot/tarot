'use client';

import { useState } from 'react';
import { tarotData } from '@/app/data/tarotData';

interface cardProps {
    id: number;
    name: string;
    loveDescription: string;
    moneyDescription: string;
    businessDescription: string;
    healthDescription: string;
    imgUrl: string;
}

export default function Card() {
    const [select, setSelect] = useState<cardProps | null>(null);
    const tag = '연애'

    const getRandumData = () => {
        const randumIndex = Math.floor(Math.random() * tarotData.length);
        setSelect(tarotData[randumIndex]);
        console.log(select);
    };

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        getRandumData();
                    }}
                >
                    card
                </button>
            </div>
            <div>
                <div>{select?.name}</div>
                <div>{select?.loveDescription}</div>
                <div>
                    <img src={select?.imgUrl} alt="" />
                </div>
            </div>
        </div>
    );
}
