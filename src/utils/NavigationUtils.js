import {
  ADD_REMINDER_SCREEN,
  HOME_SCREEN,
} from '../constants/NavigationConstants';

export const gotoAddReminderScreen = navigation => {
  navigation.navigate(ADD_REMINDER_SCREEN);
};

export const gotoHomeScreenFromAddReminderScene = (navigation, props) => {
  navigation.navigate({name: HOME_SCREEN, ...props});
};

export const gotoPreviousScreen = navigation => {
  navigation.goBack();
};
