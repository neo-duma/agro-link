'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { cadastrar } from '../../lib/api';

export default function CadastroPage() {
  const router = useRouter();
  const [tipo, setTipo] = useState<'COMPRADOR' | 'PRODUTOR'>('COMPRADOR');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');

    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }
    if (senha.length < 6) {
      setErro('A senha precisa ter no mínimo 6 caracteres.');
      return;
    }

    setCarregando(true);
    try {
      const { token } = await cadastrar({ nome, email, senha, tipo });
      localStorage.setItem('agrolink_token', token);
      router.push('/');
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Erro ao cadastrar.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-sand flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-xl p-6">
        <p className="text-lg font-medium text-ink mb-1">agrolink</p>
        <p className="text-sm text-muted mb-4">Crie sua conta</p>

        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setTipo('COMPRADOR')}
            className={`flex-1 text-xs rounded-lg py-2 border ${
              tipo === 'COMPRADOR' ? 'bg-coral-light border-coral text-ink' : 'border-line text-muted'
            }`}
          >
            Sou comprador
          </button>
          <button
            type="button"
            onClick={() => setTipo('PRODUTOR')}
            className={`flex-1 text-xs rounded-lg py-2 border ${
              tipo === 'PRODUTOR' ? 'bg-coral-light border-coral text-ink' : 'border-line text-muted'
            }`}
          >
            Sou produtor
          </button>
        </div>

        <label className="text-xs text-muted mb-1 block">Nome</label>
        <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" className="mb-3" />

        <label className="text-xs text-muted mb-1 block">E-mail</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="voce@exemplo.com"
          className="mb-3"
        />

        <label className="text-xs text-muted mb-1 block">Senha</label>
        <Input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="mínimo 6 caracteres"
          className="mb-1"
        />

        {erro && <p className="text-xs text-coral mt-2">{erro}</p>}

        <Button type="submit" disabled={carregando} className="w-full mt-4">
          {carregando ? 'Criando conta...' : 'Criar conta'}
        </Button>

        <p className="text-xs text-muted mt-4 text-center">
          Já tem conta?{' '}
          <Link href="/login" className="text-coral">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
}
