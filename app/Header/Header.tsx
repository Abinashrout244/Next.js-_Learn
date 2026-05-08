"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const Links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Product",
      href: "/products",
    },
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
  ];

  const pathName = usePathname();
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">MyApp</h1>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6">
          {Links.map((i, index) => {
            const isActive =
              pathName == i.href ||
              (pathName.startsWith(i.href) && i.href != "/");
            return (
              <Link
                href={i.href}
                key={index}
                className={`hover:text-gray-30 ${isActive ? "border-b-2 border-b-cyan-400 animate-bounce transition-all" : "border-none"}`}
              >
                <li>{i.name}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
