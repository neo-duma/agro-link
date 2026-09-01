import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5">
      <Link to="/" className="font-medium text-ink text-base">
        agrolink
      </Link>
      <div className="flex-1 flex items-center gap-2 bg-sand rounded-lg px-3 py-1.5">
        <span className="text-sm text-neutral-400">buscar produtos ou produtores</span>
      </div>
      <Link to="/carrinho" aria-label="Carrinho" className="text-ink">
        🛒
      </Link>
      <div className="w-6 h-6 rounded-full bg-coral" />
    </header>
  );
}
