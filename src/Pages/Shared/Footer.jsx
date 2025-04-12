import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-300 to-indigo-800 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Library Management System</h2>
          <p>
            A smart, efficient way to manage and explore your school's library collection. Easy borrowing, returning, and discovering new books – all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/catalog" className="hover:underline">Browse Catalog</a></li>
            <li><a href="/borrowed" className="hover:underline">Borrowed Books</a></li>
            <li><a href="/admin" className="hover:underline">Admin Panel</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 School Rd, Dhaka, BD</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +880 1234 567 890</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@schoollibrary.edu</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          </div>
          <p className="mt-4 text-xs text-gray-300">© {new Date().getFullYear()} School Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;