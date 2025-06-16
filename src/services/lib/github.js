import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com'
});

export const getUser = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    throw error;
  }
};

export const getRepos = async (username) => {
  try {
    const response = await api.get(`/users/${username}/repos?sort=stars&direction=desc&per_page=100`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    throw error;
  }
};

