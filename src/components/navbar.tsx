import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white flex flex=row p-3">
      <Link href="/">Home</Link>
    </nav>
  );
};
