type Link = {
  href: string;
  linkTitle: string;
};
export const Link = ({ href, linkTitle }: Link) => {
  return (
    <li>
      <a href={href} target="_blank" className="no-underline block text-white">
        {linkTitle}
      </a>
    </li>
  );
};
