'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { login } from '../../lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');

    if (!email || !senha) {
      setErro('Preencha e-mail e senha.');
      return;
    }

    setCarregando(true);
    try {
      const { token } = await login({ email, senha });
      localStorage.setItem('agrolink_token', token);
      router.push('/');
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Erro ao entrar.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-sand flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-xl p-6">
        <p className="text-lg font-medium text-ink mb-1">agrolink</p>
        <p className="text-sm text-muted mb-6">Entre na sua conta</p>

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
          placeholder="••••••••"
          className="mb-1"
        />

        {erro && <p className="text-xs text-coral mt-2">{erro}</p>}

        <Button type="submit" disabled={carregando} className="w-full mt-4">
          {carregando ? 'Entrando...' : 'Entrar'}
        </Button>

        <p className="text-xs text-muted mt-4 text-center">
          Não tem conta?{' '}
          <Link href="/cadastro" className="text-coral">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
}
