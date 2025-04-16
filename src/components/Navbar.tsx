
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-neutral-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary font-bold text-xl">CompeteConnect</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-neutral-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/competitions" className="text-neutral-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Competitions
            </Link>
            <Link to="/about" className="text-neutral-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-neutral-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline" className="text-sm h-9">Log in</Button>
              </Link>
              <Link to="/register">
                <Button className="text-sm h-9">Sign up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-muted hover:text-primary hover:bg-neutral-background"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-text hover:text-primary hover:bg-neutral-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/competitions"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-text hover:text-primary hover:bg-neutral-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Competitions
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-text hover:text-primary hover:bg-neutral-background"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-text hover:text-primary hover:bg-neutral-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-neutral-border">
            <div className="px-2 space-y-2">
              <Link
                to="/login"
                className="block w-full px-3 py-2 rounded-md text-center text-base font-medium text-neutral-text hover:text-primary hover:bg-neutral-background"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="block w-full px-3 py-2 rounded-md text-center text-base font-medium bg-primary text-white hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
