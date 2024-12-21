import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt } from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Receipt, label: 'Transactions', path: '/transactions' },
];

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">NayePankh</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors',
                isActive && 'bg-gray-100 text-blue-600 border-r-4 border-blue-600'
              )
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}