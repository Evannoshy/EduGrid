import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" fill="none" className="w-10 h-10">
                <g transform="translate(10, 10)">
                  {/* Left page / Deep teal grid */}
                  <rect x="0" y="20" width="20" height="20" fill="#0F4C5C" rx="4"/>
                  <rect x="25" y="10" width="20" height="30" fill="#0F4C5C" rx="4"/>
                  <rect x="0" y="45" width="20" height="30" fill="#0F4C5C" rx="4"/>
                  <rect x="25" y="45" width="20" height="20" fill="#0F4C5C" rx="4"/>
                  
                  {/* Right page / Vibrant light green grid */}
                  <rect x="55" y="10" width="20" height="30" fill="#96D800" rx="4"/>
                  <rect x="80" y="20" width="20" height="20" fill="#96D800" rx="4"/>
                  <rect x="55" y="45" width="20" height="20" fill="#96D800" rx="4"/>
                  <rect x="80" y="45" width="20" height="30" fill="#96D800" rx="4"/>
                </g>
              </svg>
              <span className="font-bold text-2xl tracking-tight text-[#0F4C5C]">EDUGRID</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-slate-600 hover:text-[#0F4C5C] font-medium transition-colors">Services</Link>
            <Link href="/#solutions" className="text-slate-600 hover:text-[#0F4C5C] font-medium transition-colors">Solutions</Link>
            <Link href="/dashboard" className="text-slate-600 hover:text-[#0F4C5C] font-medium transition-colors">Client Portal</Link>
            <Link href="/#contact" className="px-6 py-2.5 rounded-lg bg-[#0F4C5C] text-white font-medium hover:bg-[#0c3c49] transition-colors shadow-md hover:shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
