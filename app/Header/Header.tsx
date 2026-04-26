import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">MyApp</h1>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-300">
              Product
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:text-gray-300">
              signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
