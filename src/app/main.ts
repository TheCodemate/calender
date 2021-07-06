import { CalenderController } from './controllers';
import { CalenderModel, CalenderUIModel } from './models';
import { buttonLeftClickHandler, buttonRightClickHandler } from './handlers';

const initializeCalender = () => {
  const calender = new CalenderModel();
  const calenderUI = new CalenderUIModel();
  const calenderController = new CalenderController(calender, calenderUI);
  calenderController.render();
  calenderController.moveToNextWeek();
};
initializeCalender();

//todo - kalendarz ma być tworzony dynamiczniei jak w Ract'cie

// class renderCalender {
//   calender: HTMLDivElement;
//   calenderHeader: HTMLDivElement;
//   timeHolder: HTMLDivElement;
//   dataHolder: HTMLDivElement;
//   daysContainer: HTMLDivElement;
//   day: HTMLDivElement;
//   today = new Date();

//   private createCalender() {
//     this.calender = document.createElement('div');
//     this.calender.classList.add('calender');

//     this.calenderHeader = document.createElement('div');
//     this.calenderHeader.classList.add('calender__header');

//     this.timeHolder = document.createElement('div');
//     this.timeHolder.classList.add('calender__container--timer');

//     this.dataHolder = document.createElement('div');
//     this.dataHolder.classList.add('calender__container--month');

//     this.daysContainer = document.createElement('div');
//     this.daysContainer.classList.add('calender__container--days');

//     for (let i = 0; i < 7; i++) {
//       this.day = document.createElement('div');
//       this.day.classList.add('calender__day');
//       this.daysContainer.appendChild(this.day);
//     }

//     this.calender.appendChild(this.calenderHeader);
//     this.calender.appendChild(this.daysContainer);
//     this.calenderHeader.appendChild(this.timeHolder);
//     this.calenderHeader.appendChild(this.dataHolder);
//     document.body.appendChild(this.calender);
//   }

//   private displayToday() {
//     this.dataHolder.innerHTML = getMonth(this.today).toString();
//   }

//   private displayHour() {
//     setInterval(
//       () => {
//         const time = new Date();
//         const hour = time.getHours();
//         const mins = time.getMinutes();
//         const secs = time.getSeconds();
//         this.timeHolder.innerHTML = `${convertToTwoDigits(
//           hour,
//         )}:${convertToTwoDigits(mins)}:${convertToTwoDigits(secs)}`;
//       },

//       1000,
//     );
//   }

//   render() {
//     this.createCalender();
//     this.displayToday();
//     this.displayHour();
//   }
// }
