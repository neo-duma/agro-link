import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-ink rounded-xl p-8 mt-4">
      <p className="text-2xl sm:text-3xl font-semibold text-sand mb-2">AgroLink</p>
      <p className="text-sm text-line max-w-xs mb-6">
        O lugar onde você encontra produtos de qualidade natural, direto do produtor.
      </p>
      <div className="flex gap-3">
        <Button>Comprar agora</Button>
        <Button variant="outline">Saiba mais</Button>
      </div>
    </section>
  );
}
