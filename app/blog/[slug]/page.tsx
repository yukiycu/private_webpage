import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { type BlogPost, getBlogSlugs, getPostBySlug } from "@/lib/blog";
import { Markdown } from "@/lib/markdown";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    return {
      title: post.title,
      description: post.excerpt
    };
  } catch {
    return {
      title: "Post not found"
    };
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  let post: BlogPost;

  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <Link href="/#blog" className="text-sm text-accent underline-offset-4 hover:underline">
          一覧へ戻る
        </Link>
        <article className="mt-10">
          <time className="text-sm text-zinc-500">{post.date}</time>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">{post.excerpt}</p>
          <div className="mt-12 border-t border-line pt-10">
            <Markdown content={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
