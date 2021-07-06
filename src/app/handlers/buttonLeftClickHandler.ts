import { calenderController, calenderUIController } from '../controllers';

const buttonLeftClickHandler = () => {
  calenderController.setPreviousWeek();
  calenderUIController.displayMonthName(
    calenderController.getCurrentMonthName(),
  );
  calenderUIController.updateDayDisplayOnPreviousButtonClicked(
    calenderController.getCurrentDate(),
  );
};

export default buttonLeftClickHandler;
