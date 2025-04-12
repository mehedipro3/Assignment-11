// components/HowItWorks.jsx
export default function HowItWorks() {
  const steps = [
    { title: "Search & Browse", description: "Find books by title, author, or category." },
    { title: "Request or Borrow", description: "Easily request to borrow any available book." },
    { title: "Return On Time", description: "Keep track of due dates and return books promptly." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-gray-600 mb-10">Managing library resources made simple in 3 steps.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md">
              <div className="text-5xl font-bold text-indigo-600 mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
