const products = [
  {
    id: 1,
    name: 'Studio Tee — Bone',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Motion Hoodie — Onyx',
    price: '$98',
    image: 'https://images.unsplash.com/photo-1713742628722-b5068de6b211?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3Rpb24lMjBIb29kaWUlMjAlRTIlODAlOTQlMjBPbnl4fGVufDB8MHx8fDE3NjI2MTk2ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Contour Trousers — Slate',
    price: '$128',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Everyday Cap — Sand',
    price: '$36',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    tag: 'Restock',
  },
];

function ProductCard({ product }) {
  return (
    <a href="#" className="group block">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <p className="font-medium leading-tight">{product.name}</p>
          <p className="text-sm text-gray-600">{product.price}</p>
        </div>
        {product.tag && (
          <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-black text-white">{product.tag}</span>
        )}
      </div>
    </a>
  );
}

export default function ProductGrid() {
  return (
    <section id="new" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Featured Capsule</h2>
            <p className="text-gray-600">Handpicked pieces for the season</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 font-medium">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 font-medium w-full justify-center">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
