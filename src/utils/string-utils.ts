import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';

export {};
declare global {
  interface String {
    getShortDate(): string;
  }
}

String.prototype.getShortDate = function () {
  const today = new Date();
  if (today.getDay() === 0) {
    today.setDate(today.getDate() - 1);
  }
  const mondayThisWeek = today.getDate() - today.getDay() + 1;
  return new Date(
    today.setDate(mondayThisWeek + sweDays.indexOf(this as SwedishDay))
  ).toLocaleDateString('se-SE', {
    month: '2-digit',
    day: '2-digit',
  });
};
