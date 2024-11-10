'use client';

import { useSearchParams } from 'next/navigation';
import { tarotData } from '../data/tarotData';
import { useEffect, useState } from 'react';
interface cardProps {
    id: number;
    name: string;
    loveDescription: string;
    moneyDescription: string;
    businessDescription: string;
    healthDescription: string;
    imgUrl: string;
}

export default function Result() {
    const params = useSearchParams();
    const tag = params.get('tag');
    const select = params.get('select');
    const [findData, setFindData] = useState<cardProps | null>();

    useEffect(() => {
        setFindData(tarotData.find((card) => card.name === select));
    });

    const description = tag && findData ? findData[`${tag}Description` as keyof cardProps] : null;
    //1. db에서 셀렉트의 카드 이름을 찾는다
    //2. 그 카드의 태그 정보를 가져온다.
    //3. 화면에 뿌린다

    return (
        <>
            <div className="result">
                <h2>결과 확인</h2>
                <h3>{findData?.name}</h3>
                <img src={findData?.imgUrl} alt="" />
                <p>{description}</p>
            </div>
        </>
    );
}
