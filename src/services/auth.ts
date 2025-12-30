import api from "@/src/lib/api";
import Cookies from "js-cookie";

// 1. Defining the "LoginInput" shape (Same as your .NET Login DTO)
export interface LoginInput {
  email: string;
  password?: string;
}

// 2. Defining the API Response shape
export interface AuthResponse {
  name: string;
  token: string;
  expiration: string; // .NET usually sends ISO string or Date
}

// 3. Helper to calculate cookie expiration in days
// js-cookie needs "days" (e.g., 0.5 for 12 hours)
function calculateExpInDays(expirationDate: string): number {
  const exp = new Date(expirationDate).getTime();
  const now = new Date().getTime();
  const diffInMs = exp - now;
  return diffInMs / (1000 * 60 * 60 * 24);
}

export async function login(credentials: LoginInput) {
  // We use our axios instance from @/lib/api
  const res = await api.post<AuthResponse>('/auth/login', credentials);
  
  const { token, name, expiration } = res.data;

  if (token) {
    const days = calculateExpInDays(expiration);
    
    // Set the cookie
    Cookies.set("token", token, { 
      expires: days, 
      secure: true, // Only over HTTPS
      sameSite: 'strict' 
    });
    
    Cookies.set("userName", name, { expires: days });
  }
  
  return res.data;
}