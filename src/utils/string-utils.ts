import type { SwedishDay } from '~/types/swedish-days';
import { sweDays } from '~/types/swedish-days';

export {};
declare global {
  interface String {
    getShortDate(): string;
  }
}

String.prototype.getShortDate = function () {
  const today = new Date();
  const mondayThisWeek = today.getDate() - today.getDay() + 1;
  return new Date(
    today.setDate(mondayThisWeek + sweDays.indexOf(this as SwedishDay))
  ).toLocaleDateString('se-SE', {
    month: '2-digit',
    day: '2-digit',
  });
};
