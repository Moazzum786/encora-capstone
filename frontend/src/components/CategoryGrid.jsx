import { Link } from "react-router";

export default function CategoryGrid() {
  const categories = [
    {
      name: "T-SHIRTS",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&q=80&w=800",
      slug: "t-shirts",
    },
    {
      name: "JEANS",
      img: "https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "jeans",
    },
    {
      name: "HOODIES",
      img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "hoodies",
    },
  ];

  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.slug} to={"/products"} className="relative block">
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
