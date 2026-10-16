import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2, ArrowRight, Gift } from 'lucide-react';

interface LoyaltySectionProps {
  points: number;
  onAddPoints: (pts: number) => void;
}

export const LoyaltySection: React.FC<LoyaltySectionProps> = ({ points, onAddPoints }) => {
  const [claimedReward, setClaimedReward] = useState<string | null>(null);

  const handleClaim = (rewardName: string, cost: number) => {
    if (points >= cost) {
      onAddPoints(-cost);
      setClaimedReward(rewardName);
      setTimeout(() => setClaimedReward(null), 3500);
    } else {
      alert(`You need ${cost} points to claim this reward. Visit any of our 4 Batangas City branches to earn more!`);
    }
  };

  return (
    <section id="loyalty" className="py-20 border-b border-[#242424] bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#D8CBB9] font-mono block">
              // Unified Customer Lifetime Value
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              PILOTOS PASS & REWARDS
            </h2>
            <p className="text-[#8E8E93] text-sm font-mono leading-relaxed">
              One unified loyalty system across all four Batangas City branches. Earn points whether you order a Sea Salt Latte at the cafe or get a skin fade at the barbershop. Redeem anywhere, anytime.
            </p>

            <div className="space-y-4 pt-2">
              {[
                'Earn 10 points for every ₱100 spent on coffee, pastries, or grooming.',
                'Cross-branch recognition: Points earned in Pallocan redeemable in Alangilan, Kumintang, or Bolbok.',
                'VIP birthday perks: Free cold brew and 50% off beard trims during your birth month.'
              ].map((text, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-[#FFFFFF] font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#D8CBB9] shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onAddPoints(100)}
                className="px-6 py-3 angst-button-outline text-xs flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-[#D8CBB9]" />
                <span>Simulate Earn +100 Points (Test Drive)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Digital Stamp Pass Card */}
          <div className="lg:col-span-6">
            <div className="angst-card p-6 sm:p-8 bg-[#141414] relative overflow-hidden space-y-6 border border-[#242424]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D8CBB9]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#242424] pb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8E93] font-mono block">Member Pass</span>
                  <h3 className="font-['Syne'] font-bold text-xl text-[#FFFFFF]">PILOTOS BLACK CARD</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#8E8E93] font-mono block">Current Balance</span>
                  <span className="text-2xl font-bold font-mono text-[#D8CBB9]">{points} PTS</span>
                </div>
              </div>

              {claimedReward && (
                <div className="p-3 bg-[#D8CBB9] text-[#0B0B0B] font-mono text-xs font-bold text-center">
                  🎉 Reward Claimed: {claimedReward}! Show voucher at any branch counter.
                </div>
              )}

              {/* Reward Redemptions */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#8E8E93] font-mono">Available Rewards:</h4>
                
                <div className="space-y-3">
                  {[
                    { name: 'Free Specialty Coffee (Any Size)', cost: 150, desc: 'Redeemable at any Pilotos Cafe' },
                    { name: '₱150 Off Any Barbershop Cut', cost: 250, desc: 'Redeemable at any Pilotos Barbershop' },
                    { name: 'Pilotos Signature Pomade Tin', cost: 400, desc: 'Pick up at Pallocan or Alangilan branch' }
                  ].map((reward, i) => (
                    <div key={i} className="p-4 bg-[#0B0B0B] border border-[#242424] flex items-center justify-between">
                      <div>
                        <div className="font-['Syne'] font-bold text-sm text-[#FFFFFF]">{reward.name}</div>
                        <div className="text-[11px] text-[#8E8E93] font-mono mt-0.5">{reward.desc}</div>
                      </div>
                      <button
                        onClick={() => handleClaim(reward.name, reward.cost)}
                        className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                          points >= reward.cost
                            ? 'bg-[#D8CBB9] text-[#0B0B0B] hover:bg-[#FFFFFF]'
                            : 'bg-[#242424] text-[#8E8E93] cursor-not-allowed'
                        }`}
                      >
                        Claim ({reward.cost} PTS)
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] text-[#8E8E93] font-mono">
                  &bull; Verified across all 4 Petron-adjacent hubs in Batangas City
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
