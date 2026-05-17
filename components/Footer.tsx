import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-zinc-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>{profile.nameJa} / {profile.name}</p>
        <p>{profile.affiliationJa}</p>
      </div>
    </footer>
  );
}
