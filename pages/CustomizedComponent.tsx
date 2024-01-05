// MyButton.tsx
import { extendVariants, Button } from '@nextui-org/react';

export const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      olive: 'text-[#000] bg-[#84cc16]',
      orange: 'bg-[#ff8c00] text-[#fff]',
      violet: 'bg-[#8b5cf6] text-[#fff]',
    },
    isDisabled: {
      true: 'bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed',
    },
    size: {
      xs: 'px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small',
      md: 'px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small',
      xl: 'px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-medium',
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: 'olive',
    size: 'xl',
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
      color: 'olive',
      class: 'bg-[#84cc16]/80 opacity-100',
    },
  ],
});

export default function Home() {
  return (
    <main
      className={`dark text-foreground bg-background flex min-h-screen flex-col items-center justify-start p-24`}
    >
      <div className='flex gap-4 pb-5'>
        <Button color='primary'>Button</Button>
        <Button isDisabled>Disabled</Button>
      </div>
      <div className='flex gap-4'>
        <MyButton>MyButton Default</MyButton>
        <MyButton color='orange'>orange</MyButton>
        <MyButton isDisabled>Disabled</MyButton>
      </div>
    </main>
  );
}
