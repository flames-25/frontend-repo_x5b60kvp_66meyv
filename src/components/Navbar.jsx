import { useState } from 'react';
import { ShoppingBag, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'New Arrivals', href: '#new' },
    { label: 'Men', href: '#men' },
    { label: 'Women', href: '#women' },
    { label: 'Sale', href: '#sale' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-black text-white grid place-items-center font-bold">R</div>
          <span className="font-extrabold tracking-widest text-xl">RICHI C</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Account" className="p-2 rounded-full hover:bg-black/5">
            <User className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="p-2 rounded-full hover:bg-black/5">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-black/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-2 py-2 rounded-md text-gray-700 hover:bg-black/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-2 pt-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-black text-white">
                <User className="h-4 w-4" /> Account
              </button>
              <button className="inline-flex items-center justify-center p-2 rounded-md border border-black/10">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
