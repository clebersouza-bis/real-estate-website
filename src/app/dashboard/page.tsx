"use client";
import { useEffect, useState } from "react";
import api from "@/src/lib/api";
import { Home, Landmark, ArrowUpRight } from "lucide-react";

interface Property {
  id: string;
  address: string;
  surplusAmount: string; 
  status: string;
}

export default function DashboardPage() {
  const [properties, setProperties] = useState<Property[]>([]); // Inicializa como array vazio
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const propId='cdef13c2-bf8b-45e1-9751-f0793a4d599d'
        const response = await api.get(`/properties/${propId}`); 
        
        // CORREÇÃO PARA O ERRO .MAP:
        // Se a resposta for um objeto único, colocamos dentro de um array []
        const data = Array.isArray(response.data) 
          ? response.data 
          : [response.data];

        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Property Claims</h1>
      
      {loading ? (
        <p className="text-slate-500">Loading...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((prop) => (
            <div key={prop.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Home size={20} />
                </div>
                <h3 className="font-bold text-slate-800 truncate text-sm">{prop.address}</h3>
              </div>
              
              <div className="flex justify-between items-end border-t border-slate-50 pt-4">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Surplus</p>
                  <p className="text-xl font-black text-slate-900">
                    $prop.surplusAmount
                  </p>
                </div>
                <span className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-bold uppercase">
                  {prop.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}