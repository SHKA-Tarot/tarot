'use client';

import { useState } from 'react';
import { tarotData } from '@/app/data/tarotData';
import { useSearchParams } from 'next/navigation';

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
    // const params = useSearchParams();
    // const tag = params.get('tag');
    const tag = 'love';

    //1. 예시) 연애 카테고리를 누르면 -> 쿼리에서 파람스나 이런걸로 받는다.
    //2. 받은 카테고리를 변수에 저장한다.

    //3. 카드를 뽑는다. -> 뽑은카드를 변수에 저장한다.

    //4. 결과확인을 누르면 -> 두개의 변수를 쿼리에 담아서 결과페이지로 보낸다.

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
                <div>
                    <img src={select?.imgUrl} alt="" />
                </div>
                <a href={`/result?tag=${tag}&select=${select?.name}`}>결과</a>
            </div>
        </div>
    );
}
