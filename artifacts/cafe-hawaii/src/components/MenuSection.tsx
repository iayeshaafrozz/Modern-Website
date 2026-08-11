import { useMemo, useState } from 'react';
import { ArrowRight, Plus, ShoppingBag } from 'lucide-react';
import { formatPrice, menuCategories, menuItems, type MenuCategory, type MenuItem } from '@/data/menu';

type MenuSectionProps = {
  onAddToCart: (item: MenuItem) => void;
  cartCount: number;
};

export function MenuSection({ onAddToCart, cartCount }: MenuSectionProps) {
  const [active, setActive] = useState<MenuCategory>('Appetizers');
  const filteredItems = useMemo(() => menuItems.filter((item) => item.category === active), [active]);

  return (
    <section id="menu" className="section-pad bg-[#e5eee4]">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="reveal"><p className="eyebrow text-[#ef725f]">A taste of Hawaii</p><h2 className="font-display mt-4 text-5xl leading-none text-[#163f42] sm:text-7xl">The full menu</h2></div>
          <div className="reveal delay-1 max-w-sm text-sm leading-6 text-[#426266]">From first bites to the last sip, find something worth staying for. <b className="text-[#163f42]">Rs 2,000–3,000 per person.</b></div>
        </div>
        <div className="reveal delay-2 mt-10 -mx-1 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-2 px-1" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <button key={category} type="button" role="tab" aria-selected={active === category} onClick={() => setActive(category)} className={`rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition ${active === category ? 'bg-[#163f42] text-[#fff8e9]' : 'bg-[#fff8e9]/75 text-[#426266] hover:bg-[#f8d47a] hover:text-[#163f42]'}`} data-testid={`tab-menu-${category.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{category}</button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <article key={item.id} className="reveal in-view group flex min-h-[188px] flex-col justify-between rounded-[1.4rem] border border-[#bfd0c1] bg-[#fff8e9]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#ef725f]/50 hover:bg-[#fffdf6] hover:shadow-lg" data-testid={`menu-item-${item.id}`}>
              <div className="flex gap-4">
                {item.image && <div className="image-zoom h-16 w-16 shrink-0 overflow-hidden rounded-xl"><img src={item.image} alt="" className="h-full w-full object-cover" /></div>}
                <div className="min-w-0"><div className="flex flex-wrap items-start gap-2"><h3 className="font-display text-2xl leading-tight text-[#163f42]">{item.name}</h3>{item.tag && <span className="rounded-full bg-[#f8d47a] px-2 py-1 text-[.57rem] font-bold uppercase tracking-wider text-[#163f42]">{item.tag}</span>}</div><p className="mt-2 text-sm leading-6 text-[#426266]">{item.description}</p></div>
              </div>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#bfd0c1]/70 pt-4"><span className="text-sm font-bold text-[#ef725f]">{formatPrice(item.price)}</span><button type="button" onClick={() => onAddToCart(item)} className="inline-flex items-center gap-2 rounded-full bg-[#ef725f] px-3.5 py-2 text-[.65rem] font-bold uppercase tracking-[.12em] text-[#fff8e9] transition hover:bg-[#df5f4d]" data-testid={`button-add-${item.id}`}><Plus size={14} /> Add to cart</button></div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#bfd0c1] pt-6 sm:flex-row"><span className="flex items-center gap-2 text-sm text-[#426266]"><ShoppingBag size={17} className="text-[#ef725f]" /> {cartCount ? `${cartCount} ${cartCount === 1 ? 'item' : 'items'} ready in your cart.` : 'Build an order for the table.'}</span><a href="#visit" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#163f42] hover:gap-4" data-testid="link-menu-visit">Prefer to dine in? Visit us <ArrowRight size={16} className="text-[#ef725f]" /></a></div>
      </div>
    </section>
  );
}