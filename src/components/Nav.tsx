"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Search } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>

            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={160}
                height={60}
                priority
                className="w-32 sm:w-36 h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={18} className="absolute right-3 text-gray-500" />
          </div>

          {/* Authentication Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="/signup"
              className="border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Sign Up
            </Link>

            <Link
              href="/login"
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-blue-600"
            >
              Contact
            </Link>

            {/* Mobile Search */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Mobile Authentication */}
            <div className="flex gap-3 sm:hidden">
              <Link
                href="/signup"
                className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-md"
              >
                Sign Up
              </Link>

              <Link
                href="/login"
                className="flex-1 text-center bg-gray-200 text-gray-700 py-2 rounded-md"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
