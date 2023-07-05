import { Link } from "./Link";

export const Nav = () => {
  return (
    <nav id="nav">
      <ul id="menu" className="flex gap-4 list-none">
        <Link href="https://joaosbarbosa.com.br/" linkTitle="Portfólio" />
        <Link href="/" linkTitle="LinkedIn" />
        <Link href="/" linkTitle="Projetos" />
      </ul>
    </nav>
  );
};
