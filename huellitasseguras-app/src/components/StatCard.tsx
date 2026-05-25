import React from 'react';


interface StatCardProps {
  title: string;      
  value: number;      
  color: string;      
}


export const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
        <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
      </div>
      {/* El círculo de color de la derecha */}
      <div className={`w-12 h-12 rounded-full ${color} opacity-20 flex items-center justify-center`} />
    </div>
  );
};