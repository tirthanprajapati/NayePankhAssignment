import React from 'react';
import { Share2, Copy, Target } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { formatCurrency } from '../lib/utils';

export function DashboardStats() {
  const user = useAuthStore((state) => state.user);

  const handleCopyLink = () => {
    const link = `${window.location.origin}/donate/${user?.referralCode}`;
    navigator.clipboard.writeText(link);
    alert('Donation link copied to clipboard!');
  };

  const handleShareWhatsApp = () => {
    const link = `${window.location.origin}/donate/${user?.referralCode}`;
    const message = encodeURIComponent(
      `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${link} and make a difference!`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Goal Achieved</h3>
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(user?.totalDonations || 0)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Share Your Impact</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">Your Referral Code</span>
            <span className="font-mono text-blue-600">{user?.referralCode}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>Copy Link</span>
            </button>
            
            <button
              onClick={handleShareWhatsApp}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}