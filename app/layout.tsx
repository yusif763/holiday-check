'use client';

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <html lang="en">
        <body className="bg-gray-50 text-gray-800">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-[#1b4747]">
                    <Link href="/">HalalHolidayCheck</Link>
                </h1>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Menu Links */}
                <ul
                    className={`lg:flex space-x-6 text-gray-800 font-semibold ${
                        isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg p-6' : 'hidden'
                    } lg:static lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6 lg:bg-transparent lg:shadow-none`}
                >
                    <li>
                        <Link
                            href="/"
                            className="hover:text-[#1b4747] transition block py-2 lg:py-0"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/hotels"
                            className="hover:text-[#1b4747] transition block py-2 lg:py-0"
                        >
                            Hotels
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-[#1b4747] transition block py-2 lg:py-0"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:text-[#1b4747] transition block py-2 lg:py-0"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

        {/* Main Content */}
        <main className="mt-[64px]">{children}</main>

        {/* Footer */}
        <footer className="bg-[#145e5e] text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-bold">Ready to Explore?</h2>
                <p className="mt-2">Plan your halal-friendly trip with us today!</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <Link
                        href="/"
                        className="px-4 py-2 bg-white text-[#1b4747] font-semibold rounded hover:bg-gray-200"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/contact"
                        className="px-4 py-2 bg-white text-[#1b4747] font-semibold rounded hover:bg-gray-200"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            <p className="text-center mt-6 text-sm">&copy; 2024 HalalHolidayCheck. All Rights Reserved.</p>
        </footer>
        </body>
        </html>
    );
}
