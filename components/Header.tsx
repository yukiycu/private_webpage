'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

const navItems = [
  { href: "#about", label: "自己紹介" },
  { href: "#research", label: "研究" },
  { href: "#publications", label: "論文" },
  { href: "#presentations", label: "発表" },
  { href: "#fellowships", label: "採択" },
  { href: "#invited-talks", label: "講演" },
  { href: "#books", label: "書籍" },
  { href: "#contact", label: "連絡先" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className='sticky top-0 z-20 border-b border-line bg-ink/[0.96] backdrop-blur'>
      <nav
        aria-label='メインナビゲーション'
        className='relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8 lg:py-4'
        onKeyDown={(event) => {
          if (event.key === 'Escape' && isOpen) {
            setIsOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        <Link href="/" className="text-sm font-semibold text-white">
          村上 優貴
        </Link>
        <button
          ref={menuButton}
          type='button'
          aria-expanded={isOpen}
          aria-controls='mobile-navigation'
          onClick={() => setIsOpen(!isOpen)}
          className='min-h-11 border border-line px-4 text-sm text-zinc-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent lg:hidden'
        >
          {isOpen ? '閉じる' : 'メニュー'}
        </button>
        <div
          id='mobile-navigation'
          hidden={!isOpen}
          className='absolute inset-x-0 top-full max-h-[calc(100dvh-69px)] overflow-y-auto border-b border-line bg-ink px-6 py-4 sm:px-8 lg:hidden'
        >
          <div className='grid grid-cols-2 gap-2'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  document.querySelector<HTMLElement>(item.href)?.focus({ preventScroll: true });
                }}
                className='flex min-h-11 items-center px-3 py-2 text-sm text-zinc-300 hover:bg-panel hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent'
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden items-center gap-4 text-sm text-zinc-400 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
