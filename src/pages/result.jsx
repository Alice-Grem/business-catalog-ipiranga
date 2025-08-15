import { useLocation } from "react-router-dom";
import { useState } from "react";
import data from "../data/catalog.json";
import Layout from "../components/layout.jsx";
import TagList from "../components/TagList.jsx";
import DefinitionBox from "../components/DefinitionBox.jsx";
import SectionList from "../components/SectionList.jsx";

export default function Result() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialTerm = params.get("term") || "";

  const [tags, setTags] = useState(initialTerm ? [initialTerm] : []);

  // Adiciona tag sem duplicatas
  const handleAddTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  // Remove tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // Filtra os resultados com base nas tags selecionadas
  const termDataList = data.filter(item =>
    tags.length === 0 || 
    tags.some(tag =>
      item.term.toLowerCase().includes(tag.toLowerCase()) ||
      item.refinements.some(r => r.toLowerCase().includes(tag.toLowerCase())) ||
      item.reports.some(r => r.toLowerCase().includes(tag.toLowerCase())) ||
      item.tables.some(t => t.name.toLowerCase().includes(tag.toLowerCase()))
    )
  );

  return (
    <Layout>
      <div className="p-8">
        {/* Lista de tags selecionadas */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-yellow-100 px-3 py-1 rounded flex items-center gap-2"
            >
              {tag}
              <button
                className="text-red-500 font-bold"
                onClick={() => handleRemoveTag(tag)}
              >
                x
              </button>
            </span>
          ))}
        </div>

        {/* Componente para adicionar novas tags */}
        <TagList tags={tags} onAddTag={handleAddTag} />

        {/* Lista de resultados */}
        {termDataList.length > 0 ? (
          termDataList.map((termData, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-bold mb-2">{termData.term}</h2>
              <DefinitionBox text={termData.definition} />

              <SectionList title="Relatórios associados:" items={termData.reports} />
              <SectionList title="Tabelas associadas:" items={termData.tables} />

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">
                  Deseja refinar o resultado da sua busca?
                </h3>
                <div className="flex flex-wrap gap-3">
                  {termData.refinements.map((ref, i) => (
                    <button
                      key={i}
                      className="border px-3 py-1 rounded hover:bg-gray-100"
                      onClick={() => handleAddTag(ref)}
                    >
                      {ref}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </Layout>
  );
}
