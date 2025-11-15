export default function Footer() {
  return (
    <footer  className="bg-black text-gray-400 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-xl tracking-wide">VyomGarud</h3>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            Defense-grade UAV systems engineered for precision, autonomy, 
            and mission-critical performance.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-sm">
          <h4 className="text-white font-semibold mb-3 tracking-wide">Navigation</h4>
          <ul className="space-y-2">
            <li className="hover:text-[#ff7b00] transition">Home</li>
            <li className="hover:text-[#ff7b00] transition">About</li>
            <li className="hover:text-[#ff7b00] transition">Capabilities</li>
            <li className="hover:text-[#ff7b00] transition">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <h4 className="text-white font-semibold mb-3 tracking-wide">Contact</h4>
          <p className="text-gray-500">Email:</p>
          <p className="hover:text-[#ff7b00] transition cursor-pointer">
            contact@vyomgarud.com
          </p>

          <p className="mt-3 text-gray-500">Phone:</p>
          <p className="hover:text-[#ff7b00] transition cursor-pointer">
            +91 8881444693
          </p>
        </div>
      </div>

      <div className="text-center py-6 border-t border-neutral-900 text-gray-600 text-md">
        © {new Date().getFullYear()} VyomGarud. All Rights Reserved.
      </div>
    </footer>
  );
}
