/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ReminderContext from './src/stores/ReminderContext';

import colors from './src/themes/Colors';

import HomeScreen from './src/screens/HomeScreen';
import AddReminderScreen from './src/screens/AddReminderScreen';

import {
  ADD_REMINDER_SCREEN,
  HOME_SCREEN,
} from './src/constants/NavigationConstants';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  state = {
    reminders: [
      {
        title: 'Excersizes',
        id: '1',
      },
      {
        title: 'Pray',
        id: '2',
      },
      {
        title: 'Green Tea',
        id: '3',
      },
      {
        title: 'News',
        id: '4',
      },
      {
        title: 'Break fast',
        id: '5',
      },
    ],
  };

  addReminder = reminder => {
    const {reminders} = this.state;
    reminders.push(reminder);
    this.setState({
      reminders: reminders,
    });
  };

  render() {
    const {reminders} = this.state;
    const reminderContextValue = {
      reminders: reminders,
      addReminder: this.addReminder,
    };

    return (
      <ReminderContext.Provider value={reminderContextValue}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.primaryColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              name={HOME_SCREEN}
              component={HomeScreen}
              options={{title: 'Daily Reminders'}}
            />
            <Stack.Screen
              name={ADD_REMINDER_SCREEN}
              component={AddReminderScreen}
              options={{title: 'Add Reminder'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ReminderContext.Provider>
    );
  }
}

export default App;
