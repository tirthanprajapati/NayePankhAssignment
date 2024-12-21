import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { DashboardStats } from '../components/DashboardStats';

export function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Track your impact and share your donation campaign
        </p>
      </div>
      
      <DashboardStats />
    </div>
  );
}