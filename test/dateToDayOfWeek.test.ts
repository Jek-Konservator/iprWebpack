import { dateToDayOfWeek } from './dateToDayOfWeek';
import { daysOfWeek } from './constants';
import dayjs from 'dayjs';

const data: Array<[number, string, string, boolean]> = [
  [0, '2023-10-08', daysOfWeek['0'], true],
  [1, '2023-10-08', daysOfWeek['1'], true],
  [2, '2023-10-08', daysOfWeek['2'], true],
  [3, '2023-10-08', daysOfWeek['3'], true],
  [4, '2023-10-08', daysOfWeek['4'], true],
  [5, '2023-10-08', daysOfWeek['5'], true],
  [6, '2023-10-08', daysOfWeek['6'], true],
  [7, '2023-10-08', daysOfWeek['0'], true],
  [3, '2023-10-08', daysOfWeek['2'], false],
  [4, '2023-10-08', daysOfWeek['1'], false],
  [5, '2023-10-08', daysOfWeek['1'], false],
  [6, '2023-10-08', daysOfWeek['0'], false],
  [7, '2023-10-08', daysOfWeek['4'], false],
];

describe('dateToDayOfWeek tests', () => {
  test.each(data)('Test dateToDayOfWeek', (daysCount, fakeThisDate, dayOfWee, isCorrect) => {
    console.log(dayjs(new Date()).format('DD/MM/YYYY'), '- Реальная дата');
    console.log(daysOfWeek[dayjs(new Date()).day()], '- Реальный день недели');

    jest.useFakeTimers().setSystemTime(new Date(fakeThisDate));

    console.log(dayjs(new Date()).format('DD/MM/YYYY'), '- Фейковая дата');
    console.log(daysOfWeek[dayjs(new Date()).day()], '- Фейковая день недели');
    console.log(daysCount, '- Количество дней смещения');

    const result = dateToDayOfWeek(daysCount);

    console.log(result, '- День недели после смещения');

    jest.clearAllTimers();

    if (isCorrect) {
      expect(result).toBe(dayOfWee);
    }else{
      expect(result).not.toBe(dayOfWee);
    }
  });
});
