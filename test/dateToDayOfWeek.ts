import dayjs from 'dayjs';
import {daysOfWeek} from "./constants";


// Функция берёт нынешнею дату добавляет n-дней и возвращает день недели после смещения
export const dateToDayOfWeek = (daysCount: number) => {
  const nowDate = dayjs(new Date());
  const newDate = nowDate.add(daysCount, 'days');

  return daysOfWeek[newDate.day() as keyof typeof daysOfWeek];
};
