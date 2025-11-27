import { Link } from "react-router";

export default function HeroBanner() {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">

        {/* TEXT */}
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-widest text-base-content/60">
            Spring / Summer Collection 2025
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content mt-4 leading-tight">
            Get up to <span className="text-primary">30% Off</span> New Arrivals
          </h1>

          <p className="mt-6 text-base-content/70 text-lg">
            Experience premium fashion selected carefully for modern lifestyles.
          </p>

          <Link className="btn btn-primary mt-8 btn-md" to="/products">
            Shop Now
          </Link>
        </div>

        {/* IMAGE */}
        <div className="w-full max-w-md rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
            alt="Hero Fashion"
            className="object-cover w-full h-[420px] rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
