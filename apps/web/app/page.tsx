import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductCarousel from '../components/ProductCarousel';
import ProdutorAvatar from '../components/ProdutorAvatar';
import { produtos, produtores, categorias, maisPesquisados } from '../data/mock';

export default function Home() {
  const hortifruti = produtos.filter((p) => p.categoria === 'Hortifruti');
  const frutas = produtos.filter((p) => p.categoria === 'Frutas');

  return (
    <div className="min-h-screen bg-sand p-4">
      <Header />
      <Hero />

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

      <p className="text-sm font-medium text-ink mt-6 mb-3">Produtores em destaque</p>
      <div className="flex gap-4 overflow-x-auto pb-1">
        {produtores.map((p) => (
          <ProdutorAvatar key={p.id} produtor={p} />
        ))}
      </div>

      <p className="text-sm font-medium text-ink mt-6 mb-3">Produtos mais pesquisados</p>
      <ProductCarousel produtos={maisPesquisados} />

      <p className="text-sm font-medium text-ink mt-6 mb-3">Hortifruti</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {hortifruti.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>

      <p className="text-sm font-medium text-ink mt-6 mb-3">Frutas</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {frutas.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    </div>
  );
}
