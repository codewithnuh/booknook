"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Books",
      link: "/books",
    },
    {
      name: "Categories",
      link: "/categories",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className="container py-8">
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <span className="font-bold text-2xl text-foreground ">BookNook</span>
        </Link>
        <ul className="sm:flex space-x-4 hidden">
          {navItems.map((item, index) => (
            <li key={index}>{<Link href={item.link}>{item.name}</Link>}</li>
          ))}
        </ul>
        <div className="space-x-4">
          <Button asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
          <Button asChild variant={"secondary"}>
            <Link href={"/register"}>Create an account</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
