export default function SourceLayout({ children, ...frontMatter }) {
  const {
    author,    
    url,
    status,
    type,
    dateCreated,
  } = frontMatter;
  return (
    <article className="docs prose prose-a:text-primary dark:prose-a:text-primary-dark prose-strong:text-primary dark:prose-strong:text-primary-dark prose-code:text-primary dark:prose-code:text-primary-dark prose-headings:text-primary dark:prose-headings:text-primary-dark text-primary dark:text-primary-dark prose-headings:font-headings dark:prose-invert prose-a:break-words mx-auto p-6">
      <header>
        <div className="container mx-auto">
            {author && <p>{author}</p>}
            {url && <p>{url}</p>}
            {status && <p>{status}</p>}
            {type && <p>{type}</p>}
            {dateCreated && <p>{dateCreated}</p>}
        </div>
        </header>
        <section>{children}</section>
    </article>
  );
}
