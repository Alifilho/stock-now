import { StyleSheet } from 'react-native';

const style = (error) =>
  StyleSheet.create({
    input: {
      display: 'flex',
      fontWeight: 'bold',
      color: '#666666',
      borderBottomColor: !error ? '#EDECF1' : '#F00000',
      borderBottomWidth: 1.5,
      minHeight: '10%',
      fontSize: 15,
      paddingLeft: 5,
    },
  });

export default style;
