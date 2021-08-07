import styled from 'styled-components/native';

import colors from '../../themes/Colors';

export const AddReminderContainer = styled.View`
  margin: 16px;
`;

export const ReminderLabel = styled.Text`
  margin-bottom: 16px;
  font-size: 20px;
`;

export const ReminderInput = styled.TextInput`
  border: 1px solid grey;
  margin-bottom: 16px;
  padding: 5px;
`;

export const AddReminderButton = styled.Button`
  background-color: ${colors.primaryColor};
  color: white;
`;
