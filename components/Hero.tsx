import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-65px)] max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.45fr_0.55fr]">
      <div>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-accent">
          {profile.titleJa} / {profile.title}
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
          {profile.nameJa}
        </h1>
        <p className="mt-4 text-2xl text-zinc-300">{profile.name}</p>
        <p className="mt-5 text-xl text-zinc-300">
          {profile.affiliationJa} / {profile.affiliation}
        </p>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">{profile.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3 text-sm text-zinc-300">
          <span className="border border-line bg-panel px-4 py-2">{profile.fieldJa}</span>
          <span className="border border-line bg-panel px-4 py-2">{profile.field}</span>
        </div>
      </div>
      <div className="justify-self-start lg:justify-self-end">
        <div
          aria-label={`${profile.name} profile photo`}
          className="flex aspect-square w-44 items-end overflow-hidden border border-line bg-panel bg-cover bg-center p-4 sm:w-56 lg:w-64"
          style={{ backgroundImage: `url(${profile.image})` }}
        >
          <span className="bg-ink/70 px-3 py-2 text-sm text-zinc-400 backdrop-blur">
            Profile
          </span>
        </div>
      </div>
    </section>
  );
}
