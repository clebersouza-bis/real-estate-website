"use client";
import { useEffect, useState } from "react";
import api from "@/src/lib/api";
import { User, Phone, MapPin, Mail, Smartphone } from "lucide-react";

interface OwnerData {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  phones?: string[];
  addresses?: string[];
}

export default function ProfilePage() {
  const [owner, setOwner] = useState<OwnerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOwner() {
      try {
        // Substitua pelo ID real que você quer testar ou pegue de algum lugar
        const ownerId = "b554b82a-6f83-4257-9cab-38b542300d25"; 
        const response = await api.get(`/owner/${ownerId}`);
        setOwner(response.data);
      } catch (error) {
        console.error("Error fetching owner data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchOwner();
  }, []);

  if (loading) return <div className="p-8 text-slate-500">Loading profile...</div>;
  if (!owner) return <div className="p-8 text-red-500">Owner not found.</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
        <p className="text-slate-500">Manage your personal information and contact details.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card Principal */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
            {owner.firstName[0]}{owner.lastName[0]}
          </div>
          <h2 className="text-xl font-bold text-slate-800">{owner.firstName} {owner.lastName}</h2>
          <p className="text-sm text-slate-400 mb-6">Property Owner</p>
          <button className="w-full py-2 px-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition">
            Edit Photo
          </button>
        </div>

        {/* Detalhes */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-6">General Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                <Smartphone className="text-slate-400 mr-4" size={20} />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Primary Phone</p>
                  <p className="text-slate-700 font-medium">{owner.phone}</p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                <MapPin className="text-slate-400 mr-4" size={20} />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Primary Address</p>
                  <p className="text-slate-700 font-medium">{owner.address}</p>
                </div>
              </div>
            </div>

            {/* Listas Adicionais (Addresses) */}
            {owner.addresses && owner.addresses.length > 0 && (
              <div className="mt-8">
                <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">Other Addresses</h4>
                <ul className="space-y-2">
                  {owner.addresses.map((addr, idx) => (
                    <li key={idx} className="text-sm text-slate-600 border-l-2 border-blue-200 pl-3">
                      {addr}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Listas Adicionais (Phones) */}
            {owner.phones && owner.phones.length > 0 && (
              <div className="mt-8">
                <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">Alternative Phones</h4>
                <div className="flex flex-wrap gap-2">
                  {owner.phones.map((ph, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium border border-blue-100">
                      {ph}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}