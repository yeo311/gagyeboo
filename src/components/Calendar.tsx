import { getWeeksOfMonth } from '@/utils/date';

type Props = {
  year: number;
  month: number;
};

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function Calendar({ year, month }: Props) {
  const weeks = getWeeksOfMonth(year, month);

  return (
    <table className='w-full table-fixed border-separate border border-slate-500 border-spacing-y-4 border-spacing-x-6'>
      <thead>
        <tr>
          {days.map((day) => (
            <th key={day} className='p-3 text-left text-slate-500 text-sm'>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((date, j) => (
              <td
                key={j}
                className='p-3 border-t-2 border-gray-800 group hover:bg-zinc-100 hover:border-red-500 transition-colors'
              >
                <div className='h-56'>
                  <h3
                    className={`text-3xl font-semibold text-gray-${
                      date.get('month') + 1 === month ? '900' : '400'
                    } group-hover:text-red-500`}
                  >
                    {date.format('D')}
                  </h3>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
