import React from 'react';
import { Picker } from 'react-native';

const Select = ({ list, selected, setSelected, style }) => (
  <Picker
    selectedValue={selected}
    onValueChange={(itemValue) => setSelected(itemValue)}
    style={style}
  >
    {list.map((item) => (
      <Picker.Item label={item.label} value={item.value} key={item.id} />
    ))}
  </Picker>
);

export default Select;
