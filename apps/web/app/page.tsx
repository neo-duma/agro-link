import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { produtos, categorias } from '../data/mock';

export default function Home() {
  return (
    <div className="min-h-screen bg-sand p-4">
      <Header />

      <div className="flex gap-2 mt-4 overflow-x-auto">
        {categorias.map((c) => (
          <span
            key={c}
            className="text-xs bg-white text-muted rounded-md px-3 py-1 whitespace-nowrap"
          >
            {c}
          </span>
        ))}
      </div>

      <p className="text-sm text-muted mt-6 mb-2">Produtos em destaque</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {produtos.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    </div>
  );
}
