import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-[#0a1628] border-t border-[#1e3a5f] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-around items-center">
        <Link to="/" className="text-[#00d4ff] font-bold text-lg tracking-wide">
          EXODIA '25
        </Link>
        <button className="text-[#00d4ff] hover:text-white transition-colors text-sm uppercase tracking-wider">
          About
        </button>
        <button className="text-[#00d4ff] hover:text-white transition-colors text-sm uppercase tracking-wider">
          Timeline
        </button>
        <button className="text-[#00d4ff] hover:text-white transition-colors text-sm uppercase tracking-wider">
          Events
        </button>
        <button className="text-[#00d4ff] hover:text-white transition-colors text-sm uppercase tracking-wider">
          Contact
        </button>
      </div>
    </nav>
  );
}
