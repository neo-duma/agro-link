import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProdutorPerfil from './pages/ProdutorPerfil';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Carrinho from './pages/Carrinho';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtor" element={<ProdutorPerfil />} />
        <Route path="/produto" element={<ProdutoDetalhe />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}
