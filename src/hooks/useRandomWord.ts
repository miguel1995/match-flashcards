import { useEffect, useState } from 'react';
import { getRandomWord } from '../services/wordsService';
import type { Word } from '../types/Word';


export const useRandomWord = () => {
  const [word, setWord] = useState<Word | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchWord = async () => {
    try {
      setLoading(true);
      const result = await getRandomWord();
      
      setWord(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return { word, loading, error, refetch: fetchWord };
};
