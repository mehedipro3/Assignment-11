// components/TrustedBy.jsx

export default function TrustedBy() {
  const partners = [
    { name: "Oxford International School", logo: "https://ois.edu.bd/wp-content/uploads/2021/05/Oxford-International-School.webp" },
    { name: "Scholars Academy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_A1vDnOPadmtDbJetVY4Wm5BCBeiTKcd0rQ&s" },
    { name: "Dhaka Public School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPg3LONwZZVvH0sVFEcohYVVUlOYqeoftbJg&s" },
    { name: "Dhaka Public School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gSyr1w0M6cGEVht1cPXOajuYmk8mf5HTBA&s" },
    { name: "Global Education Group", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZDExUT1o3JxFrbRI4817ZvCe67CSI07yKg&s" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Trusted by Leading Institutions</h2>
        <p className="text-gray-600 mb-10">Our system is trusted by top schools and education groups to manage their library efficiently.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="opacity-80 hover:opacity-100 transition duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
