import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4oK-QfYlU4R4k5kZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-700">App Richi C</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold leading-[1.05]">
            Minimal luxury for everyday motion
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl">
            A refined capsule of silhouettes engineered for comfort, cut in premium
            organic fabrics and crafted with meticulous detail.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#new" className="px-5 py-3 rounded-full bg-black text-white font-medium">Shop New</a>
            <a href="#women" className="px-5 py-3 rounded-full border border-black/10 font-medium">Explore Women</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
