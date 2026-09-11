'use client';

import { useRef } from 'react';
import ProductCard from './ProductCard';
import type { Produto } from '../data/mock';

export default function ProductCarousel({ produtos }: { produtos: Produto[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: direction === 'left' ? -160 : 160, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white rounded-xl p-3">
      <button
        onClick={() => scroll('left')}
        aria-label="Anterior"
        className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-white border border-line text-ink"
      >
        ‹
      </button>
      <div ref={scrollRef} className="flex gap-3 overflow-x-auto scroll-smooth px-1">
        {produtos.map((p) => (
          <div key={p.id} className="w-32 flex-shrink-0">
            <ProductCard produto={p} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        aria-label="Próximo"
        className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-white border border-line text-ink"
      >
        ›
      </button>
    </div>
  );
}
