import { add, format } from 'date-fns';
import {
  celenderUIControllerUIElementsType,
  // TimeDataType,
} from '../types';

import { convertToTwoDigits } from '../helpers';
// const calenderUIControllerUIElements: celenderUIControllerUIElementsType = {
//   monthDisplay: document.querySelector('.calender__month'),
//   timeDisplay: document.querySelector('.calender__timer'),
//   dayDisplays: document.querySelectorAll('.calender__day'), //? jak poprawić ten teyp?
// };

class CalenderUIController {
  monthDisplay: HTMLParagraphElement;
  timeDisplay: HTMLParagraphElement;
  dayDisplays: HTMLParagraphElement[];
  constructor({
    monthDisplay,
    timeDisplay,
    dayDisplays,
  }: celenderUIControllerUIElementsType) {
    this.monthDisplay = monthDisplay;
    this.timeDisplay = timeDisplay;
    this.dayDisplays = Array.from(dayDisplays);
  }

  displayMonthName(month: string) {
    this.monthDisplay.textContent = month;
  }

  consoleLogAllDays() {
    console.log(this.dayDisplays);
  }
  // !! da się tak??
  // updateTimeDisplay({ currentHour, currentMins, currentSecs }: TimeDataType) {
  //   new
  //   this.timeDisplay.innerHTML = `${currentHour}:${currentMins}:${currentSecs}`;
  // }

  updateTimeDisplay() {
    const currentHour = new Date().getHours();
    const currentMins = new Date().getMinutes();
    const currentSecs = new Date().getSeconds();
    this.timeDisplay.innerHTML = `${convertToTwoDigits(
      currentHour,
    )}:${convertToTwoDigits(currentMins)}:${convertToTwoDigits(currentSecs)}`;
  }

  updateDayDisplayOnNextButtonClicked(current) {
    let actualDate = current;
    this.dayDisplays.forEach((dataField) => {
      dataField.innerHTML =
        format(actualDate, 'dd/MM/yyyy') + ' ' + format(actualDate, 'cccc');
      actualDate = add(actualDate, { days: 1 });
    });
  }
  updateDayDisplayOnPreviousButtonClicked(current) {
    let actualDate = current;
    this.dayDisplays.forEach((dataField) => {
      dataField.innerHTML =
        format(actualDate, 'dd/MM/yyyy') + ' ' + format(actualDate, 'cccc');
      actualDate = add(actualDate, { days: 1 });
    });
  }
}

const calenderUIController = new CalenderUIController(
  calenderUIControllerUIElements,
);
export default calenderUIController;
