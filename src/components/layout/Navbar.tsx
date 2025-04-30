
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 w-full">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Caden Damiano
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button asChild className="text-gray-600 bg-secondary hover:text-white bg-muted">
          <a href="/lovable-uploads/cadenResume.pdf" onClick={toggleMenu}>Download My Resume</a>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white pt-20 px-6">
            <button 
              className="absolute top-6 right-6 focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-6 items-center">
              <NavLinks mobile onClick={toggleMenu} />
              <Button asChild className="w-full bg-primary hover:bg-muted">
              <a href="/lovable-uploads/cadenResume.pdf" onClick={toggleMenu}>Download My Resume</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const links = [

  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`font-medium transition-colors hover:text-primary ${
            mobile ? "text-2xl py-2" : ""
          }`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
