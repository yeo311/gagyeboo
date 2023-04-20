import './globals.css';
import { Open_Sans } from 'next/font/google';

export const metadata = {
  title: '가계뷰',
  description: '가계뷰 - 돈을 아끼자',
};

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={openSans.className}>
      <body className='w-full max-w-screen-2xl overflow-auto mx-auto'>
        <main>{children}</main>
      </body>
    </html>
  );
}
