import React from 'react';
import { Accordion, AccordionItem, Textarea } from '@nextui-org/react';

export default function Component() {
  return (
    <div>
      <Accordion
        defaultExpandedKeys={['1']}
        // selectionMode='multiple'
      >
        <AccordionItem
          // onKeyDown={(e) => e.stopPropagation()}
          // onKeyDown={console.log}
          key='1'
          title='Accordion 1'
        >
          <Textarea
            defaultValue={`111Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Cannot use up/down arrow keys to move the text cursor in this textarea.`}
          />
        </AccordionItem>
      </Accordion>

      <Textarea
        defaultValue={`
        Common Textarea!!!
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Cannot use up/down arrow keys to move the text cursor in this textarea.`}
      />
    </div>
  );
}
