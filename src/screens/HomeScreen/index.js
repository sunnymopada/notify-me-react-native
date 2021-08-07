import React, {Component} from 'react';
import {FlatList} from 'react-native';

import ReminderContext from '../../stores/ReminderContext';
import {gotoAddReminderScreen} from '../../utils/NavigationUtils';

import {
  CreateNewReminderFAB,
  ReminderItem,
  ReminderText,
  RemindersContainer,
} from './styledComponents';

class HomeScreen extends Component {
  static contextType = ReminderContext;

  getReminderKeyExtractor = reminder => {
    return reminder.id;
  };

  renderItem = ({item, index, separators}) => {
    const {title} = item;
    return (
      <ReminderItem>
        <ReminderText>{title}</ReminderText>
      </ReminderItem>
    );
  };

  gotoAddReminderScreen = () => {
    const {navigation} = this.props;
    gotoAddReminderScreen(navigation);
  };

  render() {
    const {reminders} = this.context;
    console.log('Reminders Home Screen', reminders);
    return (
      <RemindersContainer>
        <FlatList
          data={reminders}
          renderItem={this.renderItem}
          keyExtractor={this.reminderKeyExtractor}
        />
        <CreateNewReminderFAB
          large
          icon="plus"
          onPress={this.gotoAddReminderScreen}
        />
      </RemindersContainer>
    );
  }
}

export default HomeScreen;
