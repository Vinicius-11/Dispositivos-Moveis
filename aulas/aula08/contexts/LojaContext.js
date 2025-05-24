import { createContext, useState } from "react";

const categoriasDB = [
  { id: 1, nome: "Restaurantes", icone: "food" },
  { id: 2, nome: "Bares", icone: "beer" },
  { id: 3, nome: "Lanchonetes", icone: "hamburger" },
  { id: 4, nome: "Pizzarias", icone: "pizza" },
  { id: 5, nome: "Sorveterias", icone: "ice-cream" },
  { id: 6, nome: "Cafeterias", icone: "coffee" },
  { id: 7, nome: "Padarias", icone: "bread-slice" },
  { id: 8, nome: "Mercados", icone: "shopping" },
];

const lojasDB = [
  { id: 1, nome: "Caixaça", nota: "4,6" },
  { id: 2, nome: "Avalanches", nota: "4.7" },
  { id: 3, nome: "CãoPacabana", nota: "4.6" },
  { id: 4, nome: "Sorveteira Ice Te Pego", nota: "4.9" },
  { id: 5, nome: "Bar do Toim", nota: "4.3" },
  { id: 6, nome: "Churrasic Park", nota: "4.2" },
  { id: 7, nome: "Wesley Salgadão", nota: "4.2" },
  { id: 8, nome: "Restaurante Asa Sul", nota: "4.1" },
  { id: 9, nome: "Restaurante Asa Norte", nota: "4.9" },
  { id: 10, nome: "Restaurante Tagua", nota: "4.9" },
  { id: 11, nome: "Bar Ceilandia", nota: "4.5" },
  { id: 12, nome: "Bar Sudoeste", nota: "4.5" },
  { id: 13, nome: "Lanchonete Gama", nota: "4.9" },
  { id: 14, nome: "Pizzaria Nucleo", nota: "4.7" },
];

const LojaContext = createContext();

function LojaProvider({ children }) {
  const [categorias, setCategorias] = useState([]);
  const [lojas, setLojas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const carregarDados = () => {
    setCarregando(true);
    setTimeout(() => {
      setLojas(lojasDB);
      setCategorias(categoriasDB);
      setCarregando(false);
    }, 2000);
  };

  const buscarLojas = (filtro) => {
    console.log(filtro);
    setCarregando(true);
    setTimeout(() => {
      const lojasEncontradas = lojasDB.filter(
        (loja) => loja.nome.toLowerCase().includes
        (filtro.toLowerCase())
      );
      setLojas(lojasEncontradas);
      setCarregando(false);
    }, 2000);
  };

  return (
    <LojaContext.Provider
      value={{ lojas, categorias, carregando, carregarDados, buscarLojas }}
    >
      {children}
    </LojaContext.Provider>
  );
}

export { LojaContext, LojaProvider };