import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const Wrapper = styled(TouchableOpacity)`
  background-color: #f0f0f0f0;
  min-height: 50px;
  min-width: 40%;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #666666;
  font-weight: bold;
`;
