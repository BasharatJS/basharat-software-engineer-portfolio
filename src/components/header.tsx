'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-color-scheme: dark)').matches 
      : false;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              CodeByBasharat
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Projects', href: '/projects' },
              { name: 'Services', href: '/services' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg'
                      : 'text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600/80 hover:via-purple-600/80 hover:to-indigo-600/80 hover:shadow-lg'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  <div 
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transition-all duration-300 ${
                      isActive ? 'w-8' : 'w-0 group-hover:w-6'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-accent hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-accent-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-accent-foreground" />
              )}
            </button>
            
            <button className="md:hidden p-2 rounded-lg bg-accent hover:bg-muted transition-colors">
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className="block w-4 h-0.5 bg-accent-foreground mb-1"></span>
                <span className="block w-4 h-0.5 bg-accent-foreground mb-1"></span>
                <span className="block w-4 h-0.5 bg-accent-foreground"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}