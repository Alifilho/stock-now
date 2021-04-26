import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  min-height: 100%;
  min-width: 100%;
  align-items: center;
`;

export const Historic = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-direction: row;
  min-height: 7%;
  background-color: #e5e5e5e5;
  margin-bottom: 10px;
`;
