export function Navigation() {
  const pageTitles = ["About", "Menu", "Order", "Events", "Jobs", "Contact"];
  const pages = pageTitles.map((title) => ({
    title,
    link: "#" + title.toLowerCase(),
  }));
  pages.push({
    title: "Staff Login",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    target: "_blank",
  });
  return (
    <nav>
      <ul className="nav-menu">
        {pages.map(({ title, link, target }) => (
          <li key={title}>
            <a
              href={link}
              // target={target ? target : "_self"}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
