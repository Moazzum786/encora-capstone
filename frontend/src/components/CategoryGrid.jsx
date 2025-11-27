import { Link } from "react-router";

export default function CategoryGrid() {
  const categories = [
    {
      name: "WOMEN'S",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&q=80&w=800",
      slug: "women",
    },
    {
      name: "ACCESSORIES",
      img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&q=80&w=800",
      slug: "accessories",
    },
    {
      name: "MEN'S",
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&q=80&w=800",
      slug: "men",
    },
  ];

  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products?category=${cat.slug}`}
              className="relative block"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-72 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="badge bg-base-100/70 text-base-content px-4 py-3 shadow-md">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
