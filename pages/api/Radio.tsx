import React from 'react';
import { RadioGroup, Radio } from '@nextui-org/react';

export default function App() {
  return (
    <RadioGroup
      label='Select your favorite city'
      color='secondary'
      defaultValue='london'
      isRequired={false}
    >
      <Radio value='buenos-aires'>Buenos Aires</Radio>
      <Radio value='sydney'>Sydney</Radio>
      <Radio value='san-francisco'>San Francisco</Radio>
      <Radio value='london'>London</Radio>
      <Radio value='tokyo'>Tokyo</Radio>
    </RadioGroup>
  );
}
