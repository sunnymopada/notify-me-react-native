import React, {Component} from 'react';

import ReminderContext from '../../stores/ReminderContext';
import colors from '../../themes/Colors';

import {gotoPreviousScreen} from '../../utils/NavigationUtils';

import {
  AddReminderContainer,
  ReminderLabel,
  AddReminderButton,
  ReminderInput,
} from './styledComponents';

class AddReminderScreen extends Component {
  static contextType = ReminderContext;

  state = {
    reminderText: '',
  };

  onChangeReminderText = reminderText => {
    this.setState({reminderText});
  };

  showLocalNotification = () => {};

  addNewReminder = () => {
    const {navigation} = this.props;
    const {addReminder} = this.context;
    const {reminderText} = this.state;
    const newReminder = {
      title: reminderText,
      id: Math.random().toString(),
    };
    addReminder(newReminder);
    this.showLocalNotification();
    gotoPreviousScreen(navigation);
  };

  isValidReminder = () => {
    const {reminderText} = this.state;
    return reminderText ? true : false;
  };

  render() {
    return (
      <AddReminderContainer>
        <ReminderLabel>Reminder Title</ReminderLabel>
        <ReminderInput
          onChangeText={this.onChangeReminderText}
          selectionColor={colors.primaryColor}
        />
        <AddReminderButton
          disabled={!this.isValidReminder()}
          title={'Add'}
          onPress={this.addNewReminder}
        />
      </AddReminderContainer>
    );
  }
}

export default AddReminderScreen;
