"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Books", link: "/books" },
  { name: "Categories", link: "/categories" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut({ redirectUrl: "/" });
  };

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-2xl text-primary">BookNook</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            {isSignedIn &&
              navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
          </nav>
          <div className="flex items-center">
            {isSignedIn ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <Image
                      src={user?.imageUrl || "/placeholder-avatar.png"}
                      className="rounded-full border-2 border-primary"
                      width={40}
                      height={40}
                      alt={user?.fullName || "User avatar"}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span className="font-medium">{user?.fullName}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button
                        onClick={handleSignOut}
                        variant="ghost"
                        className="w-full justify-start p-0 h-auto font-normal"
                      >
                        Sign out
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="md:hidden ml-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                  >
                    {mobileMenuOpen ? <X /> : <Menu />}
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-x-2">
                <Button asChild variant="ghost">
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="container bg-zinc-500/10 rounded-sm px-2 py-3 space-y-1">
          {isSignedIn &&
            navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-background transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
