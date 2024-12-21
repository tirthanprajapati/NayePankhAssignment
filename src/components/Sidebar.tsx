import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, Menu } from 'lucide-react';
import { cn } from '../lib/utils';
import './Sidebar.css'; // Add this line to include Sidebar CSS

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Receipt, label: 'Transactions', path: '/transactions' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn("sidebar", isCollapsed && "collapsed")}>
      <div className="p-4 md:p-6 flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">NayePankh</h2>
        <button
          className="md:hidden"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <nav className="mt-4 md:mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center px-4 md:px-6 py-2 md:py-3 text-gray-700 hover:bg-gray-100 transition-colors',
                isActive && 'bg-gray-100 text-blue-600 border-r-4 border-blue-600'
              )
            }
          >
            <item.icon className="w-5 h-5 mr-2 md:mr-3" />
            <span className={cn(isCollapsed && "hidden")}>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;