import Image from 'next/image';
import './main.scss';
import Link from 'next/link';

export default function main() {
  return (
    <>
      <div className="container">
        <p>
          행운의 병아리와<br></br> 타로카드를 점쳐봐요
        </p>
        <h1>오늘의 운세</h1>
        <Image
          width={200}
          height={200}
          objectFit="cover"
          src={'/master.png'}
          alt=""
        />
        <Link href="/choose">시작하다</Link>
      </div>
    </>
  );
}
