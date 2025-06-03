import React from 'react';
import { useRandomWord } from '../hooks/useRandomWord';

const RandomWordPage: React.FC = () => {
  const { word, loading, error, refetch } = useRandomWord();

  return (
    <div>
      <h1>Palabra Aleatoria</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error al cargar la palabra</p>}
      {word && (
        <div>
          <p><strong>ID:</strong> {word.ID}</p>
          <p><strong>Word:</strong> {word.word}</p>
          <p><strong>Unit:</strong> {word.unit_id}</p>
        </div>
      )}
      <button onClick={refetch}>Obtener otra</button>
    </div>
  );
};

export default RandomWordPage;
