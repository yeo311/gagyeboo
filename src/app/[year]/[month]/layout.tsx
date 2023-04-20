import dayjs from 'dayjs';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

type Params = {
  year: string;
  month: string;
};

type Props = {
  children: React.ReactNode;
  params: Params;
};

export function generateMetadata({ params: { year, month } }: { params: Params }): Metadata {
  return {
    title: `가계뷰 | ${year}년 ${month}월`,
  };
}

export default function Layout({ children, params: { year, month } }: Props) {
  const date = dayjs(`${year}-${month}`);

  return (
    <>
      <header className='p-6 flex items-center'>
        <h1 className='text-4xl font-bold basis-56'>{date.format("MMM' YYYY")}</h1>
        <div className='flex items-center justify-between w-20'>
          <Link href={date.subtract(1, 'month').format('/YYYY/MM')}>
            <AiOutlineLeft size='1.5rem' title='previous month' />
          </Link>
          <Link href={dayjs().format('/YYYY/MM')}>
            <BsDot title='today' />
          </Link>
          <Link href={date.add(1, 'month').format('/YYYY/MM')}>
            <AiOutlineRight size='1.5rem' title='next month' />
          </Link>
        </div>
      </header>
      <section>{children}</section>
    </>
  );
}
