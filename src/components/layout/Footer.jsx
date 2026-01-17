import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, ArrowUp, Mail } from 'lucide-react';
import { Button } from '../ui/button';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Our Team', href: '/#about' },
    { name: 'Careers', href: '/careers', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true },
  ],
  services: [
    { name: 'Business Consulting', href: '/#services' },
    { name: 'Startup Advisory', href: '/#services' },
    { name: 'Training Programs', href: '/#services' },
    { name: 'Export/Import', href: '/#services' },
  ],
  resources: [
    { name: 'Insights', href: '/insights', isRoute: true },
    { name: 'Gallery', href: '/gallery', isRoute: true },
    { name: 'Industry Reports', href: '/insights', isRoute: true },
    { name: 'FAQs', href: '/contact', isRoute: true },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/da-accretion-consultants/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/DAaccretion', label: 'Twitter' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1AJvYEm3fE/', label: 'Facebook' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderLink = (link) => {
    if (link.isRoute) {
      return (
        <Link
          to={link.href}
          className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
        >
          {link.name}
        </Link>
      );
    }
    return (
      <a
        href={link.href}
        className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
      >
        {link.name}
      </a>
    );
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Top Border Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-secondary via-secondary/50 to-secondary" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/images/logo.jpeg"
                alt="DA Accretion"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Transforming business ideas into thriving ventures. We provide strategic consulting, expert training, and global trading solutions.
            </p>

            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/40" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
              <Button variant="gold" size="default">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} DA Accretion. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
