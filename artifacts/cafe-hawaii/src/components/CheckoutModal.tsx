import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Send, X } from 'lucide-react';
import { type CartLine, formatPrice } from '@/data/menu';
import { RESTAURANT_WHATSAPP_NUMBER } from '@/config';

type CheckoutModalProps = {
  open: boolean;
  lines: CartLine[];
  onClose: () => void;
  onOrderComplete: () => void;
};

export function CheckoutModal({ open, lines, onClose, onOrderComplete }: CheckoutModalProps) {
  const [step, setStep] = useState<'details' | 'summary' | 'confirmation'>('details');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState('');

  if (!open) return null;

  const subtotal = lines.reduce((sum, line) => sum + line.item.price * line.quantity, 0);
  const total = subtotal; // Can be expanded if taxes/fees added

  const handleNextToSummary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !address.trim()) {
      setValidationError('Please fill in your name, phone number, and delivery address.');
      return;
    }
    setValidationError('');
    setStep('summary');
  };

  const handleConfirmAndSend = () => {
    // Generate formatted WhatsApp message
    const orderItemsText = lines
      .map((line) => `- ${line.item.name} x${line.quantity} — ${formatPrice(line.item.price * line.quantity)}`)
      .join('\n');

    let messageText = `🌴 New Order — Cafe Hawaii\n\n`;
    messageText += `Customer: ${fullName.trim()}\n`;
    messageText += `Phone: ${phone.trim()}\n`;
    messageText += `Address: ${address.trim()}\n`;
    if (email.trim()) {
      messageText += `Email: ${email.trim()}\n`;
    }
    messageText += `\nOrder:\n${orderItemsText}\n\n`;
    messageText += `Subtotal: ${formatPrice(subtotal)}\n`;
    messageText += `Total: ${formatPrice(total)}\n`;

    if (notes.trim()) {
      messageText += `\nNotes: ${notes.trim()}\n`;
    }

    const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp link
    window.open(whatsappUrl, '_blank');

    // Proceed to confirmation screen & clear cart
    setStep('confirmation');
    onOrderComplete();
  };

  const handleClose = () => {
    setStep('details');
    onClose();
  };

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[60] grid place-items-center bg-[#163f42]/75 p-4 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      <div className="modal-card relative w-full max-w-lg rounded-[2rem] bg-[#fff8e9] p-6 text-[#163f42] shadow-2xl sm:p-9 my-8">
        <button
          type="button"
          onClick={handleClose}
          className="focus-ring absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-[#f2e9d6] transition hover:bg-[#f8d47a]"
          aria-label="Close checkout"
          data-testid="button-close-checkout"
        >
          <X size={18} />
        </button>

        {step === 'details' && (
          <>
            <p className="eyebrow text-[#ef725f]">Step 1 of 2 · Delivery details</p>
            <h2 id="checkout-title" className="font-display mt-3 text-4xl">Where are we delivering?</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#426266]">
              Please provide your delivery details so we can send your order via WhatsApp directly to our team.
            </p>

            {validationError && (
              <div className="mt-4 rounded-xl border border-[#ef725f]/30 bg-[#fdf2f0] p-3 text-xs font-semibold text-[#df5f4d]" data-testid="text-checkout-error">
                {validationError}
              </div>
            )}

            <form className="mt-6 grid gap-4" onSubmit={handleNextToSummary}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-wider text-[#163f42]">
                  Full Name *
                  <input
                    required
                    data-testid="input-checkout-name"
                    className="block min-w-0 w-full rounded-xl border border-[#d9cfbc] bg-[#fffdf6] px-4 py-3 font-sans text-sm outline-none focus:border-[#ef725f]"
                    placeholder="Ayesha Khan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </label>
                <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-wider text-[#163f42]">
                  Phone Number *
                  <input
                    required
                    type="tel"
                    data-testid="input-checkout-phone"
                    className="block min-w-0 w-full rounded-xl border border-[#d9cfbc] bg-[#fffdf6] px-4 py-3 font-sans text-sm outline-none focus:border-[#ef725f]"
                    placeholder="0309 1358888"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
              </div>

              <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-wider text-[#163f42]">
                Delivery Address *
                <textarea
                  required
                  data-testid="input-checkout-address"
                  className="block min-w-0 w-full min-h-20 resize-none rounded-xl border border-[#d9cfbc] bg-[#fffdf6] px-4 py-3 font-sans text-sm outline-none focus:border-[#ef725f]"
                  placeholder="House / Apartment #, Street, Block, Area..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>

              <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-wider text-[#426266]">
                Email <span className="normal-case text-[0.7rem] font-normal text-[#426266]/70">(Optional)</span>
                <input
                  type="email"
                  data-testid="input-checkout-email"
                  className="block min-w-0 w-full rounded-xl border border-[#d9cfbc] bg-[#fffdf6] px-4 py-3 font-sans text-sm outline-none focus:border-[#ef725f]"
                  placeholder="ayesha@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-wider text-[#426266]">
                Special Instructions / Notes <span className="normal-case text-[0.7rem] font-normal text-[#426266]/70">(Optional)</span>
                <textarea
                  data-testid="textarea-checkout-notes"
                  className="block min-w-0 w-full min-h-20 resize-none rounded-xl border border-[#d9cfbc] bg-[#fffdf6] px-4 py-3 font-sans text-sm outline-none focus:border-[#ef725f]"
                  placeholder="e.g. Extra spicy, no onions, leave at gate..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>

              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#ef725f] px-5 py-3.5 text-xs font-bold uppercase tracking-[.15em] text-[#fff8e9] transition hover:bg-[#df5f4d]"
                data-testid="button-checkout-next"
              >
                Review Order <ArrowRight size={16} />
              </button>
            </form>
          </>
        )}

        {step === 'summary' && (
          <>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#ef725f] hover:text-[#163f42]"
                data-testid="button-checkout-back"
              >
                <ArrowLeft size={14} /> Back to details
              </button>
            </div>

            <p className="eyebrow mt-3 text-[#ef725f]">Step 2 of 2 · Order receipt</p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl">Order summary.</h2>

            {/* Customer info recap */}
            <div className="mt-4 rounded-xl border border-[#d9cfbc] bg-[#fffdf6] p-4 text-xs leading-relaxed text-[#426266]">
              <p className="font-bold text-[#163f42] text-sm mb-1">Delivering to:</p>
              <p><strong className="text-[#163f42]">Name:</strong> {fullName}</p>
              <p><strong className="text-[#163f42]">Phone:</strong> {phone}</p>
              <p><strong className="text-[#163f42]">Address:</strong> {address}</p>
              {email && <p><strong className="text-[#163f42]">Email:</strong> {email}</p>}
              {notes && <p className="mt-1 italic"><strong className="text-[#163f42]">Notes:</strong> {notes}</p>}
            </div>

            {/* Items list summary */}
            <div className="mt-4 max-h-44 overflow-y-auto divide-y divide-[#e7decd] rounded-xl border border-[#d9cfbc] bg-[#fffdf6] px-4 py-2">
              {lines.map((line) => (
                <div key={line.item.id} className="flex items-center justify-between py-2.5 text-xs">
                  <div>
                    <span className="font-bold text-[#163f42]">{line.item.name}</span>
                    <span className="ml-2 text-[#426266]">x{line.quantity}</span>
                  </div>
                  <span className="font-bold text-[#ef725f]">{formatPrice(line.item.price * line.quantity)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-4 border-t border-[#d9cfbc] pt-3 text-sm">
              <div className="flex justify-between text-[#426266]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="mt-1 flex justify-between font-bold text-lg text-[#163f42]">
                <span>Total</span>
                <span className="text-[#ef725f]">{formatPrice(total)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleConfirmAndSend}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#ef725f] px-5 py-3.5 text-xs font-bold uppercase tracking-[.15em] text-[#fff8e9] transition hover:bg-[#df5f4d]"
              data-testid="button-confirm-send-whatsapp"
            >
              <Send size={16} /> Confirm & Send Order
            </button>
          </>
        )}

        {step === 'confirmation' && (
          <div className="grid place-items-center py-8 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#dbe9d4] text-[#477348]">
              <Check size={30} />
            </span>
            <h2 className="font-display mt-6 text-4xl text-[#163f42]">Mahalo!</h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#426266]">
              Your order details have been prepared and WhatsApp has opened. <b>Please tap Send in WhatsApp</b> to confirm your order directly with our restaurant team.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-7 rounded-full bg-[#163f42] px-6 py-3 text-xs font-bold uppercase tracking-[.15em] text-[#fff8e9] transition hover:bg-[#28575a]"
              data-testid="button-finish-checkout"
            >
              Back to Cafe Hawaii
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
