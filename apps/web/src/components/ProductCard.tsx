import type { Produto } from '../data/mock';

export default function ProductCard({ produto }: { produto: Produto }) {
  return (
    <div className="bg-white rounded-xl p-2">
      <div className="bg-sand rounded-lg h-24 mb-2" />
      <p className="text-sm font-medium text-ink mb-0.5">{produto.nome}</p>
      <p className="text-xs text-neutral-400 mb-1">{produto.produtor}</p>
      <p className="text-sm font-medium text-coral">
        R$ {produto.preco.toFixed(2)}/{produto.unidade}
      </p>
    </div>
  );
}
