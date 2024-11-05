'use client';

import { useState } from 'react';

interface cardProps {
    id: number;
    name: string;
    description: string;
}

export default function Card() {
    const [select, setSelect] = useState<cardProps | null>(null);

    const card = [
        {
            id: 0,
            name: '바보',
            description: '설명',
            
        },
        {
            id: 1,
            name: '바보2',
            description: '설명',
        },
        {
            id: 2,
            name: '바보3',
            description: '설명',
        },
        {
            id: 3,
            name: '바보4',
            description: '설명',
        },
    ];

    const getRandumData = () => {
        const randumIndex = Math.floor(Math.random() * card.length);
        setSelect(card[randumIndex]);
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
                <div>{select?.description}</div>
            </div>
        </div>
    );
}
