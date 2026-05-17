import Link from "next/link";

type MarkdownProps = {
  content: string;
};

function inline(text: string) {
  const linkMatch = text.match(/^\[(.+)\]\((.+)\)$/);

  if (linkMatch) {
    return (
      <Link href={linkMatch[2]} className="text-accent underline-offset-4 hover:underline">
        {linkMatch[1]}
      </Link>
    );
  }

  return text;
}

export function Markdown({ content }: MarkdownProps) {
  const blocks = content.split(/\n{2,}/);

  return (
    <div className="space-y-6 text-base leading-8 text-zinc-300">
      {blocks.map((block) => {
        const key = block.slice(0, 40);

        if (block.startsWith("## ")) {
          return (
            <h2 key={key} className="pt-4 text-2xl font-semibold text-white">
              {block.replace("## ", "")}
            </h2>
          );
        }

        if (block.startsWith("# ")) {
          return (
            <h1 key={key} className="text-3xl font-semibold text-white">
              {block.replace("# ", "")}
            </h1>
          );
        }

        if (block.startsWith("- ")) {
          return (
            <ul key={key} className="list-disc space-y-2 pl-5">
              {block.split("\n").map((item) => (
                <li key={item}>{inline(item.replace("- ", ""))}</li>
              ))}
            </ul>
          );
        }

        return <p key={key}>{inline(block)}</p>;
      })}
    </div>
  );
}
