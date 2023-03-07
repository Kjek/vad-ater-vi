/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export {};
declare global {
  interface Date {
    getWeek(): number;
  }
}

Date.prototype.getWeek = function () {
  const weekOne = new Date(this.getFullYear(), 0, 4);
  return Math.ceil(((this - weekOne) / 86400000 + weekOne.getDay() - 1) / 7);
};
