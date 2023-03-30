/* eslint-disable @typescript-eslint/ban-ts-comment */
export {};
declare global {
  interface Date {
    getWeek(): number;
    isPastNine(): boolean;
  }
}

Date.prototype.getWeek = function () {
  const weekOne = new Date(this.getFullYear(), 0, 4);
  return Math.ceil(
    ((this.valueOf() - weekOne.valueOf()) / 86400000 + weekOne.getDay() - 1) / 7
  );
};

Date.prototype.isPastNine = function () {
  return this.getUTCHours() >= 9 + (this.getTimezoneOffset() % 59);
};
