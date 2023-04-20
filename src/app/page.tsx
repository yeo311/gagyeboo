import dayjs from 'dayjs';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect(dayjs().format('/YYYY/MM'));
}
