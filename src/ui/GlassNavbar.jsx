import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/community-impact', label: 'Blogs' },
];

export default function GlassNavbar() {
  const [isTop, setIsTop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const prevScroll = useRef(0);

  useEffect(() => {
    setMounted(true);
    prevScroll.current = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setIsTop(current < 40);
      prevScroll.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${isTop ? 'top-6' : 'top-3'}`}
      aria-label="Primary navigation"
    >
      <div
        className={`mx-auto backdrop-blur-lg backdrop-saturate-125 bg-black/20 border border-white/20 ring-1 ring-white/10 rounded-full px-6 flex items-center justify-center gap-3 transition-all duration-300 ease-out ${
          isTop
            ? 'py-4 scale-100 w-[99%] max-w-7xl shadow-xl hover:shadow-2xl'
            : 'py-2 scale-95 w-[96%] max-w-6xl shadow-2xl'
        }`}
        style={{ willChange: 'transform, width, padding' }}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `px-6 py-3 rounded-full transition-all duration-200 ease-out select-none text-lg md:text-xl lg:text-2xl font-extrabold ${
                isActive
                  ? 'bg-white/10 text-yellow-300 shadow-sm scale-105 ring-1 ring-white/20'
                  : 'text-white hover:bg-white/10 hover:scale-105'
              }`
            }
          >
            <span className="relative drop-shadow-lg text-lg md:text-xl lg:text-2xl tracking-wide">{link.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
