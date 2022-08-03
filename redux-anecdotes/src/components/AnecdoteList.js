import { useSelector, useDispatch } from "react-redux";
import { updateAnecdote } from "../reducers/anecdoteReducer";
import { setMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotDt = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  const searchItem = useSelector((state) => state.filter);
  let regex = new RegExp(searchItem, "i");
  const anecdotes = anecdotDt
    .filter((ancd) => ancd.content.match(regex))
    .sort((a, b) => b.votes - a.votes);

  const voteFor = (anecdote) => {
    console.log("vote", anecdote.id);
    dispatch(updateAnecdote(anecdote.id));
    dispatch(setMessage(`You voted for ${anecdote.content}`));
  };
  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => voteFor(anecdote)}>vote</button>
      </div>
    </div>
  ));
};
export default AnecdoteList;
