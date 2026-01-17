import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'About', href: '/#about', type: 'hash' },
  {
    name: 'Services',
    href: '/#services',
    type: 'hash',
    dropdown: [
      { name: 'Business Consulting', href: '/#services' },
      { name: 'Startup Advisory', href: '/#services' },
      { name: 'Financial Planning', href: '/#services' },
      { name: 'Training Programs', href: '/#services' },
    ],
  },
  { name: 'Insights', href: '/insights', type: 'route' },
  { name: 'Gallery', href: '/gallery', type: 'route' },
  { name: 'Careers', href: '/careers', type: 'route' },
  { name: 'Contact', href: '/contact', type: 'route' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const NavLink = ({ link, children, className, onClick }) => {
    if (link.type === 'route') {
      return (
        <Link to={link.href} className={className} onClick={onClick}>
          {children}
        </Link>
      );
    }
    return (
      <a href={link.href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-lg shadow-soft py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.jpeg"
                alt="DA Accretion"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    link={link}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-md flex items-center gap-1 transition-colors',
                      isScrolled
                        ? 'text-foreground hover:text-primary hover:bg-muted'
                        : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                    )}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </NavLink>
                </motion.div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-56"
                    >
                      <div className="bg-card rounded-xl shadow-elevated border border-border p-2">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact">
              <Button
                variant={isScrolled ? 'gold' : 'hero'}
                size="default"
                className="group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-6 h-6', isScrolled ? 'text-foreground' : 'text-primary-foreground')} />
            ) : (
              <Menu className={cn('w-6 h-6', isScrolled ? 'text-foreground' : 'text-primary-foreground')} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-card rounded-xl shadow-elevated border border-border p-4 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    link={link}
                    className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="pt-2 border-t border-border">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="gold" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
