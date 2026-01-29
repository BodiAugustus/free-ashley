// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[var(--color-primary)] text-[var(--color-text-muted)] font-[var(--font-serif)] shadow-md w-screen">
      <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold text-white mb-4 md:mb-0">
          Free Ashley
        </div>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/story"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              The Story
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
