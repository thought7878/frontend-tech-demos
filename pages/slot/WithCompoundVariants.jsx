import { tv } from 'tailwind-variants';
import { useState } from 'react';
import { RadioGroup, Radio } from '@nextui-org/react';

const alert = tv({
  slots: {
    root: 'rounded py-3 px-5 mb-4',
    title: 'font-bold mb-1',
    message: '',
  },
  variants: {
    variant: {
      outlined: {
        // 比没有 slot 的多了一层slot 名字，root
        root: 'border',
      },
      filled: {
        root: '',
      },
    },
    severity: {
      error: '',
      success: '',
    },
  },
  compoundVariants: [
    {
      variant: 'outlined',
      severity: 'error',
      class: {
        root: 'border-red-700 dark:border-red-500',
        title: 'text-red-700 dark:text-red-500',
        message: 'text-red-600 dark:text-red-500',
      },
    },
    {
      variant: 'outlined',
      severity: 'success',
      class: {
        root: 'border-green-700 dark:border-green-500',
        title: 'text-green-700 dark:text-green-500',
        message: 'text-green-600 dark:text-green-500',
      },
    },
    {
      variant: 'filled',
      severity: 'error',
      class: {
        root: 'bg-red-100 dark:bg-red-800',
        title: 'text-red-900 dark:text-red-50',
        message: 'text-red-700 dark:text-red-200',
      },
    },
    {
      variant: 'filled',
      severity: 'success',
      class: {
        root: 'bg-green-100 dark:bg-green-800',
        title: 'text-green-900 dark:text-green-50',
        message: 'text-green-700 dark:text-green-200',
      },
    },
  ],
  defaultVariants: {
    variant: 'filled',
    severity: 'success',
  },
});

function App(props) {
  const [variant, setVariant] = useState('filled');
  const [severity, setSeverity] = useState('success');
  const { root, message, title } = alert({ severity, variant });

  return (
    <div className='p-12'>
      <div className={root()}>
        <div className={title()}>Oops, something went wrong</div>
        <div className={message()}>
          Something went wrong saving your changes. Try again later.
        </div>
      </div>
      <RadioGroup
        label='Select variant:'
        value={variant}
        onChange={(event) => setVariant(event.target.value)}
      >
        <Radio value='filled'>filled</Radio>
        <Radio value='outlined'>outlined</Radio>
      </RadioGroup>
      <RadioGroup
        label='Select severity:'
        value={severity}
        onChange={(event) => setSeverity(event.target.value)}
      >
        <Radio value='success'>success</Radio>
        <Radio value='error'>error</Radio>
      </RadioGroup>
    </div>
  );
}

export default App;
