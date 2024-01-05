import Image from 'next/image';
import { Inter } from 'next/font/google';
// import { Button } from '@andi/ui';

import { Button } from '@nextui-org/button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`dark text-foreground bg-background flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='flex gap-4'>
        <Button variant='bordered' radius='md'>
          Customized Theme Button
        </Button>
        <Button isDisabled color='primary' radius='md'>
          Disabled
        </Button>
      </div>
      <div className='flex flex-wrap gap-4 items-center'>
        <Button radius='full' className='bg-green-500 text-white shadow-lg'>
          Customize Button
        </Button>
        <Button radius='full' className='bg-green-500 p-8 text-white shadow-lg'>
          Customize Button
        </Button>
        <Button
          radius='full'
          className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
        >
          Customize Button
        </Button>
      </div>
      <Button isDisabled color='primary'>
        isDisabled
      </Button>
      <div className='flex flex-wrap gap-4 items-center'>
        <Button size='sm'>NextUI</Button>
        <Button size='md'>NextUI</Button>
        <Button size='lg'>NextUI</Button>
      </div>
      <div className='flex gap-4 items-center'>
        <Button radius='full'>Full</Button>
        <Button radius='lg'>Large</Button>
        <Button radius='md'>Medium</Button>
        <Button radius='sm'>Small</Button>
        <Button radius='none'>None</Button>
      </div>
      <div className='flex flex-wrap gap-4 items-center'>
        <Button color='primary' variant='solid'>
          Solid
        </Button>
        <Button color='primary' variant='faded'>
          Faded
        </Button>
        <Button color='primary' variant='bordered'>
          Bordered
        </Button>
        <Button color='primary' variant='light'>
          Light
        </Button>
        <Button color='primary' variant='flat'>
          Flat
        </Button>
        <Button color='primary' variant='ghost'>
          Ghost
        </Button>
        <Button color='primary' variant='shadow'>
          Shadow
        </Button>
      </div>

      <div className='flex flex-wrap gap-4 items-center'>
        <Button color='default'>Default</Button>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
        <Button color='danger'>Danger</Button>
      </div>
    </main>
  );
}
