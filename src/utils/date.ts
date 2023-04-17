import dayjs, { Dayjs } from 'dayjs';

export function getWeeksOfMonth(year: number, month: number): Dayjs[][] {
  const firstDayOfMonth = dayjs(`${year}-${month}-01`);
  const startOfWeek = firstDayOfMonth.startOf('week');
  const endOfWeek = firstDayOfMonth.endOf('month').endOf('week');
  const totalDays = endOfWeek.diff(startOfWeek, 'day') + 1;
  const weeks: Dayjs[][] = [];

  for (let dayOffset = 0; dayOffset < totalDays; dayOffset++) {
    const currentDay = startOfWeek.add(dayOffset, 'day');
    const weekIndex = Math.floor(dayOffset / 7);

    if (!weeks[weekIndex]) {
      weeks[weekIndex] = [];
    }

    weeks[weekIndex].push(currentDay);
  }

  return weeks;
}
