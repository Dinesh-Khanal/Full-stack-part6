import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";
export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
export const createNew = async (content) => {
  const getId = () => (100000 * Math.random()).toFixed(0);
  const newAnecdote = {
    content,
    id: getId(),
    vote: 0,
  };
  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};
export const updateVote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  let anecdoteToUpdate = response.data;
  anecdoteToUpdate = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1 };
  await axios.put(`${baseUrl}/${id}`, anecdoteToUpdate);
};
