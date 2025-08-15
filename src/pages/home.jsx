import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, BarChart2, Database } from "lucide-react";
import Layout from "../components/layout.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Card from "../components/Card.jsx";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/result?term=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center px-4 py-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          Bem-vindo ao Ipiranga Business Catalog
        </h1>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Digite uma palavra-chave e encontre definições, relatórios e tabelas relacionadas.
        </p>

        <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Card
            icon={FileText}
            title="Encontre definições claras"
            description="Descubra o significado de termos de negócio e seus contextos de uso, tudo em um só lugar."
          />
          <Card
            icon={BarChart2}
            title="Localize relatórios relevantes"
            description="Acesse relatórios que utilizam o termo pesquisado, facilitando a análise e a tomada de decisão."
          />
          <Card
            icon={Database}
            title="Explore dados conectados"
            description="Veja em quais tabelas e colunas o termo aparece e obtenha insights diretamente da base de dados."
          />
        </div>
      </div>
    </Layout>
  );
}
