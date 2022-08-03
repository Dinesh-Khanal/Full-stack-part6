import { createSlice } from "@reduxjs/toolkit";
import { createNew, updateVote } from "../services/anecdote";

//const getId = () => (100000 * Math.random()).toFixed(0);

const initialState = [];

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState,
  reducers: {
    setAnecdotes: (state, action) => {
      return action.payload;
    },
    // create: (state, action) => {
    //   const newAnecdote = {
    //     content: action.payload,
    //     id: getId(),
    //     votes: 0,
    //   };
    //   state.push(newAnecdote);
    // },
    appendAnecdotes: (state, action) => {
      state.push(action.payload);
    },
    vote: (state, action) => {
      return state.map((adts) =>
        adts.id === action.payload ? { ...adts, votes: adts.votes + 1 } : adts
      );
    },
  },
});

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createNew(content);
    dispatch(appendAnecdotes(newAnecdote));
  };
};
export const updateAnecdote = (id) => {
  return async (dispatch) => {
    await updateVote(id);
    dispatch(vote(id));
  };
};
export const { setAnecdotes, appendAnecdotes, vote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
