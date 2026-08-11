import { useEffect, useState } from 'react';
import { ArrowRight, Check, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { type CartLine, formatPrice } from '@/data/menu';

type CartDrawerProps = {
  open: boolean;
  lines: CartLine[];
  onClose: () => void;
  onChangeQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onPlaceOrder: () => void;
};

function CartContents({ lines, onClose, onChangeQuantity, onRemove, onClear, onPlaceOrder }: Omit<CartDrawerProps, 'open'>) {
  const subtotal = lines.reduce((sum, line) => sum + line.item.price * line.quantity, 0);

  if (!lines.length) {
    return (
      <div className="grid flex-1 place-items-center px-8 py-16 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[#e5eee4] text-[#ef725f]"><ShoppingBag size={27} /></span>
        <div>
          <h3 className="font-display mt-5 text-3xl text-[#163f42]">Your table is waiting.</h3>
          <p className="mt-2 text-sm leading-6 text-[#426266]">Add something delicious from the menu and we’ll have it ready for your order.</p>
        </div>
        <button type="button" onClick={onClose} className="mt-5 rounded-full bg-[#163f42] px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-[#fff8e9]">Browse the menu</button>
      </div>
    );
  }

  return (
    <>
      <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
        <div className="flex items-center justify-between border-b border-[#d9cfbc] pb-4">
          <p className="text-sm text-[#426266]">{lines.reduce((sum, line) => sum + line.quantity, 0)} items in your order</p>
          <button type="button" onClick={onClear} className="text-xs font-bold uppercase tracking-wider text-[#ef725f] hover:text-[#163f42]" data-testid="button-clear-cart">Clear cart</button>
        </div>
        <div className="divide-y divide-[#e7decd]">
          {lines.map((line) => (
            <div key={line.item.id} className="flex gap-3 py-5" data-testid={`cart-line-${line.item.id}`}>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl leading-tight text-[#163f42]">{line.item.name}</h3>
                <p className="mt-1 text-xs text-[#426266]">{formatPrice(line.item.price)} each</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-[#d9cfbc] bg-[#fffdf6]">
                    <button type="button" onClick={() => onChangeQuantity(line.item.id, line.quantity - 1)} className="grid h-8 w-8 place-items-center text-[#163f42] hover:text-[#ef725f]" aria-label={`Decrease ${line.item.name}`} data-testid={`button-decrease-${line.item.id}`}><Minus size={14} /></button>
                    <span className="w-6 text-center text-sm font-bold text-[#163f42]">{line.quantity}</span>
                    <button type="button" onClick={() => onChangeQuantity(line.item.id, line.quantity + 1)} className="grid h-8 w-8 place-items-center text-[#163f42] hover:text-[#ef725f]" aria-label={`Increase ${line.item.name}`} data-testid={`button-increase-${line.item.id}`}><Plus size={14} /></button>
                  </div>
                  <button type="button" onClick={() => onRemove(line.item.id)} className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#426266] hover:text-[#ef725f]" data-testid={`button-remove-${line.item.id}`}><Trash2 size={13} /> Remove</button>
                </div>
              </div>
              <span className="shrink-0 pt-1 text-sm font-bold text-[#ef725f]">{formatPrice(line.item.price * line.quantity)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#d9cfbc] bg-[#fffdf6] px-5 py-5 sm:px-7">
        <div className="flex items-center justify-between text-sm text-[#426266]"><span>Subtotal</span><strong className="text-lg text-[#163f42]">{formatPrice(subtotal)}</strong></div>
        <p className="mt-2 text-xs leading-5 text-[#426266]">Taxes and service charges, if applicable, will be confirmed by our team.</p>
        <button type="button" onClick={onPlaceOrder} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#ef725f] px-5 py-3.5 text-xs font-bold uppercase tracking-[.15em] text-[#fff8e9] transition hover:bg-[#df5f4d]" data-testid="button-place-order">Place order <ArrowRight size={16} /></button>
      </div>
    </>
  );
}

export function CartDrawer({ open, lines, onClose, onChangeQuantity, onRemove, onClear, onPlaceOrder }: CartDrawerProps) {
  const [ordered, setOrdered] = useState(false);
  const subtotal = lines.reduce((sum, line) => sum + line.item.price * line.quantity, 0);

  useEffect(() => {
    if (!open) setOrdered(false);
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-backdrop fixed inset-0 z-[65] bg-[#163f42]/75 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <div className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col bg-[#fff8e9] text-[#163f42] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#d9cfbc] px-5 py-5 sm:px-7">
          <div><p className="eyebrow text-[#ef725f]">{ordered ? 'Order received' : 'Your Aloha order'}</p><h2 id="cart-title" className="font-display mt-1 text-3xl">{ordered ? 'We’ll start cooking.' : 'Your cart.'}</h2></div>
          <button type="button" onClick={onClose} className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-[#f2e9d6] transition hover:bg-[#f8d47a]" aria-label="Close cart" data-testid="button-close-cart"><X size={18} /></button>
        </div>
        {ordered ? (
          <div className="grid flex-1 place-items-center px-8 py-16 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#dbe9d4] text-[#477348]"><Check size={30} /></span>
            <h3 className="font-display mt-6 text-4xl text-[#163f42]">Mahalo.</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#426266]">Your order request for <b className="text-[#163f42]">{formatPrice(subtotal)}</b> is on its way. Our team will call to confirm the details shortly.</p>
            <button type="button" onClick={onClose} className="mt-7 rounded-full bg-[#163f42] px-6 py-3 text-xs font-bold uppercase tracking-[.15em] text-[#fff8e9]" data-testid="button-finish-order">Back to Cafe Hawaii</button>
          </div>
        ) : <CartContents lines={lines} onClose={onClose} onChangeQuantity={onChangeQuantity} onRemove={onRemove} onClear={onClear} onPlaceOrder={() => { setOrdered(true); onPlaceOrder(); }} />}
      </div>
    </div>
  );
}