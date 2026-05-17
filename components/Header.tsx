import Link from "next/link";

const navItems = [
  { href: "#about", label: "自己紹介" },
  { href: "#research", label: "研究" },
  { href: "#publications", label: "論文" },
  { href: "#presentations", label: "発表" },
  { href: "#fellowships", label: "採択" },
  { href: "#invited-talks", label: "講演" },
  { href: "#books", label: "書籍" },
  { href: "#blog", label: "ブログ" },
  { href: "#contact", label: "連絡先" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/86 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="text-sm font-semibold text-white">
          村上 優貴
        </Link>
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
