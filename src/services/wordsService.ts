import type { Word } from '../types/Word';
import api from './api';

export const getRandomWord = async (): Promise<Word> => {
  const response = await api.get<any>('/get-random-word');
  const jsonWord:Word = JSON.parse(response.data.body);
    
  return jsonWord;
};
