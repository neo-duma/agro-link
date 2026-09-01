import Header from '../../components/Header';
import Button from '../../components/Button';

const itensPorProdutor = [
  { produtor: 'Sítio Boa Terra', item: 'Tomate orgânico', qtd: '2 kg', preco: 13.8 },
  { produtor: 'Fazenda São João', item: 'Alface crespa', qtd: '3 un', preco: 10.5 },
];

export default function Carrinho() {
  const subtotal = itensPorProdutor.reduce((acc, i) => acc + i.preco, 0);

  return (
    <div className="min-h-screen bg-sand p-4">
      <Header />

      <p className="text-base font-medium text-ink mt-6 mb-3">Seu carrinho</p>

      {itensPorProdutor.map((i) => (
        <div key={i.item} className="mb-4">
          <p className="text-xs text-muted mb-1.5">{i.produtor}</p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-ink">{i.item}</p>
              <p className="text-xs text-neutral-400">{i.qtd}</p>
            </div>
            <span className="text-sm font-medium text-coral">R$ {i.preco.toFixed(2)}</span>
          </div>
        </div>
      ))}

      <div className="flex justify-between text-sm text-ink border-t border-line pt-3 mt-2">
        <span>Subtotal</span>
        <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
      </div>

      <Button className="w-full mt-4">Finalizar compra</Button>
    </div>
  );
}
