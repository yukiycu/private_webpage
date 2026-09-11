type AuthorsProps = {
  authors: string;
};

const ownName = /(村上\s*優貴|Yuki Murakami|Y\. Murakami|Murakami, Y\.)/;

export function Authors({ authors }: AuthorsProps) {
  return authors.split(ownName).map((text, index) =>
    index % 2 === 1 ? (
      <strong key={index} className='font-bold text-white'>
        {text}
      </strong>
    ) : text
  );
}
