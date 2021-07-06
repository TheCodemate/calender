import { addDays, format, compareAsc } from 'date-fns';

export default class CalenderUIModel {
  calender: HTMLDivElement;
  calenderHeader: HTMLDivElement;
  timeHolder: HTMLDivElement;
  dateHolder: HTMLDivElement;
  daysContainer: HTMLDivElement;
  day: HTMLDivElement;
  buttonLeft = document.querySelector('.calender__button--left');
  buttonRight = document.querySelector('.calender__button--right');

  private buildCalendar() {
    this.calender = document.createElement('div');
    this.calender.classList.add('calender');
    document.body.appendChild(this.calender);
    return this;
  }

  private addHeader() {
    this.calenderHeader = document.createElement('div');
    this.calenderHeader.classList.add('calender__header');
    this.timeHolder = document.createElement('div');
    this.timeHolder.classList.add('calender__container--timer');
    this.dateHolder = document.createElement('div');
    this.dateHolder.classList.add('calender__container--month');
    this.calenderHeader.appendChild(this.timeHolder);
    this.calenderHeader.appendChild(this.dateHolder);
    this.calender.appendChild(this.calenderHeader);
    return this;
  }

  private addDaysContainer() {
    this.daysContainer = document.createElement('div');
    this.daysContainer.classList.add('calender__container--days');
    this.calender.appendChild(this.daysContainer);
    return this;
  }

  private createDays(todaysDate) {
    for (let i = -3; i <= 3; i++) {
      this.day = document.createElement('div');
      const dateDisplay = document.createElement('span');
      const dateToInsert = addDays(todaysDate, i);
      const isBeforeIndex = compareAsc(todaysDate, dateToInsert);

      switch (true) {
        case isBeforeIndex === 1:
          this.day.classList.add('calender__day-past');
          break;
        case isBeforeIndex === 0:
          this.day.classList.add('calender__day-current');
          break;
        case isBeforeIndex === -1:
          this.day.classList.add('calender__day-future');
          break;
        default:
          this.day.classList.add('calender__day');
          break;
      }

      dateDisplay.innerHTML = format(dateToInsert, 'dd/MM/yyyy');
      this.day.appendChild(dateDisplay);
      this.daysContainer.appendChild(this.day);
    }
  }

  // private addDetailsToDayContainer() {
  // const days = document.querySelectorAll('.calender__day');
  // }

  createCalender(today) {
    this.buildCalendar().addHeader().addDaysContainer().createDays(today);
    // this.addDetailsToDayContainer();
  }

  insertCurrentMonthInMonthHolder(time: string) {
    this.dateHolder.innerHTML = time;
  }

  displayHour(hour: string) {
    this.timeHolder.innerHTML = hour;
  }
}
