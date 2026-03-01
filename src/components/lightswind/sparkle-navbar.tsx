import React from "react";
import { Link } from "react-router-dom";

export const SparkleNavbar = ({ links }: { links: { name: string; path: string }[] }) => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 md:px-8 bg-black/50 backdrop-blur-sm border-b border-neutral-800 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-white">
        Portfolio
      </Link>
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <Link key={link.path} to={link.path} className="text-neutral-300 hover:text-white transition-colors">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
