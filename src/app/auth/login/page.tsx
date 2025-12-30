"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/src/services/auth"; // Ajustado o path aqui

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      router.push("/dashboard"); 
      // await login({ email, password });
      router.push("/dashboard"); 
    } catch (error) {
      console.error(error);
      alert("Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-xl">
        <div className="text-center">
        <div className="text-3xl font-bold text-blue-800">RECOVERY CO.</div>
          <h2 className="text-2xl font-extrabold text-gray-900">Client Portal</h2>
          <p className="mt-2 text-sm text-gray-500">Sign in to track your recovery process</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition"
                placeholder="name@company.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300 transition-all shadow-md"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
        
        <p className="text-center text-xs text-gray-400 mt-4">
          Secure access for authorized property owners only.
        </p>
      </div>
    </div>
  );
}