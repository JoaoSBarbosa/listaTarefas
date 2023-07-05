import { Nav } from "./Menu/Nav";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <a href="" id="logo">
        <img src="https://cdn-icons-png.flaticon.com/128/6733/6733650.png" alt="Logo" width={70}/>
      </a>
      <Nav />
    </header>
  );
};
