import Image from 'next/image';
import Link from 'next/link';

import './choose.scss';

export default function Choose() {
  return (
    <>
      <div className="container">
        <h1>11월10일 오늘의 운세</h1>
        <p>
          보고싶은 타로 점괘를 골라줘! <br />
        </p>
        <Image
          width={200}
          height={200}
          objectFit="cover"
          src={'/master.png'}
          alt=""
        />
        <div className="menu">
          <Link href="/tarot_start?tag='love'">연애</Link>
          <Link href="/tarot_start?tag='money'">금전</Link>
          <Link href="/tarot_start?tag='health'">건강</Link>
          <Link href="/tarot_start?tag='business'">사업</Link>
        </div>
      </div>
    </>
  );
}
