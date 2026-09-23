'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { criarPerfilProdutor } from '../../lib/api';

export default function TornarSeProdutorPage() {
  const router = useRouter();
  const [nomeLoja, setNomeLoja] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');

    const token = localStorage.getItem('agrolink_token');
    if (!token) {
      setErro('Você precisa entrar na sua conta primeiro.');
      return;
    }
    if (!nomeLoja) {
      setErro('Informe o nome do seu perfil de produtor.');
      return;
    }

    setCarregando(true);
    try {
      await criarPerfilProdutor({ nomeLoja, localizacao, descricao }, token);
      router.push('/produtor');
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Erro ao criar perfil.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-sand p-4">
      <Header />

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white rounded-xl p-6 mt-8">
        <p className="text-base font-medium text-ink mb-1">Criar perfil de produtor</p>
        <p className="text-sm text-muted mb-6">
          Sua conta continua sendo a mesma — isso só adiciona uma vitrine pública para você
          vender produtos, como uma página dentro do seu perfil.
        </p>

        <label className="text-xs text-muted mb-1 block">Nome do produtor / propriedade</label>
        <Input
          value={nomeLoja}
          onChange={(e) => setNomeLoja(e.target.value)}
          placeholder="Ex: Sítio Boa Terra"
          className="mb-3"
        />

        <label className="text-xs text-muted mb-1 block">Localização</label>
        <Input
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
          placeholder="Ex: Minas Gerais"
          className="mb-3"
        />

        <label className="text-xs text-muted mb-1 block">Descrição</label>
        <Input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Conte um pouco sobre sua produção"
          className="mb-1"
        />

        {erro && <p className="text-xs text-coral mt-2">{erro}</p>}

        <Button type="submit" disabled={carregando} className="w-full mt-4">
          {carregando ? 'Criando...' : 'Criar perfil de produtor'}
        </Button>
      </form>
    </div>
  );
}
