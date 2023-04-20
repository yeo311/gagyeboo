import Calendar from '@/components/Calendar';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    year: string;
    month: string;
  };
};

export default function Page({ params: { year, month } }: Props) {
  if (!year || !month || Number.isNaN(Number(year)) || Number.isNaN(Number(month))) {
    notFound();
  }
  return <Calendar year={Number(year)} month={Number(month)} />;
}
