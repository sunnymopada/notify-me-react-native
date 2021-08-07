import React from 'react';

export const defaultReminderContextValue = {
  reminders: [],
  addReminder: reminder => {},
};

const ReminderContext = React.createContext(defaultReminderContextValue);

export default ReminderContext;
