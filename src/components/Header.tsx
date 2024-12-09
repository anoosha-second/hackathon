"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { GoHeart } from 'react-icons/go';
import { MdPersonOutline } from 'react-icons/md';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image src={"/Pictures/Logo.png"} width={150} height={35} alt="Logo" className="w-auto h-auto" />
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="head">
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/shop"}><li>Shop</li></Link>
            <Link href={"/blog"}><li>Blog</li></Link>
            <Link href={"/contact"}><li>Contact</li></Link>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="flex flex-col items-center pt-20 space-y-4">
              <Link href={"/"} onClick={() => setIsMenuOpen(false)}><span>Home</span></Link>
              <Link href={"/shop"} onClick={() => setIsMenuOpen(false)}><span>Shop</span></Link>
              <Link href={"/blog"} onClick={() => setIsMenuOpen(false)}><span>Blog</span></Link>
              <Link href={"/contact"} onClick={() => setIsMenuOpen(false)}><span>Contact</span></Link>
            </div>
          </div>
        )}

        <div className="icons flex gap-4">
          <MdPersonOutline className="w-6 h-6" />
          <CiSearch className="w-6 h-6" />
          <GoHeart className="w-6 h-6" />
          <Link href={'/cart'}>
            <AiOutlineShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
}
