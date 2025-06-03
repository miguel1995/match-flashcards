import { API_ENDPOINTS } from '../config/constants';
import type { Word } from '../types/Word';
import api from './api';

export const getRandomWord = async (): Promise<Word> => {
  const response = await api.get<any>(API_ENDPOINTS.GET_RANDOM_WORD);
  const jsonWord:Word = JSON.parse(response.data.body);
    
  return jsonWord;
};
