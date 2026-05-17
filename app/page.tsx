import Link from "next/link";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="about" eyebrow="About" title="自己紹介">
          <div className="space-y-8">
            <div className="space-y-5 text-lg leading-8 text-zinc-300">
              {profile.about.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="grid gap-3">
              {profile.timeline.map((item) => (
                <div key={item} className="border-l border-accent/60 pl-5 text-zinc-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="research" eyebrow="Research" title="研究テーマ">
          <div className="grid gap-5 md:grid-cols-2">
            {profile.researchTopics.map((topic) => (
              <Card key={topic.title}>
                <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{topic.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="publications" eyebrow="Publications" title="論文">
          <div className="space-y-4">
            {profile.publications.map((publication) => (
              <Card key={publication.title}>
                <p className="text-sm text-accent">{publication.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-accent"
                  >
                    {publication.title}
                  </a>
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">{publication.authors}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <p className="text-zinc-300">{publication.venue}</p>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-accent underline-offset-4 hover:underline"
                  >
                    論文ページ
                  </a>
                  {"commentUrl" in publication && publication.commentUrl ? (
                    <a
                      href={publication.commentUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-accent underline-offset-4 hover:underline"
                    >
                      大学コメント
                    </a>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="presentations" eyebrow="Presentations" title="受賞・学会発表">
          <div className="space-y-10">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">受賞</h3>
              <div className="space-y-4">
                {profile.awards.map((award) => (
                  <Card key={`${award.year}-${award.title}`}>
                    <p className="text-sm text-accent">{award.year}</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      <a
                        href={award.url}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-accent"
                      >
                        {award.title}
                      </a>
                    </h4>
                    <p className="mt-3 leading-7 text-zinc-400">{award.description}</p>
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
                    >
                      受賞コメント
                    </a>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">口頭・ポスター発表</h3>
              <div className="space-y-4">
                {profile.presentations.map((presentation, index) => (
                  <Card key={`${presentation.year}-${index}-${presentation.title}`}>
                    <p className="text-sm text-accent">{presentation.year}</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">{presentation.title}</h4>
                    <p className="mt-3 leading-7 text-zinc-400">{presentation.authors}</p>
                    <p className="mt-2 leading-7 text-zinc-300">{presentation.venue}</p>
                  </Card>
                ))}
              </div>
            </div>
            <p className="text-sm leading-7 text-zinc-500">
              学会発表情報は横浜市立大学生命情報科学研究室および国立医薬品食品衛生研究所有機化学部の研究業績一覧を参照して整理しています。
            </p>
          </div>
        </Section>

        <Section id="fellowships" eyebrow="Fellowships" title="採択・奨学金">
          <div className="space-y-4">
            {profile.fellowships.map((item) => (
              <Card key={`${item.year}-${item.title}`}>
                <p className="text-sm text-accent">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="invited-talks" eyebrow="Invited Talks" title="招待講演">
          <div className="space-y-4">
            {profile.invitedTalks.map((talk) => (
              <Card key={`${talk.year}-${talk.title}`}>
                <p className="text-sm text-accent">{talk.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-accent"
                  >
                    {talk.title}
                  </a>
                </h3>
                <p className="mt-3 text-zinc-400">{talk.venue}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="books" eyebrow="Books" title="書籍・解説記事">
          <div className="space-y-4">
            {profile.books.map((book) => (
              <Card key={`${book.year}-${book.title}`}>
                <p className="text-sm text-accent">{book.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-accent"
                  >
                    {book.title}
                  </a>
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">{book.authors}</p>
                <p className="mt-2 leading-7 text-zinc-300">{book.venue}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="blog" eyebrow="Blog" title="雑記・研究メモ">
          <div className="space-y-4">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <Card>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white transition hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="mt-3 max-w-2xl leading-7 text-zinc-400">{post.excerpt}</p>
                    </div>
                    <time className="shrink-0 text-sm text-zinc-500">{post.date}</time>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="連絡先">
          <div className="space-y-5 text-lg text-zinc-300">
            <p>
              Email:{" "}
              <a className="text-accent underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a className="text-accent underline-offset-4 hover:underline" href={profile.githubUrl}>
                {profile.githubUrl.replace("https://", "")}
              </a>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
