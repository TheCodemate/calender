import { getMonth, addDays } from 'date-fns';
import { convertToTwoDigits } from '../helpers';

export default class CalenderModel {
  private currentDate = new Date();
  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Augst',
    'September',
    'October',
    'November',
    'December',
  ];
  // getDay starts with 0 = Sunday
  private days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  getMonth() {
    const monthIndex = getMonth(this.currentDate);
    return this.months[monthIndex];
  }

  getDays() {
    return this.days;
  }

  getCurrentDate() {
    return this.currentDate;
  }

  getCurrentTimeString() {
    const date = new Date();
    const hour = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    return `${convertToTwoDigits(hour)}:${convertToTwoDigits(
      mins,
    )}:${convertToTwoDigits(secs)}`;
  }

  addDaysToCurrentDate(daysToAdd = 0) {
    return addDays(this.currentDate, daysToAdd);
  }

  next() {
    console.log('works');

    const newDate = addDays(this.currentDate, 7);
    this.currentDate = newDate;
    console.log(this.currentDate);
  }
}
