import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';

function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <div className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-black text-white grid place-items-center font-bold">R</div>
            <span className="font-extrabold tracking-widest">RICHI C</span>
          </div>
          <p className="mt-3 text-gray-600 max-w-xs">
            Elevated essentials engineered for comfort and movement.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#new" className="hover:text-black">New Arrivals</a></li>
            <li><a href="#men" className="hover:text-black">Men</a></li>
            <li><a href="#women" className="hover:text-black">Women</a></li>
            <li><a href="#sale" className="hover:text-black">Sale</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Sustainability</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">Shipping</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RICHI C. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PromoBanner />
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
