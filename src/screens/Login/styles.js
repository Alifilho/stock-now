import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const Wrapper = styled(SafeAreaView)`
  min-height: 100%;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 40%;
  min-width: 60%;
  min-height: 50%;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #666666;
  font-weight: bold;
`;
