import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-black italic tracking-tighter text-white">
              F1<span className="text-red-600">TECH</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#cars" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Cars</Link>
              <Link href="#engines" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Power Units</Link>
              <Link href="#specs" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Specs</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
