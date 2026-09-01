import Header from '../../components/Header';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import { produtores, produtos } from '../../data/mock';

export default function ProdutorPerfil() {
  const produtor = produtores[0];
  const produtosDoProdutor = produtos.filter((p) => p.produtor === produtor.nome);

  return (
    <div className="min-h-screen bg-sand p-4">
      <Header />

      <div className="flex items-center gap-3 mt-6">
        <div className="w-14 h-14 rounded-full bg-coral flex-shrink-0" />
        <div className="flex-1">
          <p className="text-base font-medium text-ink">{produtor.nome}</p>
          <p className="text-xs text-muted mt-1">
            📍 {produtor.localizacao} · ⭐ {produtor.avaliacao}
          </p>
        </div>
        <Button variant="secondary">Seguir</Button>
      </div>
      <p className="text-sm text-muted mt-3 mb-4">{produtor.bio}</p>

      <div className="flex gap-4 border-b border-line text-sm mb-3">
        <span className="pb-2 border-b-2 border-coral text-coral">Produtos</span>
        <span className="pb-2 text-muted">Avaliações</span>
        <span className="pb-2 text-muted">Sobre</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {produtosDoProdutor.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    </div>
  );
}
