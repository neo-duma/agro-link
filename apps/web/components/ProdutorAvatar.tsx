import Link from 'next/link';
import type { Produtor } from '../data/mock';

export default function ProdutorAvatar({ produtor }: { produtor: Produtor }) {
  return (
    <Link href="/produtor" className="flex flex-col items-center gap-1.5 flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-coral" />
      <span className="text-xs text-ink text-center w-16 truncate">{produtor.nome}</span>
    </Link>
  );
}
