'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react';

function DropdownButton() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <UIIconButton>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
            />
          </svg>
        </UIIconButton>
      </DropdownTrigger>
      <DropdownMenu variant='faded' aria-label='Dropdown menu with description'>
        <DropdownSection title='Actions' showDivider>
          <DropdownItem key='new' shortcut='⌘N' description='Create a new file'>
            New file
          </DropdownItem>
          <DropdownItem
            key='copy'
            shortcut='⌘C'
            description='Copy the file link'
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key='edit'
            shortcut='⌘⇧E'
            description='Allows you to edit the file'
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title='Danger zone'>
          <DropdownItem
            key='delete'
            className='text-danger'
            color='danger'
            shortcut='⌘⇧D'
            description='Permanently delete the file'
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
