import React from 'react';
import { NativeBaseProvider, Box, Button, Radio } from 'native-base';

export default function App() {
  const [value, setValue] = React.useState('one');

  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={value}
          onChange={nextValue => {
            setValue(nextValue);
          }}
        >
          <Radio value="one" my={1}>
            One
          </Radio>
          <Radio value="two" my={1}>
            Two
          </Radio>
        </Radio.Group>
      </Box>
    </NativeBaseProvider>
  );
}
