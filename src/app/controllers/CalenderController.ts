import { addDays } from 'date-fns';

export default class CalenderController {
  calender;
  calenderUI;
  constructor(calenderModel, calenderUIModel) {
    this.calender = calenderModel;
    this.calenderUI = calenderUIModel;
  }

  render() {
    const currentMonth = this.calender.getMonth();
    const todaysDate = this.calender.getCurrentDate();

    this.calenderUI.createCalender(todaysDate);
    this.calenderUI.insertCurrentMonthInMonthHolder(currentMonth);
    setInterval(
      () => this.calenderUI.displayHour(this.calender.getCurrentTimeString()),
      1000,
    );
  }

  moveToNextWeek() {
    console.log('moveToNextWeek', this.calenderUI.buttonRight);

    this.calenderUI.buttonRight.addEventListener('click', () =>
      this.calender.next(),
    );
  }

  previous() {}
}

// import {
//   celenderControllerUIElementsType,
//   MouseClickHandlerType,
// } from '../types';

// const calenderControllerUIElements: celenderControllerUIElementsType = {
//   buttonLeft: document.querySelector('.button--calender-left'),
//   buttonRight: document.querySelector('.button--calender-right'),
// };

// class CalenderController {
//   currentDate = new Date();
//   private months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'Augst',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   // getDay starts with 0 = Sunday
//   private days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];

//   buttonLeft: HTMLButtonElement;
//   buttonRight: HTMLButtonElement;

//   constructor({ buttonLeft, buttonRight }: celenderControllerUIElementsType) {
//     if (buttonLeft === null || buttonRight === null) {
//       throw new Error('element cannot be null or undefined');
//     }
//     this.buttonLeft = buttonLeft;
//     this.buttonRight = buttonRight;
//   }

//   getCurrentDate() {
//     return this.currentDate;
//   }

//   getCurrentMonthName() {
//     const monthInex = getMonth(this.currentDate);
//     return this.months[monthInex];
//   }

//   getCurrentDayName() {
//     const dayIndex = getDay(this.currentDate);
//     return this.days[dayIndex];
//   }

//   setNextWeek() {
//     const nextDate = add(this.currentDate, { days: 7 });
//     this.currentDate = nextDate;
//     console.log(this.currentDate);
//   }

//   setPreviousWeek() {
//     const previousDate = subDays(this.currentDate, 7);
//     this.currentDate = previousDate;
//     console.log(this.currentDate);
//   }

//   getCurrentTimeData() {
//     return {
//       currentHour: this.currentDate.getHours(),
//       currentMins: this.currentDate.getMinutes(),
//       currentSecs: this.currentDate.getSeconds(),
//     };
//   }

//   listenButtonLeftOnMouseClick(handler: MouseClickHandlerType) {
//     this.buttonLeft.addEventListener('click', handler);
//   }
//   listenButtonRightOnMouseClick(handler: MouseClickHandlerType) {
//     this.buttonRight.addEventListener('click', handler);
//   }
// }

// const calenderController = new CalenderController(calenderControllerUIElements);

// export default calenderController;
