import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="w-1/5 bg-white p-4 shadow-lg">
      <ul>
        <li className="mb-4"><NavLink to="/dashboard" className="text-gray-800 font-bold" activeClassName="text-blue-500">Dashboard</NavLink></li>
        <li className="mb-4"><NavLink to="/tasks" className="text-gray-600" activeClassName="text-blue-500">Tasks</NavLink></li>
        <li className="mb-4"><NavLink to="/sales" className="text-gray-600" activeClassName="text-blue-500">Sales</NavLink></li>
        <li className="mb-4"><NavLink to="/customers" className="text-gray-600" activeClassName="text-blue-500">Customers</NavLink></li>
        <li className="mb-4"><NavLink to="/reports" className="text-gray-600" activeClassName="text-blue-500">Reports</NavLink></li>
        <li className="mb-4"><NavLink to="/settings" className="text-gray-600" activeClassName="text-blue-500">Settings</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
