import Header from '../../components/Header';
import Button from '../../components/Button';
import { produtos } from '../../data/mock';

export default function ProdutoDetalhe() {
  const produto = produtos[0];

  return (
    <div className="min-h-screen bg-sand p-4">
      <Header />

      <div className="bg-white rounded-xl h-44 mt-6 mb-4" />

      <p className="text-lg font-medium text-ink mb-1">{produto.nome}</p>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded-full bg-coral" />
        <span className="text-xs text-coral">vendido por {produto.produtor}</span>
      </div>
      <p className="text-xl font-medium text-ink mb-4">
        R$ {produto.preco.toFixed(2)} / {produto.unidade}
      </p>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs text-muted">quantidade</span>
        <div className="flex items-center bg-white rounded-lg">
          <span className="px-3 py-1 text-sm">-</span>
          <span className="px-3 py-1 text-sm border-x border-line">1</span>
          <span className="px-3 py-1 text-sm">+</span>
        </div>
      </div>

      <Button className="w-full mb-4">Adicionar ao carrinho</Button>

      <p className="text-sm text-muted leading-relaxed">
        Cultivado sem agrotóxicos, colhido na semana. Entrega em até 2 dias úteis pela
        transportadora parceira.
      </p>
    </div>
  );
}
