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
            {author && <p>by: {author}</p>}
            {url && <p>link: {url}</p>}
            {status && <p>status: {status}</p>}
            {type && <p>type: {type}</p>}
            {dateCreated && <p> Date Created: {dateCreated}</p>}
        </div>
        </header>
        <section>{children}</section>
    </article>
  );
}
