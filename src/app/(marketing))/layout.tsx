"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const activeClass = (path: string) => 
    pathname === path ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600 transition";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 lg:px-12 border-b sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter italic">
          RECOVERY<span className="text-blue-600 font-extrabold">CO.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link href="/about" className={activeClass("/about")}>About Us</Link>
          <Link href="/services" className={activeClass("/services")}>Services</Link>
          <Link href="/contact" className={activeClass("/contact")}>Contact Us</Link>
          <Link href="/auth/login" className="rounded-full bg-slate-900 px-6 py-2.5 text-sm text-white hover:bg-slate-700 transition shadow-lg">
            Client Login
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer Profissional */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Coluna 1: Branding */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-white text-xl font-bold mb-4 italic">RECOVERY CO.</h3>
              <p className="text-sm leading-relaxed mb-6">
                Specialized in auditing government records to return unclaimed property tax surplus to rightful owners across the United States.
              </p>
              <div className="flex items-center space-x-2 text-blue-400 text-sm font-semibold">
                <ShieldCheck size={18} />
                <span>Verified Audit Division</span>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/about" className="hover:text-white transition">The Process</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Recovery Solutions</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact an Auditor</Link></li>
                <li><Link href="/auth/login" className="hover:text-white transition">Member Portal</Link></li>
              </ul>
            </div>

            {/* Coluna 3: Contato Rápido */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get in Touch</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-500" />
                  <span>claims@recoveryco.us</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={16} className="text-blue-500" />
                  <span>+1 (800) RECOVERY</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin size={16} className="text-blue-500" />
                  <span>Miami, FL Office</span>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Disclaimer Legal (Importante nos EUA) */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal Disclaimer</h4>
              <p className="text-[10px] leading-relaxed">
                RECOVERY CO. is a private investigative audit firm. We are not a government agency. 
                We operate on a contingency fee basis, meaning we only receive payment if we successfully recover funds for you.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest">
              © 2025 RECOVERY CO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6 text-[10px] uppercase tracking-widest font-bold">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}