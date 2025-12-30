"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Importe usePathname
import { LayoutDashboard, User, LogOut, MessageSquare } from "lucide-react";
import Cookies from "js-cookie";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Pega a rota atual
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  // Função para aplicar a classe de "Ativo"
  const isActive = (path: string) => 
    pathname === path ? "bg-blue-600 text-white" : "hover:bg-slate-800 text-slate-400";

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed h-full">
        <div className="p-6 text-xl font-bold border-b border-slate-800">
          RECOVERY <span className="text-blue-400">PORTAL</span>
        </div>
        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link href="/dashboard" className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive("/dashboard")}`}>
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </Link>
          <Link href="/dashboard/profile" className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive("/dashboard/profile")}`}>
            <User size={20} />
            <span>My Profile</span>
          </Link>
        </nav>
        {/* Botão de Logout */}
        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-red-900/30 text-red-400 transition">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 md:ml-64">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8">
            <div className="flex space-x-6 items-center">
                {/* 2. Menu superior com Contact Us */}
                <Link href="/marketing/contact" className="text-sm font-medium text-slate-600 hover:text-blue-600">Contact Support</Link>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">U</div>
            </div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}