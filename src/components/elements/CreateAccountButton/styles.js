import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(TouchableOpacity)`
  min-width: 125px;
  min-height: 150px;
  align-items: center;
  justify-content: center;
  border-color: #666666;
  border-radius: 5px;
  border-width: 2.5px;
  padding: 20px;
`;

export const Title = styled.Text`
  color: #666666;
  font-weight: bold;
  margin-top: 20px;
`;
