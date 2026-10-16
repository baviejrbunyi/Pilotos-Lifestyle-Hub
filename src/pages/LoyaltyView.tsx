import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface LoyaltyViewProps {
  points: number;
  onAddPoints: (pts: number) => void;
}

export const LoyaltyView: React.FC<LoyaltyViewProps> = ({ points, onAddPoints }) => {
  const [claimedReward, setClaimedReward] = useState<string | null>(null);

  const handleClaim = (rewardName: string, cost: number) => {
    if (points >= cost) {
      onAddPoints(-cost);
      setClaimedReward(rewardName);
      setTimeout(() => setClaimedReward(null), 3500);
    } else {
      alert(`You need ${cost} points to claim this reward. Visit any of our 3 Batangas City branches to earn more!`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-wider text-[#D8CBB9] font-mono">Customer Lifetime Value</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase">PILOTOS PASS & REWARDS</h1>
        <p className="text-sm text-[#9CA3AF]">
          One unified loyalty system across Pilotos Grounds, Afterhours, and Barbershop 2.0. Earn points whether you order coffee or get a haircut.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-6 space-y-6">
          <div className="angst-card p-6 sm:p-8 bg-[#141414] space-y-6">
            <h2 className="text-xl font-bold uppercase">How the Loyalty System Works</h2>
            
            <div className="space-y-4">
              {[
                'Earn 10 points for every ₱100 spent across any of our 3 branches.',
                'Cross-branch redemption: Points earned at Pilotos Grounds are fully redeemable at Afterhours or Barbershop 2.0.',
                'VIP birthday perks: Free cold brew and 50% off grooming treatments during your birth month.'
              ].map((text, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-[#9CA3AF]">
                  <CheckCircle2 className="w-4 h-4 text-[#D8CBB9] shrink-0 mt-0.5" />
                  <span className="text-[#FFFFFF]">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#262626]">
              <button
                onClick={() => onAddPoints(100)}
                className="px-6 py-3 angst-button-outline text-xs flex items-center space-x-2 w-full justify-center"
              >
                <Sparkles className="w-4 h-4 text-[#D8CBB9]" />
                <span>Simulate Earn +100 Points</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="angst-card p-6 sm:p-8 bg-[#141414] space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#262626] pb-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9CA3AF] font-mono block">Digital Member Pass</span>
                <h3 className="font-bold text-xl">PILOTOS BLACK CARD</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#9CA3AF] font-mono block">Balance</span>
                <span className="text-2xl font-bold font-mono text-[#D8CBB9]">{points} PTS</span>
              </div>
            </div>

            {claimedReward && (
              <div className="p-3 bg-[#D8CBB9] text-[#0B0B0B] font-mono text-xs font-bold text-center rounded-md">
                🎉 Successfully claimed: {claimedReward}! Present voucher at counter.
              </div>
            )}

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-[#9CA3AF] font-mono">Available Rewards:</h4>
              
              <div className="space-y-3">
                {[
                  { name: 'Free Specialty Coffee (Any Size)', cost: 150, desc: 'Redeemable at Grounds or Afterhours' },
                  { name: '₱150 Off Barbershop 2.0 Cut', cost: 250, desc: 'Redeemable at Barbershop 2.0' },
                  { name: 'Pilotos Signature Pomade Tin', cost: 400, desc: 'Pick up at any branch counter' }
                ].map((reward, i) => (
                  <div key={i} className="p-4 bg-[#0B0B0B] border border-[#262626] rounded-md flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm">{reward.name}</div>
                      <div className="text-[11px] text-[#9CA3AF] font-mono mt-0.5">{reward.desc}</div>
                    </div>
                    <button
                      onClick={() => handleClaim(reward.name, reward.cost)}
                      className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-md transition-colors ${
                        points >= reward.cost
                          ? 'bg-[#D8CBB9] text-[#0B0B0B] hover:bg-[#FFFFFF]'
                          : 'bg-[#262626] text-[#9CA3AF] cursor-not-allowed'
                      }`}
                    >
                      Claim ({reward.cost} PTS)
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
