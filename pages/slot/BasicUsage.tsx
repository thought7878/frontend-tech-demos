import Image from 'next/image';
import { tv } from 'tailwind-variants';

const card = tv({
  slots: {
    base: 'md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-900',
    avatar:
      'w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto drop-shadow-lg',
    wrapper: 'flex-1 pt-6 md:p-8 text-center md:text-left space-y-4',
    description: 'text-md font-medium',
    infoWrapper: 'font-medium',
    name: 'text-sm text-sky-500 dark:text-sky-400',
    role: 'text-sm text-slate-700 dark:text-slate-500',
  },
});

const { base, avatar, wrapper, description, infoWrapper, name, role } = card();

export default function BasicUsage() {
  return (
    <figure className={base()}>
      <Image
        className={avatar()}
        src='/intro-avatar.png'
        alt=''
        width='384'
        height='512'
      />
      <div className={wrapper()}>
        <blockquote>
          <p className={description()}>
            “Tailwind variants allows you to reduce repeated code in your
            project and make it more readable. They fixed the headache of
            building a design system with TailwindCSS.”
          </p>
        </blockquote>
        <figcaption className={infoWrapper()}>
          <div className={name()}>Zoey Lang</div>
          <div className={role()}>Full-stack developer, NextUI</div>
        </figcaption>
      </div>
    </figure>
  );
}
