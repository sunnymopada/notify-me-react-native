import styled from 'styled-components/native';

import {FAB, Card} from 'react-native-paper';
import colors from '../../themes/Colors';

export const RemindersContainer = styled.View`
  flex: 1;
`;

export const ReminderItem = styled(Card)`
  margin: 16px 16px 0px 16px;
  padding: 16px;
`;

export const ReminderText = styled.Text``;

export const CreateNewReminderFAB = styled(FAB)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: ${colors.primaryColor};
`;
