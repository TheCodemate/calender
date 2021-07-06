import { calenderController, calenderUIController } from '../controllers';

const buttonRightClickHandler = () => {
  calenderController.setNextWeek();
  calenderUIController.displayMonthName(
    calenderController.getCurrentMonthName(),
  );

  calenderUIController.updateDayDisplayOnNextButtonClicked(
    calenderController.getCurrentDate(),
  );
};

export default buttonRightClickHandler;
