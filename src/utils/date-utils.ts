/* eslint-disable @typescript-eslint/ban-ts-comment */
export {};
declare global {
  interface Date {
    getWeek(): number;
  }
}

Date.prototype.getWeek = function () {
  const weekOne = new Date(this.getFullYear(), 0, 4);
  return Math.ceil(
    ((this.valueOf() - weekOne.valueOf()) / 86400000 + weekOne.getDay() - 1) / 7
  );
};
