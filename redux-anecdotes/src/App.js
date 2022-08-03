import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "./services/anecdote";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { setAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAll().then((response) => dispatch(setAnecdotes(response)));
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  );
};

export default App;
