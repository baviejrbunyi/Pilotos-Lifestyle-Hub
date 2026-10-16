import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, Check, ArrowRight } from 'lucide-react';
import { MenuItem } from '../data/pilotosData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  milkOption?: string;
  notes?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onAddPoints: (pts: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  onAddPoints
}) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('takeaway');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const serviceFee = subtotal > 0 ? 25 : 0;
  const total = subtotal + serviceFee;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const earnedPts = Math.floor(subtotal / 10);
    onAddPoints(earnedPts);
    setOrderPlaced(true);
  };

  const handleCloseAll = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#0B0B0B]/80 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#141414] border-l border-[#242424] flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#242424] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#D8CBB9]" />
              <h3 className="font-['Syne'] font-bold text-lg text-[#FFFFFF]">PILOTOS CAFE CART</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-[#0B0B0B] border border-[#242424] text-[#8E8E93] hover:text-[#FFFFFF]"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {!orderPlaced ? (
              <>
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <ShoppingBag className="w-12 h-12 text-[#8E8E93] mx-auto opacity-40" />
                    <p className="text-xs text-[#8E8E93] font-mono">Your cafe order cart is currently empty.</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {cartItems.map((ci, idx) => (
                        <div key={idx} className="p-4 bg-[#0B0B0B] border border-[#242424] flex items-start justify-between">
                          <div className="space-y-1">
                            <h4 className="font-['Syne'] font-bold text-sm text-[#FFFFFF]">{ci.item.name}</h4>
                            <div className="text-[11px] text-[#8E8E93] font-mono">
                              Qty: {ci.quantity} &bull; ₱{ci.item.price * ci.quantity}
                            </div>
                            {ci.milkOption && (
                              <div className="text-[10px] text-[#D8CBB9] font-mono">Milk: {ci.milkOption}</div>
                            )}
                            {ci.notes && (
                              <div className="text-[10px] text-[#8E8E93] italic">Note: {ci.notes}</div>
                            )}
                          </div>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="p-1.5 text-[#8E8E93] hover:text-[#FFFFFF]"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Order Type Selector */}
                    <div className="space-y-2 pt-4 border-t border-[#242424]">
                      <label className="block text-xs font-mono uppercase text-[#FFFFFF]">Order Type:</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['takeaway', 'dine-in'].map((type) => (
                          <button
                            key={type}
                            onClick={() => setOrderType(type as any)}
                            className={`py-2 text-xs font-mono uppercase border text-center transition-colors ${
                              orderType === type
                                ? 'bg-[#D8CBB9] text-[#0B0B0B] border-[#D8CBB9] font-bold'
                                : 'bg-[#0B0B0B] text-[#8E8E93] border-[#242424]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-[#D8CBB9] text-[#0B0B0B] mx-auto flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <h3 className="font-['Syne'] font-bold text-xl text-[#FFFFFF]">ORDER PLACED SUCCESSFULLY!</h3>
                <p className="text-xs text-[#8E8E93] font-mono">
                  Your order is now being prepared at the counter. Points added to your Pilotos Loyalty Pass!
                </p>
                <div className="p-4 bg-[#0B0B0B] border border-[#242424] font-mono text-xs text-[#D8CBB9]">
                  Order ID: #PLT-CAFE-992
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {!orderPlaced && cartItems.length > 0 && (
            <div className="p-6 border-t border-[#242424] bg-[#0B0B0B] space-y-4">
              <div className="space-y-2 text-xs font-mono text-[#8E8E93]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₱{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service & Packaging</span>
                  <span>₱{serviceFee}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#FFFFFF] pt-2 border-t border-[#242424]">
                  <span>Total</span>
                  <span className="text-[#D8CBB9]">₱{total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 angst-button text-xs flex items-center justify-center space-x-2"
              >
                <span>Proceed to Instant Checkout (₱{total})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {orderPlaced && (
            <div className="p-6 border-t border-[#242424] bg-[#0B0B0B]">
              <button
                onClick={handleCloseAll}
                className="w-full py-3.5 angst-button text-xs"
              >
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
