'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function FramerMotionContext({ children }: Props) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.main key={pathname} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
