import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  referralCode: string;
  totalDonations: number;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: {
    id: '1',
    name: 'John Doe',
    referralCode: 'ABC123',
    totalDonations: 25000,
  },
  setUser: (user) => set({ user }),
}));