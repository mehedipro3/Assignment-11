import { Link } from "react-router-dom";

const categories = [
  {
    name: "Science Fiction",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
  {
    name: "Mystery",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    name: "Romance",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    name: "History",
    image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
  },
];

export default function BookCategories() {

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Book Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category,idx) => (
            <Link to={`/category/${category.name}`}>
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
