// Shared red banner at the top of every inner page (Issue 8).
// Styles live in src/assets/css/page-hero.css.
export default function PageHero({ title, children }) {
  return (
    <section className="page-hero">
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </section>
  );
}
