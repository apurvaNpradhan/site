import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

const navItems = {
  '/blog': {
    name: 'blog',
  },

  '/projects': {
    name: 'projects',
  },
  '/about': {
    name: 'about',
  },
};

export function Header() {
  return (
    <aside className='mb-16 -ml-[8px] tracking-tight'>
      <div className='flex flex-row items-center justify-between lg:sticky lg:top-20'>
        <Link href='/'>
          <h1 className='font-bold'>Apurva N Pradhan</h1>
        </Link>
        <nav
          className='fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto'
          id='nav'
        >
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className='relative m-1 flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200'
                >
                  {name}
                </Link>
              );
            })}
          </div>

          <ModeToggle />
        </nav>
      </div>
    </aside>
  );
}
