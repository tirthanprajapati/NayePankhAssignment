import React from 'react';
import { Receipt } from 'lucide-react';

const transactions = [
  {
    id: 1,
    donor: 'Alice Smith',
    amount: 1000,
    date: '2024-03-15',
    status: 'completed',
  },
  {
    id: 2,
    donor: 'Bob Johnson',
    amount: 500,
    date: '2024-03-14',
    status: 'completed',
  },
];

export function Transactions() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
        <p className="text-gray-600 mt-2">
          Track all donations made through your referral link
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Receipt className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Recent Donations</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="pb-3 font-semibold text-gray-600">Donor</th>
                  <th className="pb-3 font-semibold text-gray-600">Amount</th>
                  <th className="pb-3 font-semibold text-gray-600">Date</th>
                  <th className="pb-3 font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-gray-100">
                    <td className="py-4">{tx.donor}</td>
                    <td className="py-4">₹{tx.amount.toLocaleString()}</td>
                    <td className="py-4">
                      {new Date(tx.date).toLocaleDateString()}
                    </td>
                    <td className="py-4">
                      <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}